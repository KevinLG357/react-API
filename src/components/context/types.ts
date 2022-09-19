export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
    url: string;
  };
};

export type CharacterContextType = {
  characters: Array<Character>;
  setCharacters: (value: Array<Character>) => void;
  getAllCharacters: () => void;
  count: number;
  setCount: (value: number) => void;
  getPageCharacters: (page: number) => void;
  getChatacterById: (id: any) => void;
  residents: Array<any>;
  setResidents: (value: Array<Character>) => void;
  getResidents: (value: Array<Character>) => void;
  baseAPIUrl: (url: string) => void;
  charactersId: Array<Character>;
  setCharactersId: (value: Array<number>) => void;
  results: Array<any>;
  setResults: (value: Array<Character>) => void;
};
