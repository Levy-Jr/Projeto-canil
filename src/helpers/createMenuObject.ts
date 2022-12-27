//Criando os tipos de string que eu vou receber como argumento no meu parâmetro
type MenuOption = '' | 'all' | 'dog' | 'cat' | 'fish'

//nessa função, se o createMenuObject for chamado e o activeMenu receber algum valor, o nome desse valor será a propriedade que será alterada para true. Por exemplo: se createMenuObject('dog'), o argumento dessa função ('dog') será a propriedade que será setada como true (returnObject[dog] = true)
export const createMenuObject = (activeMenu: MenuOption) => {
  const returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }

  if(activeMenu !== '') {
    returnObject[activeMenu] = true
  }

  return returnObject
}