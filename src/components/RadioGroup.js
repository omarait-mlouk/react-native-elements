import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const RadioGroup = ({ selectedOption, data, onSelect, iconStyle }) => {
    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable 
                        key={item.key} 
                        style={styles.pressable} 
                        onPress={onSelect.bind(this, item.language)}
                    >
                        <Ionicons 
                            name={item.language === selectedOption ? "ios-radio-button-on" : "ios-radio-button-off"} 
                            size={iconStyle.size} 
                            color={iconStyle.color}
                        />
                        <Text style={styles.title}>{item.language}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

export default RadioGroup

const styles = StyleSheet.create({
    pressable: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontWeight: '600',
        letterSpacing: 2,
    }
})