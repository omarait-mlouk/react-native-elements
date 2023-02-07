import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const RadioButton = ({title, isSelected, onPress, iconStyle}) => {

    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <Ionicons 
                name={isSelected ? "ios-radio-button-on" : "ios-radio-button-off"} 
                size={iconStyle.size} 
                color={isSelected ? iconStyle.activeColor : iconStyle.inActiveColor}
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