import React from 'react'
import ReactDOM from 'react-dom'

//React-dom é utilizado par apermitir a manipulação do arquivo html
//para retirar a exteção .jsx, basta configurar no webpack chmado resolve e colocar as configurações
//que estão realizadas neste opção
import Component, {normalComponent} from './componente'




//Uma das vantagens de utilizar React é por que possibilita colcoar o HTML em meio ao código JavaScript
//sem a necessidade de escrever o hrml como string, muito similar ao PHP

ReactDOM.render(<Component/>, document.getElementById('div2'))
ReactDOM.render(<normalComponent/>, document.getElementById('div'))

