import React, {useState, useEffect} from 'react'
import { View,ScrollView, StyleSheet, Text } from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import SearchBar from '../components/Searchbar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList'

export const SearchScreen = () => {
    
    const [Term, setTerm] = useState('');
    const [SearchApi, Err, Result] = useResults();

    const filterResultByPrice = (price) => {
        return Result.filter(result => {
            return result.price == price
        })
    }
    return (
      <ScreenContainer style={{flex:1 , backgroundColor:"#ffffff"}}>
      <ScrollView>
        <SearchBar
          Term={Term}
          onTermChange={setTerm}
          onTermSubmit={() => SearchApi(Term)}
        />
        {Err ? <Text>{Err}</Text> : null}
        <ResultList result={filterResultByPrice("$")} title="Big pricier" />
        <ResultList result={filterResultByPrice("$$")} title="Cost effective" />
        <ResultList result={filterResultByPrice("$$")} title="Big spender" />
        <ResultList result={filterResultByPrice("$$$$")} title="ultra premium" />
        </ScrollView>
      </ScreenContainer>
    );
};

const styles = StyleSheet.create({

});

