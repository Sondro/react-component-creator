const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const fileWriter = util.promisify(fs.writeFile)
const StatefulComponent = require('./../templates/StatefulComponent')
const StatelessComponent = require('./../templates/StatelessComponent')

module.exports = async ({ componentName, componentPath, typeOfComponent, language }) => {
  try {
    const component = typeOfComponent === 'Stateful' ? StatefulComponent.replace(/\[component\]/g, componentName) : StatelessComponent.replace(/\[component\]/g, componentName)
    await fileWriter(`${componentPath}/index.js`, component, 'utf-8')
  } catch (e) {
    console.log(e)
  } finally {
    language === 'Português' ? console.log(chalk.black.bgGreen('\nComponente criado com sucesso')) : console.log(chalk.black.bgGreen('\nComponent created successfully'))
  }
}
