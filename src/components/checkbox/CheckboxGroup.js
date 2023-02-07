import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const CheckboxGroup = ({ selectedOption, data, onSelect, iconStyle }) => {
    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable 
                        key={item.key} 
                        style={styles.pressable} 
                        onPress={onSelect.bind(this, item.language)}
                    >
                        <MaterialIcons 
                            name={item.language === selectedOption ? "check-box" : "check-box-outline-blank"} 
                            size={iconStyle.size} 
                            color={item.language === selectedOption ? iconStyle.activeColor : iconStyle.inActiveColor}
                        />
                        <Text style={styles.title}>{item.language}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

export default CheckboxGroup

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