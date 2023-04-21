/* eslint-disable @typescript-eslint/no-useless-constructor */
import axios from "axios";
import React from "react";

export class EpisodesList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      episodes: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => {
        this.setState({ episodes: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container mb-5 pb-5">
        <h1 className="text-center font-bold my-7 text-3xl">Episodes</h1>
        <div className="grid gap-1 grid-cols-4">
          {this.state.episodes.map((episode: any, index: number) => (
            <div className="col-12 col-md-6 col-lg-4">
              <div className="max-w-sm overflow-hidden shadow-lg rounded-md border-2 border-gray-400">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {index + 1}.- {episode.name}
                  </div>
                  <p className="text-gray-700 text-base">{episode.episode}</p>
                  <p className="text-gray-700 text-base">{episode.air_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
