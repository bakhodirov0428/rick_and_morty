import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Layout } from "../components/layout";
import { Search } from "../components/search";
import { useFilter } from "../context/filter";
import axios from "../utils/axios";

const ChevronIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${className}`}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Accordion = props => {
  const [tab, setTab] = useState("status");

  const handleClick = e => setTab(e.target.dataset?.tab);
  const handleSelect = e => {
    const { value, key } = e.target.dataset;

    switch (key) {
      case "status":
        props.setStatus(value);
        break;
      case "species":
        props.setSpecies(value);
        break;
      case "gender":
        props.setGender(value);
        break;
      default:
        throw Error("error");
    }
  };

  return (
    <div className="relative rounded overflow-hidden mt-3">
      <div className="group border" aria-selected={tab === "status"}>
        <div
          data-tab="status"
          onClick={handleClick}
          className="flex items-center justify-between p-4 group-aria-selected:bg-blue-200"
        >
          <p>
            Filter by <span className="font-semibold">status</span>
          </p>

          <ChevronIcon className="group-aria-selected:rotate-180 transition-transform" />
        </div>

        <div className="hidden group-aria-selected:flex flex-wrap gap-4 p-4">
          <button
            data-value="alive"
            data-key="status"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Alive
          </button>
          <button
            data-value="dead"
            data-key="status"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Dead
          </button>
          <button
            data-value="unknown"
            data-key="status"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Unknown
          </button>
        </div>
      </div>

      <div className="group border" aria-selected={tab === "species"}>
        <div
          data-tab="species"
          onClick={handleClick}
          className="flex items-center justify-between p-4 group-aria-selected:bg-blue-200"
        >
          <p>
            Filter by <span className="font-semibold">species</span>
          </p>

          <ChevronIcon className="group-aria-selected:rotate-180 transition-transform" />
        </div>

        <div className="hidden group-aria-selected:flex flex-wrap gap-4 p-4">
          <button
            data-value="human"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Human
          </button>
          <button
            data-value="alien"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Alien
          </button>
          <button
            data-value="humanoid"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Humanoid
          </button>
          <button
            data-value="poopybutthole"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Poopybutthole
          </button>
          <button
            data-value="mythological"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Mythological
          </button>
          <button
            data-value="unknown"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Unknown
          </button>
          <button
            data-value="animal"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Animal
          </button>
          <button
            data-value="disease"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Disease
          </button>
          <button
            data-value="robot"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Robot
          </button>
          <button
            data-value="cronenberg"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Cronenberg
          </button>
          <button
            data-value="planet"
            data-key="species"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Planet
          </button>
        </div>
      </div>

      <div className="group border" aria-selected={tab === "gender"}>
        <div
          data-tab="gender"
          onClick={handleClick}
          className="flex items-center justify-between p-4 group-aria-selected:bg-blue-200"
        >
          <p>
            Filter by <span className="font-semibold">gender</span>
          </p>

          <ChevronIcon className="group-aria-selected:rotate-180 transition-transform" />
        </div>

        <div className="hidden group-aria-selected:flex flex-wrap gap-4 p-4">
          <button
            data-value="male"
            data-key="gender"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Male
          </button>
          <button
            data-value="female"
            data-key="gender"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Female
          </button>
          <button
            data-value="genderless"
            data-key="gender"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Genderless
          </button>
          <button
            data-value="unknown"
            data-key="gender"
            onClick={handleSelect}
            className="py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            Unknown
          </button>
        </div>
      </div>
    </div>
  );
};

export const Characters = () => {
  const [response, setResponse] = useState({});
  const [status, setStatus] = useState(null);
  const [species, setSpecies] = useState(null);
  const [gender, setGender] = useState(null);
  const { search: name } = useFilter();

  const clearAll = () => {
    setStatus(null);
    setSpecies(null);
    setGender(null);
  };

  useEffect(() => {
    axios
      .get("/character", {
        params: { status, gender, species, name },
      })
      .then(res => setResponse(res.data));
  }, [status, gender, species, name]);

  return (
    <Layout>
      <section className="container">
        <Search title="Character" />

        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-3">
            <h3 className="text-center font-bold text-4xl">Filter</h3>
            <a
              href="#"
              className="block text-blue-600 underline mt-2 text-center"
              onClick={clearAll}
            >
              Clear all
            </a>

            <Accordion
              setGender={setGender}
              setStatus={setStatus}
              setSpecies={setSpecies}
            />
          </div>

          <div className="grid grid-cols-3 col-span-5 gap-4">
            {response.results?.map(character => (
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
