import React from 'react'
import ReactDOM from 'react-dom'

//React-dom é utilizado par apermitir a manipulação do arquivo html
//para retirar a exteção .jsx, basta configurar no webpack chmado resolve e colocar as configurações
//que estão realizadas neste opção
import Component, {normalComponent} from './componente'




//Uma das vantagens de utilizar React é por que possibilita colcoar o HTML em meio ao código JavaScript
//sem a necessidade de escrever o hrml como string, muito similar ao PHP

//Passando parametros via taf react para o component que está sendo estanciado
//Basta passar oo nome para tag com determinado valor e na função recebê-la
ReactDOM.render(<Component value="Show!"/>, document.getElementById('div2'))

