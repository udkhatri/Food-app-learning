import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import SearchBar from '../components/Searchbar'
import useResults from '../hooks/useResults'

export const SearchScreen = () => {
    
    const [Term, setTerm] = useState('pizza');
    const [SearchApi, Err, Result] = useResults();
    
    return (
        <ScreenContainer style={{backgroundColor:'#ffffff'}}>
        <SearchBar 
            Term={Term} 
            onTermChange={setTerm}
            onTermSubmit = {()=> SearchApi(Term)}     
        />
        {Err? <Text>{Err}</Text>: null}
        <Text>total {Result.length} restaurant found</Text>
        </ScreenContainer>
    )
};

const styles = StyleSheet.create({

});

