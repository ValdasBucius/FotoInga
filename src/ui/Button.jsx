import { NavLink } from "react-router-dom";

function Button({ children, location }) {
  const primary =
    "border border-stone-800 bg-black/25 text-stone-100 px-16 py-4 rounded hover:tracking-wide hover:bg-white/40 hover:px-24 duration-500";
  return (
    <div>
      <NavLink to={location} className={primary}>
        {children}
      </NavLink>
    </div>
  );
}

export default Button;
