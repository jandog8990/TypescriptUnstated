import { Container } from 'unstated';
import { EventHandler, ChangeEvent } from 'react';

interface SentenceState {
    filteredSentence: string
};

export default class SentenceContainer extends Container<SentenceState> {
    state = {
        filteredSentence: ''
    };

    // Lambda function that takes the wordlist input and filters, then sets
    // the filetered sentence and sets the state
    filterSentence = (wordlist: string, inputText: string) => {
        console.log("Event string = " + inputText);
        const filteredSentence = inputText
            .trim()
            .split(' ')
            .map(word => {
                if (wordlist.includes(word.toLowerCase())) {
                    return '*'.repeat(word.length);
                }
                return word;
            })
            .join(' ');
        console.log("Filtered Sentence = " + filteredSentence);
        this.setState({ filteredSentence });
    }
}