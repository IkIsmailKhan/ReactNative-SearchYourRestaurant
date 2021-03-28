import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const id = navigation.getParam('id');

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data)
        }
        catch (err) {
            setErrorMessage('Something Went Wrong');
        }
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <>
            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <Text style={styles.resName}>{result.name}</Text>

            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.imageView}>
                            <Image style={styles.resImages} source={{ uri: item }} />
                        </View>
                    )
                }}
            />
        </>
    )
};

const styles = StyleSheet.create({
    resName: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 30,
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderColor: 'grey',
        fontWeight: 'bold'
    },
    resImages: {
        height: 250,
        width: '90%',
        borderRadius: 25,
        marginTop: 20,
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ResultsShowScreen;