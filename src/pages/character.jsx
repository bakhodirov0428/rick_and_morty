import { useState, useEffect } from "react";
import { useMatches, useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";
import axios from "../utils/axios";

export const Character = (props) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [matches] = useMatches();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/character/${matches.params.id}`).then((res) => {
      setCharacter(res.data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Layout>
        <h1 className="text-center font-black text-5xl">Loading...</h1>
      </Layout>
    );

  return (
    <Layout>
      <div className="container">
        <button
          className="px-4 py-2 bg-blue-600 rounded text-white"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>

        <section className="min-w-md max-w-md mx-auto space-y-2">
          <h1 className="font-bold text-4xl text-center">{character.name}</h1>

          <img
            src={character.image}
            className="w-full h-full aspect-square object-cover rounded"
          />

          <span
            className={`block w-full text-center rounded font-semibold text-lg py-2 badge-${character.status.toLowerCase()}`}
          >
            {character.status}
          </span>

          <ul className="list-none">
            <li>
              <b>Gender: </b> {character.gender}
            </li>
            <li>
              <b>Location: </b> {character.location.name}
            </li>
            <li>
              <b>Origin: </b> {character.origin.name}
            </li>
            <li>
              <b>Species: </b> {character.species}
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};
