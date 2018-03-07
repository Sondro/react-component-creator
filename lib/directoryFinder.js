const finder = require('findit')(process.argv[2] || '.')
const path = require('path')

module.exports = {
  find (directory) {
    const dir = finder.on('directory', (dir, stat, stop) => {
      let base = path.basename(dir)
      if (base === '.git' || base === 'node_modules') {
        stop()
      } else if (base === directory) {
        stop()
        console.log('io')
      }
    })
    return dir
  }
}
