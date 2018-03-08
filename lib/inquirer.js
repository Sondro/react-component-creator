const inquirer = require('inquirer')
const chalk = require('chalk')
const files = require('./files')

module.exports = {
  localeQuestionnaire () {
    const choices = ['Português', 'English']
    const question = {
      name: 'language',
      type: 'list',
      message: 'Escolha uma linguagem | Choose a language',
      choices
    }

    return inquirer.prompt(question)
  },

  componentCreationQuestionnaire ({ language }) {
    const choices = ['Stateful', 'Stateless']
    const questions = [
      {
        name: 'componentName',
        value: {
          set currentName (newName) {
            this.name = newName
          },
          name: null
        },
        type: 'input',
        message () {
          return language === 'Português' ? 'Digite um nome para o seu componente: (Exemplo: ReactTestComponent)' : "Enter the component's name: (Example: ReactTestComponent)"
        },
        validate (value) {
          const { currentName } = questions[0].value.currentName = value
          return value.length ? true : (language === 'Português' ? `${chalk.red('Por favor, digite um nome para o seu componente')}` : `${chalk.red('Please enter a name for your component')}`)
        }
      },
      {
        name: 'typeOfComponent',
        type: 'list',
        message () {
          return language === 'Português' ? 'Escolha um tipo de componente' : 'Choose a type for your component:'
        },
        choices
      },
      {
        name: 'componentPath',
        type: 'input',
        message () {
          const { name } = questions[0].value
          return language === 'Português' ?
            `Digite o nome do caminho de destino, por exemplo: "Components" ou "Components/Utils"
  ${chalk.green(`-> Seu componente seria criado em > Components/Utils/${name}`)}
            ` : `Type the path name, for example: "Components" or "Components/Utils"
  ${chalk.green(`-> Your component would be created in > Components/Utils/${name}`)}`
        },
        validate (value) {
          return value.length ? true : (language === 'Português' ? `${chalk.red('Por favor, digite um caminho, caso deseje criar na pasta atual, digite: "."')}` : `${chalk.red('Please, type a path name, if you want to use the current directory, type: "."')}`)
        }
      }
    ]

    return inquirer.prompt(questions)
  }
}
