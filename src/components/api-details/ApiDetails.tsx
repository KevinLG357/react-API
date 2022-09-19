/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCard } from "../api-card/ApiCard";
import { Residents } from "../residents/Residents";
import CharacterProvider from "../context/CharacterProvider";
import { CharacterContextType } from "../context/types";

export const ApiDetails = () => {
  const { id } = useParams();
  const { residents, charactersId, getChatacterById, getResidents, results } =
    useContext(CharacterProvider) as CharacterContextType;

  useEffect(() => {
    if (id) {
      getChatacterById(id);
    }
  }, [id]);

  useEffect(() => {
    if (residents.length > 0) {
      getResidents(residents);
    }
  }, [residents]);

  return (
    <div className="container">
      <h1 className="text-center mt-20 font-bold text-2xl">
        Character Details
      </h1>
      <div className="lg:container lg:mx-auto my-20 grid grid-cols-5 gap-2">
        {charactersId.map((person) => (
          <ApiCard
            key={person.id}
            id={person.id}
            name={person.name}
            image={person.image}
            species={person.species}
            gender={person.gender}
            status={person.status}
            origin={person.origin.name}
            location={person.location.name}
            locationUrl={person.location.url}
          />
        ))}
      </div>

      <h1 className="text-center font-bold">
        Residents of that location {/* <b>{characters[0].location.name}</b> */}
      </h1>
      <div className="lg:container lg:mx-auto my-20 grid grid-cols-5 gap-2">
        {results.map((person) => (
          <Residents
            key={person.id}
            id={person.id}
            name={person.name}
            image={person.image}
            species={person.species}
            gender={person.gender}
            status={person.status}
            origin={person.origin.name}
            location={person.location.name}
          />
        ))}
      </div>
    </div>
  );
};
