import { useEffect, useContext, useState } from "react";
import { ApiCard } from "../api-card/ApiCard";
import CharacterProvider from "../context/CharacterProvider";
import { CharacterContextType } from "../context/types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Home = () => {
  const {
    characters,
    count,
    setCount,
    getAllCharacters,
    getPageCharacters,
  } = useContext(CharacterProvider) as CharacterContextType;

  const [words, setWords] = useState("");

  useEffect(() => {
    getAllCharacters();
  }, []);

  function filter(event: any) {
    setWords(event.target.value);
  }

  const setPageApi = (page: number) => {
    getPageCharacters(page);
    setCount(page);
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center mt-10 pt-5">
        The Rick and Morty API
      </h1>
      <div className="mt-5 pt-5 text-center">
        <input
          name="firstName"
          className="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          onChange={(value) => filter(value)}
        />
      </div>
      <div className="mx-auto my-20 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {words === ""
          ? characters.map((person) => (
              <ApiCard
                key={person.id}
                id={person.id}
                name={person.name}
                image={person.image}
                species={person.species}
              />
            ))
          : characters
              .filter((item) => {
                return item.name.toLowerCase().includes(words.toLowerCase().trim());
              })
              .map((person) => (
                <ApiCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  image={person.image}
                  species={person.species}
                />
              ))}
      </div>

      <div className="flex justify-between space-x-32 mb-8">
        <p>Page {count} of 42</p>
        <Stack spacing={2}>
          <Pagination
            count={42}
            onChange={(e, value) => setPageApi(value)}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};
