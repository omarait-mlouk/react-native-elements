import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import RadioGroup from '../components/RadioGroup'

const LANGUAGES = [
    { key: 'ar', language: 'Arabic' },
    { key: 'ts', language: 'Tashlhyt' },
    { key: 'en', language: 'English' },
];

const TestGroupRadio = () => {
    // default language is english
    const [language, setLanguage] = useState('English');

    // change the default language
    const onSelectHandler = (selectedLanguage) => {
        setLanguage(selectedLanguage)
    }

    // customize icon style (color, size)
    const iconStyle = {
        color: 'gray',
        size: 20,
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Group Radio Button</Text>
            <RadioGroup 
                selectedOption={language}
                data={LANGUAGES} 
                onSelect={onSelectHandler}
                iconStyle={iconStyle}
            />
        </View>
    )
}

export default TestGroupRadio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        marginBottom: 20,
        fontSize: 17,
        fontWeight: '700'
    }
})