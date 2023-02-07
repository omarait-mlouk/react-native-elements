import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const RadioButton = ({title, color, size, isSelected, onPress}) => {

    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <Ionicons 
                name={isSelected ? "ios-radio-button-on" : "ios-radio-button-off"} 
                size={size} 
                color={color}
            />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    pressable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontWeight: '600',
        letterSpacing: 2
    }
})