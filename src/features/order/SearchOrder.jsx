import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-40 rounded-full bg-yellow-100/50 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:ring-offset-1 md:w-64 md:focus:w-72"
        placeholder="Search order #"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
      />
    </form>
  );
}

export default SearchOrder;
