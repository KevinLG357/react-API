
import { useEffect, useContext } from "react";
import { ApiCard } from "../api-card/ApiCard";
import CharacterProvider from "../context/CharacterProvider";
import { CharacterContextType } from "../context/types";

export const Home = () => {
  const { characters, setCharacters, count, getAllCharacters, getPageCharacters } = useContext(CharacterProvider) as CharacterContextType;

  useEffect(() => {
    getAllCharacters();
  }, []);

  function filter(event: any) {
    let words = event.target.value;
    if (words) {
      const filteredData = characters.filter((item) => {
        return item.name.toLowerCase().includes(words.toLowerCase());
      });
      setCharacters(filteredData);
    } else if (words === "") {
      getAllCharacters();
    }
  }

  return (
      <div className="container">
        <div className="mt-5 pt-5 text-center">
          <input
            name="firstName"
            className="w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onChange={filter}
          />
        </div>
        <div className="mx-auto my-20 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {characters.map((person) => (
            <ApiCard
              key={person.id}
              id={person.id}
              name={person.name}
              image={person.image}
              species={person.species}
            />
          ))}
        </div>
        <div className="flex space-x-32 mb-8">
          <button
            className="flex-1 w-4/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => getPageCharacters(count - 1)}
          >
            Previous page {count === 1 ? "" : count - 1}
          </button>
          <div className="flex-1 text-center">Actual page {count}</div>
          <button
            className="flex-1 w-4/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => getPageCharacters(count + 1)}
          >
            Next page {count + 1}
          </button>
        </div>
      </div>
  );
};
