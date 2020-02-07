import { Container } from 'unstated';

interface WordListState {
    words: string[]
}

class WordListContainer extends Container<WordListState> {
    constructor(...words: string[]) {
        super();
        this.state = {
            words: words
        }
    }

    addWord = (word: string) => {
        const wordToAdd = word.toLowerCase();
        
        this.setState(({ words }) => {
            words.find
            if (words.indexOf(wordToAdd) < 0) {
                const newWords = [...words, wordToAdd];
                return { words: newWords };
            } else {
                return null;
            }
        });
    }

    removeWord = (word: string) => () => {
        this.setState(({ words }) => {
            const wordIndex = words.findIndex(w => w === word);
            if (wordIndex > -1) {
                const newWords = [
                    ...words.slice(0, wordIndex),
                    ...words.slice(wordIndex + 1),
                ];

                return {words: newWords};
            } else {
                return null;
            }
        });
    }
}

let wordList = new WordListContainer('fuck', 'shit', 'motherfucker');
export default wordList;