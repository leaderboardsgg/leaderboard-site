const packageJson = require('../../package.json')

const massagedPnpmEngine = packageJson.engines.pnpm.slice(2)
const massagegPackageManager = packageJson.packageManager.slice(5)

if (massagedPnpmEngine === massagegPackageManager) {
  console.log('PNPM version check passed!')
  console.log(massagedPnpmEngine)
  return massagedPnpmEngine
} else {
  return console.error(
    "PNPM version in package.json engine.pnpm & packageManager don't match!",
  )
}
