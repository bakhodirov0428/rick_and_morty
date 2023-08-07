import { useState } from "react";
import { useEffect } from "react";
import { Layout } from "../components/layout";
import { Card } from "../components/card";
import axios from "../utils/axios";
import { Search } from "../components/search";

export const Location = () => {
  const [locations, setLocations] = useState({});
  const [locationId, setLocationId] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState({});

  const handleChange = e => {
    const { value } = e.target;
    setLocationId(value);
  };

  useEffect(() => {
    (async () => {
      await axios.get("/location").then(res => setLocations(res.data));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/location/${locationId}`);
      setData(res.data);

      const characters = await Promise.all(
        res.data.residents.map(async item => {
          return await axios.get(item).then(res => res.data);
        })
      );

      setCharacters(characters);
    })();
  }, [locationId]);

  return (
    <Layout>
      <section className="container">
        <Search
          title={
            <>
              Location: <span className="text-blue-600">{data.name}</span>
            </>
          }
          subtitle={`Dimension: ${data.dimension}`}
          content={`Type: ${data.type}`}
          search={false}
        />

        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-3">
            <h3 className="text-center font-bold text-4xl">Pick location</h3>

            <select
              id="pickLocation"
              name="location"
              className="w-full py-1 px-2 border outline-none rounded mt-4"
              onChange={handleChange}
            >
              {Array.from(
                { length: locations.info?.count },
                (_, idx) => idx + 1
              ).map(locationId => (
                <option value={locationId}>Location - {locationId}</option>
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
