module.exports = (request, response, config, isDev = false) => {
  const origin = request.headers.origin
  const allowedOrigins = config.cors.allowedOrigins

  if (isDev) {
    response.setHeader('Access-Control-Allow-Origin', '*')
  }
  else if (allowedOrigins.includes(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin)
  }

  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
  response.setHeader('Access-Control-Max-Age', 2592000)

  if (request.method === 'OPTIONS') {
    response.statusCode = 204
    response.end()
    return
  }
}
