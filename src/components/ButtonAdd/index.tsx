import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {} from '@expo/vector-icons';
import { styles } from './style';

type Props = RectButtonProps;


export function ButtonAdd({...rest}: Props){
  return(
    <RectButton 
      style={styles.container}
      {...rest}
    >
      
    </RectButton>
  )
}
