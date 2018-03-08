const fs = require('fs')
const CURRENT_DIRECTORY = process.cwd()

module.exports = directories => {
  const createdFolders = []
  let directoriesPath = []
  let createdPaths = ''
  directories.includes('/') ? directoriesPath = directories.split('/') : directoriesPath.push(directories)

  directoriesPath.forEach(directory => {
    createdPaths += `/${directory}`
    fs.mkdirSync(`${CURRENT_DIRECTORY}${createdPaths}`)
  })
}
