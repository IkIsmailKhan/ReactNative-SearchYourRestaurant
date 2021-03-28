import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
    return (
        <View style={styles.searchBar}>

            <Feather
                name="search"
                size={24}
                color="black"
                style={styles.icon}
            />

            <TextInput
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        height: 40,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        margin: 15,
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 15,
        flex: 1
    },
    icon: {
        alignSelf: 'center',
        marginHorizontal: 10,
    }
})

export default SearchBar;