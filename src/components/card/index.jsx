import { Link } from "react-router-dom";
import { createStore } from "redux";

const createReducer = (state = [], action) => {
  if (state.includes(action.id)) {
    state = state.filter((id) => id !== action.id);
  } else {
    state.push(action.id);
  }

  return state;
};

const reducer = createStore(createReducer);

const HeartIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
    {...props}
  >
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

export const Card = ({ id, location, img, name, status, link }) => {
  const handleClick = (e) => {
    const { id } = e.target.dataset;
    reducer.dispatch({ id, type: "action/save" });
  };

  return (
    <div className="relative border rounded overflow-hidden transition-colors hover:border-blue-600">
      <figure className="overflow-hidden">
        <img
          src={img}
          className="aspect-square w-full h-full object-center object-cover"
        />
      </figure>

      <div className="space-y-1 p-2">
        <h2 className="font-bold text-xl">{name}</h2>
        <small className="!mt-2 block">Last location:</small>
        <p className="!mt-0 font-semibold">{location}</p>
        <div className="flex items-center gap-4">
          <Link
            to={link}
            className="inline-block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-500 transition-colors"
          >
            Read more
          </Link>
          <button
            data-id={id}
            className="group p-2 border hover:border-red-100 transition-colors rounded aria-checked:bg-red-100"
            aria-checked={false}
            onClick={handleClick}
          >
            <HeartIcon className="group-aria-checked:text-red-600 text-slate-400 pointer-events-none" />
          </button>
        </div>
      </div>

      <span
        className={`rounded absolute text-sm px-2 py-1 top-2 right-2 badge-${status}`}
        data-status={status}
      >
        {status}
      </span>
    </div>
  );
};
