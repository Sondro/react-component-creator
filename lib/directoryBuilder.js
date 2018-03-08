const fs = require('fs')
const CURRENT_DIRECTORY = process.cwd()

module.exports = directories => {
  const createdFolders = []
  let createdPaths = ''
  directories.split('/').forEach(directory => {
    createdPaths += `/${directory}`
    fs.mkdirSync(`${CURRENT_DIRECTORY}${createdPaths}`)
  })
}
