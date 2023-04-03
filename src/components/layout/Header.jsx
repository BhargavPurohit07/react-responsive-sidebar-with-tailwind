import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";

const Header = ({ show, setShow, isWidth }) => {
  return (
    <div className="flex">
      {isWidth ? (
        <div
          className={`my-auto mr-6 cursor-pointer md:hidden ${
            show && "hidden"
          }`}
          onClick={setShow}
        >
          <MenuIcon />
        </div>
      ) : null}
      <div className="text-3xl font-medium my-auto">Models</div>
      <div className="ml-auto mr-0">
        <button className="bg-darkPrimary p-4 rounded">+ Add Model</button>
      </div>
    </div>
  );
};

export default Header;
