import React from 'react'
import { View, Text } from 'react-native'

const font = { style: { fontSize: 30 } }

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props => 
    <View>
        <Text {...font}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text {...font}>Pai: {props.nome} {props.sobrenome}</Text>
        {filhosComProps(props)}
    </View>

export const Avo = props =>
    <View>
        <Text {...font}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='Jorge' sobrenome={props.sobrenome} >
            <Filho nome='Júlia'></Filho>
            <Filho nome='Bruno'></Filho>
            <Filho nome='Pedro'></Filho>
        </Pai>
        <Pai {...props} nome='João' >
            <Filho nome='Maria'></Filho>
        </Pai>
    </View>