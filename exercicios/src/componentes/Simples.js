import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// export default function(props){
//     return <Text>{props.texto}</Text>
// }

/* props é um parametro para a função arrow => */
export default props => 
    <Text style={Padrao.ex}>Arrow: {props.texto}</Text>