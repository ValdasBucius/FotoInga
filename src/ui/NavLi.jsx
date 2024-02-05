import { NavLink } from "react-router-dom";

function NavLi({ path, children }) {
  const base = `relative hover:text-white transition-all`;

  const after = `
    after:content-[''] after:bg-pink-500 after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300
  `;
  const hoverAfter = `hover:after:w-[100%]`;
  return (
    <li className={`${base} ${after} ${hoverAfter}`}>
      <NavLink to={path}>{children}</NavLink>
    </li>
  );
}

export default NavLi;
