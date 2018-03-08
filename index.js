#!/usr/bin/env node

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const files = require('./lib/files')
const inquirer = require('./lib/inquirer')
const directoryFinder = require('./lib/directoryFinder')
const componentCreator = require('./lib/componentCreator')

clear()
console.log(chalk.cyan(figlet.textSync('GD RCC', { horizontalLayout: 'full' })))
console.log(chalk.green('GD React Component Creator'))

const run = async () => {
  const language = await inquirer.localeQuestionnaire()
  const answers = await inquirer.componentCreationQuestionnaire(language)
  const directory = await directoryFinder.finder(answers.componentPath, language)
  await componentCreator(answers, language)
}

run()
