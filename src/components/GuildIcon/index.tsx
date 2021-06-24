import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from './style';

export function GuildIcon() {
  const uri = 'https://i.redd.it/s9biyhs4lix61.jpg'

  return(
    <Image
     source={{ uri }}
     style={styles.image}
     resizeMode="cover"
    />
  )
}