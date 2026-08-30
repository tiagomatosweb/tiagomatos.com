export default defineEventHandler(async (event) => {
  const body = await readBody<{ name?: string, email?: string }>(event)
  const email = String(body?.email || '').trim().toLowerCase()
  const name = String(body?.name || '').trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'E-mail inválido',
    })
  }

  const config = useRuntimeConfig(event)
  const apiUrl = String(config.plunkApiUrl || 'https://plunk-api.tiagomatos.com').replace(/\/$/, '')
  const secretKey = String(config.plunkSecretKey || '')

  if (!secretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Newsletter não configurada',
    })
  }

  try {
    await $fetch(`${apiUrl}/contacts`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        email,
        subscribed: true,
        ...(name ? { data: { firstName: name } } : {}),
      },
    })
  }
  catch (error: unknown) {
    const status = Number((error as { statusCode?: number, status?: number })?.statusCode || (error as { status?: number })?.status || 0)

    if (status === 200 || status === 201) {
      return { ok: true }
    }

    console.error('[newsletter] Plunk error', error)

    throw createError({
      statusCode: 502,
      statusMessage: 'Não deu pra cadastrar. Tenta de novo em instantes.',
    })
  }

  return { ok: true }
})
