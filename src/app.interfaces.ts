export interface Definitions {
  definition: string;
}

export interface Meanings {
  partOfSpeech: string;
  synonyms: string[];
  definitions: Definitions[];
}

export interface Search {
  word: string;
  meanings: Meanings[];
}

export interface SearchError {
  message: string;
  resolution: string;
  title: string;
}

export interface SearchErrorResponse {
  status: number;
  data: SearchError;
}
