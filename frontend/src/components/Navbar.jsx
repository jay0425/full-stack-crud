export default function NavBar({ onOpen, onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value); // Call the onSearch callback with the input value
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto p-4"
            onChange={handleSearchChange}
          />
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary rounded-md" onClick={onOpen}>
            Add Client
          </button>
        </div>
      </div>
    </>
  );
}
