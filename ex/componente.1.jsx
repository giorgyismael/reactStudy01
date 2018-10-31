//Componentes podem ser criados baseados em Funções ou Classes
//Lembrando, em JavaScript, toda classe, ao final vira uma functions ao ser tranpilada
//Para criar qualquer arquivo com codigo react, é preciso importar o módulo
import React from 'react'

//Para criar um componente, é preciso colocar o export, pois caso contrário não é possível importá-la


//Utilizando Arrow Funcctions
//Não precisa de retorno e se utiliza parenteses apra identificar o que será retornado

//Toda a função/componente react tem propriedades --> "props", e para definir estas propriedades, basta defini-las 
//na tag que a criou passando parâmetros

const ComponentTree = props => <h1>Terceiro Componente</h1>
const ComponentFour = props => <h1>Quarto Componente</h1>

//Outra Forma de Exporta
export {ComponentTree, ComponentFour}


//E por último, quando existe uma função com export default
// o nome da função vira o nome do arquivo
export default ComponentDefault => <h1>Default Componente</h1>