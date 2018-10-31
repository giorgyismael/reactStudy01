//Componentes podem ser criados baseados em Funções ou Classes
//Lembrando, em JavaScript, toda classe, ao final vira uma functions ao ser tranpilada
//Para criar qualquer arquivo com codigo react, é preciso importar o módulo
import React from 'react'

//Para criar um componente, é preciso colocar o export, pois caso contrário não é possível importá-la

//função javaScript normal, com return
export function normalComponent(){
    return <h1>Primeiro Componente em React</h1>
}

//Utilizando Arrow Funcctions
//Não precisa de retorno e se utiliza parenteses apra identificar o que será retornado
export default () =>  (
<h1>Primeiro Componente com Arrow Function</h1>
)