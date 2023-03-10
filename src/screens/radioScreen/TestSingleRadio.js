import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioButton from '../../components/radio/RadioButton'

const TestSingleRadio = () => {
    // by default the radio button not selected
    const [isSelected, setIsSelected] = useState(false)
    
    // change the radio button based on its last value
    const onRadioHandler = () => {
        setIsSelected(!isSelected)
    }

    // customize icon style (color, size)
    const iconStyle = {
        activeColor: 'blue', // when selected
        inActiveColor: 'gray', // when not selected
        size: 20,
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Single Radio Button</Text>
            <RadioButton 
                title='Arabic' 
                isSelected={isSelected}
                onPress={onRadioHandler}
                iconStyle={iconStyle}
            />
        </View>
    )
}

export default TestSingleRadio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginBottom: 20,
        fontSize: 17,
        fontWeight: '700'
    }
})