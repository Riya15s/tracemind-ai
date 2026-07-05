const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="my-6">
      <input
        type="text"
        placeholder="🔍 Search incidents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
      />
    </div>
  );
};

export default SearchBar;