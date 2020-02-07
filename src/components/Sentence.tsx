import React from 'react';
import { Component } from 'react';
import { Subscribe } from 'unstated';
import {
    Text,
    TextInput,
    View
} from 'react-native';

import { Divider } from 'react-native-elements';

import WordListContainer from '../containers/WordListContainer';
import SentenceContainer from '../containers/SentenceContainer';

const Sentence = () => (
    <Subscribe to={[WordListContainer, SentenceContainer]}>
        {({state: {words}}, sentenceStore: SentenceContainer) => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Filtered Sentence</Text>
            <Text>{sentenceStore.state.filteredSentence}</Text>
            <TextInput
                onChangeText={(text) => sentenceStore.filterSentence(words, text)}
                placeholder="Enter sentence here..."
            />
    
            </View>
        )}
    </Subscribe>
);

export default Sentence;