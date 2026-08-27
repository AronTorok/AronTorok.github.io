const NavLink = ({ name, link, hamButton, setHamButton }) => {
  return (
    <a
      href={link}
      className={`hover:text-zinc-500 ${hamButton ? "" : "max-sm:hidden"}`}
      onClick={() => {
        setHamButton(false);
      }}
    >
      {name}
    </a>
  );
};

export default NavLink;
