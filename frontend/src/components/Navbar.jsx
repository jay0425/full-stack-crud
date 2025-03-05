export default function NavBar({ onOPen }) {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center flex gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOPen}>
            Add Client
          </a>
        </div>
      </div>
    </>
  );
}
