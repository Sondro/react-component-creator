const ff = require('node-find-folder')
const inquirer = require('inquirer')
const chalk = require('chalk')
const directoryBuilder = require('./directoryBuilder')

const directoryFinder = async (directory, language) => {
  const targetDirectory = find(directory)
  if (targetDirectory.length > 0) {
    directoryBuilder(targetDirectory)
  } else {
    const { createFolder } = await unexistantPath(directory, language)
    return (createFolder === 'Sim' || createFolder === 'Yes') ? directoryBuilder(directory) : false
  }
}

const find = directory => targetDirectory = new ff(directory)

const unexistantPath = (directory, { language })  => {
  const CURRENT_DIRECTORY = process.cwd()
  const optionsPT = ['Sim', 'Não']
  const optionsEN = ['Yes', 'No']
  question = {
    name: 'createFolder',
    type: 'list',
    message () {
      return language === 'Português' ?
      `\n${chalk.bgRed.bold('\nEste caminho não existe, gostaria de criá-lo?')}\n${chalk.cyan(`  Este caminho seria criado em ${CURRENT_DIRECTORY}\\${directory}`)}\n  ${chalk.black.bgWhite('Continuar?')}` :
      `\n${chalk.bgRed.bold("\nThis path doesn't exist, do you want to create it?")}\n${chalk.cyan(`  This path would be created in ${CURRENT_DIRECTORY}\\${directory}`)}\n  ${chalk.black.bgWhite('Continue?')}`
    },
    choices () {
      return language === 'Portugues' ? optionsPT : optionsEN
    }
  }

  return inquirer.prompt(question)
}

module.exports = {
  finder: directoryFinder,
  find
}
