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

export interface TranslateRequest {
   q: string;
   source: string;
   target: string;
}

export interface TranslateResponse {
   translatedText: string;
   detectedLanguage?: {
      confidence: number;
      language: string;
   };
}

export interface Option {
   label: string;
   value: string;
   icon?: string;
}
