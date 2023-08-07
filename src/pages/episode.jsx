import { useState } from "react";
import { useEffect } from "react";
import { Layout } from "../components/layout";
import { Card } from "../components/card";
import { Search } from "../components/search";
import axios from "../utils/axios";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState({});
  const [episodeId, setEpisodeId] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState({});

  const handleChange = e => {
    const { value } = e.target;
    setEpisodeId(value);
  };

  useEffect(() => {
    (async () => {
      await axios.get("/episode").then(res => setEpisodes(res.data));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/episode/${episodeId}`);
      setData(res.data);

      const characters = await Promise.all(
        res.data.characters.map(async item => {
          return await axios.get(item).then(res => res.data);
        })
      );

      setCharacters(characters);
    })();
  }, [episodeId]);

  return (
    <Layout>
      <section className="container">
        <Search
          title={
            <>
              Location: <span className="text-blue-600">{data.name}</span>
            </>
          }
          subtitle={`Air date: ${data.air_date}`}
          search={false}
        />

        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-3">
            <h3 className="text-center font-bold text-4xl">Pick episodes</h3>

            <select
              id="pickLocation"
              name="location"
              className="w-full py-1 px-2 border outline-none rounded mt-4"
              onChange={handleChange}
            >
              {Array.from(
                { length: episodes.info?.count },
                (_, idx) => idx + 1
              ).map(episodeId => (
                <option value={episodeId}>Episode - {episodeId}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 col-span-5 gap-4">
            {characters?.map(character => (
              <Card
                key={character.id}
                id={character.id}
                location={character.location.name}
                img={character.image}
                name={character.name}
                status={character.status.toLowerCase()}
                link={`/character/${character.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
