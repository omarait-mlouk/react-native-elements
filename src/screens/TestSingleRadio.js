import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioButton from '../components/RadioButton'

const TestSingleRadio = () => {
    // by default the radio button not selected
    const [isSelected, setIsSelected] = useState(false)
    
    // change the radio button based on its last value
    const onRadioHandler = () => {
        setIsSelected(!isSelected)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Single Radio Button</Text>
            <RadioButton 
                title='Arabic' 
                isSelected={isSelected} 
                color='gray' 
                size={20} 
                onPress={onRadioHandler}
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