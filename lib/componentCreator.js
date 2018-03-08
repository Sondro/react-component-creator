const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const fileWriter = util.promisify(fs.writeFile)
const StatefulComponent = require('./../templates/StatefulComponent')

module.exports = async (componentName, componentPath, { language }) => {
  try {
    const component = StatefulComponent.replace(/\[component\]/g, componentName)
    await fileWriter(`${componentPath}/index.js`, component, 'utf-8')
  } catch (e) {
    console.log(e)
  } finally {
    language === 'Português' ? console.log(chalk.black.bgGreen('\nComponente criado com sucesso')) : console.log(chalk.black.bgGreen('\nComponent created successfully'))
  }
}
