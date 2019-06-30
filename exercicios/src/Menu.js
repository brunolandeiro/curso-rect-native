import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import Contador from './componentes/Contador'
import NerdCast from './componentes/NerdCast';
import {Avo} from './componentes/ComunicacaoDireta';
import ListaFlex from './componentes/ListaFlex';
import TextoSincronizado from './componentes/ComunicacaoIndireta';
import Flex from './componentes/Flex';

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista (Flex Box)' }
    },
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },
    Avo: {
        screen: () => <Avo nome='Jozé' sobrenome='Silva' />
    },
    NerdCast:{
        screen: () => <NerdCast />
    },
    Contador: {
        screen: () => <Contador />
    },
    ParImpa: {
        screen: () => <ParImpar numero={6} />,
        navigatorOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto="Exercicos" />
    }
}, { drawerWidth: 300 })