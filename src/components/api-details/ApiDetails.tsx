/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCard } from "../api-card/ApiCard";
import { Residents } from "../residents/Residents";
import CharacterProvider from "../context/CharacterProvider";
import { CharacterContextType } from "../context/types";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import "semantic-ui-css/semantic.min.css";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

export const ApiDetails = () => {
  const { id } = useParams();
  const { residents, charactersId, getChatacterById, getResidents, results } =
    useContext(CharacterProvider) as CharacterContextType;
  const [timer, setTimer] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      getChatacterById(id);
    }
  }, [id]);

  useEffect(() => {
    if (residents.length > 0) {
      getResidents(residents);
    }
    console.log(residents);
  }, [residents]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="flex justify-between">
        <Link
          to="/"
          className="mt-12 pt-12 ml-10 pl-9 block text-gray-700 rounded hover:text-violet-700"
          aria-current="page"
        >
          <BsArrowLeftSquareFill size={30} title="Go Back" />
        </Link>

        <h1 className="text-center mt-20 font-bold text-2xl">
          Character Details
        </h1>

        <p></p>
      </div>

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

      <h1 className="text-center">
        Residents of location:{" "}
        <strong>
          {charactersId.map((info) => {
            return info.location.name;
          })}
        </strong>
      </h1>
      <div>
        {timer ? (
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
        ) : (
          <div className="text-center my-8">
            {charactersId.map((info) => {
              return info.location.name === "unknown" ? (
                <h1 className="text-red-600">¡There are no residents!</h1>
              ) : (
                <Segment key={info.location.name}>
                  <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                  </Dimmer>

                  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </Segment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
