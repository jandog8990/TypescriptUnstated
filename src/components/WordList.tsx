import React from 'react';
import { Component } from 'react';
import { Subscribe } from 'unstated';

import {
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

import WordListContainer from '../containers/WordListContainer';

const Word = ({ word, removeWord }) => (
    <View>
        <Text>{word}</Text>
        <Button title="Remove" onPress={removeWord(word)} />
    </View>
);

// Component that subscribes to word list container to change state of bad words
// TODO Create a navigation stack consisting of the main list and word list
export default class WordList extends Component {
    wordInput = React.createRef();

    // Add word to the container object using container method
    handleClick = addWord => () => {
        if (this.wordInput.current.value) {
            addWord(this.wordInput.current.value);
            this.wordInput.current.value = '';
        }
    }

    render() {
        return (
            <Subscribe to={[WordListContainer]}>
                {({state: { words }}, wordListStore: WordListContainer) => (
                    <View style={{ flex: 1, alignItems: 'center-bottom', justifyContent: 'center' }}>
                        <Text>Banned Words</Text>
                        <View>
                            {words.map(word => (
                                    <Word key={word} word={word} removeWord={wordListStore.removeWord} />
                                ))}
                        </View>
                        <View>
                            <TextInput ref={component => this.wordInput = component} />
                            <Button title="Add Word" onPress={this.handleClick(wordListStore.addWord)} />
                        </View>
                    </View>
                )}
            </Subscribe>

        );
    }
}
