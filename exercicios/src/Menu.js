import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import Contador from './componentes/Contador'
import NerdCast from './componentes/NerdCast';

export default createDrawerNavigator({
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