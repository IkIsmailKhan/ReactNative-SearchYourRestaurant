import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResult';
import ResultList from "../components/ResultList";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, errorMessage, searchApi] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(item => {
            return item.price === price
        })
    };

    return (
        <>
            <SearchBar
                term={term}
                onChangeTerm={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultList title='Cost Effcetive' results={filterResultsByPrice('$')} />
                <ResultList title='Bit Pricer' results={filterResultsByPrice('$$')} />
                <ResultList title='Big Spender' results={filterResultsByPrice('$$$')} />
            </ScrollView>
        </>
    )
}

export default SearchScreen;