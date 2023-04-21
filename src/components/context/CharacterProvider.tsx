/* eslint-disable no-lone-blocks */
import { createContext, useState } from "react";
import { Character } from "./types";
import axios from "axios";

const CharacterContext = createContext({});

interface props {
  children?: JSX.Element | JSX.Element[];
}

export function CharacterProvider({ children }: props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [charactersId, setCharactersId] = useState<Character[]>([]);
  const [residents, setResidents] = useState<Character[]>([]);
  const [results, setResults] = useState<Character[]>([]);
  const [count, setCount] = useState(1);
  const baseAPIUrl = "https://rickandmortyapi.com/api";

  const getAllCharacters = async () => {
    try {
      await axios.get(baseAPIUrl + "/character").then((res) => {
        setCharacters(res.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPageCharacters = async (page: number) => {
    setCount(page);
    try {
      await axios.get(baseAPIUrl + "/character/?page=" + page).then((res) => {
        setCharacters(res.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getChatacterById = async (id: any) => {
    let data: any = [];
    try {
      const response = await axios.get(baseAPIUrl + "/character/" + id);
      data.push(response.data);
      setCharactersId(data);
      getLocationByUrl(response.data.location.url);
    } catch (error) {
      console.log(error);
    }
  };

  const getLocationByUrl = async (url: any) => {
    try {
      setResidents([]);
      
      await axios.get(url).then((res) => {
        setResidents(res.data.residents);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getResidents = async (url: any) => {
    try {
      let information: any = [];
      setResults([]);

      for (let i = 0; i < url.length; i++) {
        const response = await axios.get(url[i]);
        information.push(response.data);
      }
      setResults([...information]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        getAllCharacters,
        count,
        setCount,
        getPageCharacters,
        getChatacterById,
        getLocationByUrl,
        residents,
        setResidents,
        baseAPIUrl,
        charactersId,
        setResults,
        results,
        getResidents,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterContext;
