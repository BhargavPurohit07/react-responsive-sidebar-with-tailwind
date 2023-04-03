import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";

const SearchBar = ({ setShow, show }) => {
  return (
    <div
      className={`flex pr-12 pl-12 pt-4 pb-4 font-medium shadow-inner ${
        show && "max-[767px]:hidden"
      }`}
    >
      <div
        className={`my-auto mr-6 cursor-pointer md:hidden ${show && "hidden"}`}
        onClick={setShow}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default SearchBar;
