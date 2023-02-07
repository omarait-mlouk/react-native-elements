import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckboxGroup from '../../components/checkbox/CheckboxGroup'

const LANGUAGES = [
    { key: 'ar', language: 'Arabic' },
    { key: 'ts', language: 'Tashlhyt' },
    { key: 'en', language: 'English' },
];

const TestGroupCheckbox = () => {
    // default language is english
    const [language, setLanguage] = useState('English');

    // change the default language
    const onSelectHandler = (selectedLanguage) => {
        setLanguage(selectedLanguage)
    }

    // customize icon style (color, size)
    const iconStyle = {
        activeColor: 'blue', // when selected
        inActiveColor: 'gray', // when not selected
        size: 20,
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Group Checkbox Button</Text>
            <CheckboxGroup
                selectedOption={language}
                data={LANGUAGES} 
                onSelect={onSelectHandler}
                iconStyle={iconStyle}
            />
        </View>
    )
}

export default TestGroupCheckbox

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