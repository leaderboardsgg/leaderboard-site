/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable vue/sort-keys */

/*
 * API Importer
 *
 * This script imports the API and auto generates methods, types,
 * interfaces and documentation, given the Swagger JSON output
 * from the backend. The results of which are then stored in the
 * path specified by the `output` argument.
 */

const args = process.argv.reduce((acc, current) => {
  if (current.includes('=')) {
    const [key, value] = current.substring(2).split('=')
    acc[key] = value
  }

  return acc
}, {})

require('dotenv-safe').config()
const { resolve } = require('path')
const { generateApi } = require('swagger-typescript-api')
const url =
  args?.url ?? `${process.env.BACKEND_BASE_URL}/swagger/v1/swagger.json`

console.log(`Generation url: ${url}`)

generateApi({
  output: resolve(process.cwd(), './lib/api'),
  url,

  enumNamesAsValues: true,
  extractRequestBody: true,
  extractRequestParams: true,
  generateResponses: true,
  generateRouteTypes: true,
  generateUnionEnums: true,
  httpClientType: 'fetch',
  moduleNameFirstTag: true,
  modular: true,
  singleHttpClient: false,
})
