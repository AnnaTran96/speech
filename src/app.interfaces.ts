export interface Phonetics {
	audio: string;
	text: string;
}

export interface Definitions {
	definition: string;
	antonyms: string[];
	synonyms: string[];
}

export interface Meanings {
	partOfSpeech: string;
	antonyms: string[];
	synonyms: string[];
	definitions: Definitions[];
}

export interface Search {
	word: string;
	phonetics: Phonetics[];
	meanings: Meanings[];
}
