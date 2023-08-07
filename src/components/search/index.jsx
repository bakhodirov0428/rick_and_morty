import { useFilter } from "../../context/filter";

export const Search = ({ title, subtitle, content, search = true }) => {
  const { setSearch } = useFilter();

  const handleChange = e => {
    const { value } = e.target;

    if (value === "") setSearch(null);
    else setSearch(value);
  };

  return (
    <section
      id="search"
      className="py-16 text-center max-w-4xl mx-auto space-y-2"
    >
      <h2 className="font-bold text-5xl">{title}</h2>
      {subtitle && <h3 className="text-xl font-semibold">{subtitle}</h3>}
      {content && <p>{content}</p>}

      {search && (
        <input
          name="search"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          className="w-full rounded-full outline-none py-2 px-4 border !mt-8"
        />
      )}
    </section>
  );
};
