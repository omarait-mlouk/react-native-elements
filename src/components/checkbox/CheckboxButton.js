import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CheckboxButton = ({title, isSelected, onPress, iconStyle}) => {
    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <MaterialIcons 
                name={isSelected ? "check-box" : "check-box-outline-blank"} 
                size={iconStyle.size} 
                color={isSelected ? iconStyle.activeColor : iconStyle.inActiveColor }
            />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}

export default CheckboxButton

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