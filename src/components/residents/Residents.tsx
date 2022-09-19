import { Link } from "react-router-dom";

export const Residents = (data: any) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {data.location && (
        <img className="w-full" src={data.image} alt={data.name} />
      )}
      {data.location == null && (
        <Link to={"api-details/" + data.id}>
          <img className="w-full" src={data.image} alt={data.name} />
        </Link>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.name}</div>
        <p className="text-dark">
          <b>Species:</b> {data.species}
        </p>
        {data.gender && (
          <p className="text-dark">
            <b>Gender:</b> {data.gender}
          </p>
        )}
        {data.status && (
          <p className="text-dark">
            <b>Status:</b> {data.status}
          </p>
        )}
        {data.origin && (
          <p className="text-dark">
            <b>Origin:</b> {data.origin}
          </p>
        )}
        {data.location && (
          <p className="text-dark">
            <b>Location:</b> {data.location}
          </p>
        )}
      </div>
    </div>
  );
};
