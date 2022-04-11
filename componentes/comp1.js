import React from 'react';
import {Text,StyleSheet} from 'react-native';
import Estilos from '../estilo/Estilos.js';

export default function comp1(props){
    let cu = props.membro
    return(
        <Text style = {Estilos.textoTitulo}>Vai {cu}</Text>
    )
}
