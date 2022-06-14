/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-dsiable no-console */
/* eslint-disable vue/sort-keys */

/*
 * API Importer
 *
 * This script imports the API and auto generates methods, types,
 * interfaces and documentation, given the Swagger JSON output
 * from the backend. The results of which are then stored in the
 * path specified by the `output` argument.
 */

require('dotenv-safe').config()
const { resolve } = require('path')
const { generateApi } = require('swagger-typescript-api')

generateApi({
  output: resolve(process.cwd(), './lib/api'),
  url: `${process.env.BACKEND_BASE_URL}/swagger/v1/swagger.json`,
  templates: resolve(process.cwd(), './scripts/templates'),

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
