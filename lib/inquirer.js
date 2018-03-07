const inquirer = require('inquirer')
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
        type: 'input',
        message () {
          return language === 'Português' ? 'Digite um nome para o seu componente: (Exemplo: ReactTestComponent)' : "Enter the component's name: (Example: ReactTestComponent)"
        },
        validate (value) {
          return value.length ? true : (language === 'Português' ? 'Por favor, digite um nome para o seu componente' : 'Please enter a name for your component')
        }
      },
      {
        name: 'typeOfComponent',
        type: 'list',
        message () {
          return language === 'Português' ? 'Escolha um tipo de componente' : 'Choose a type for your component:'
        },
        choices
      }
    ]

    return inquirer.prompt(questions)
  }
}
