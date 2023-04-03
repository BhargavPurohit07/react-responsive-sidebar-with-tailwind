import NavBarItems from "./NavBarItems";
import img from "../../assets/Icon.png";
import img2 from "../../assets/sidebar-footer.png";
const NavBar = ({ open, setOpen, isImgHide }) => {
  return (
    <aside
      className={` ${
        open ? "w-full md:w-60 lg:w-60 xl:w-[256px] " : "w-30 "
      }bg-[#0C0D0F] md:sticky top-0 h-screen min-h-screen p-5 pt-2 pr-0 pl-0 transition duration-700 ease-in-out xs:relative md:translate-x-0 ${
        !open && "max-[767px]:hidden"
      }`}
    >
      <div className="flex h-[-webkit-fill-available] flex-col">
        <div className={`flex ${open ? "p-5" : "p-3"} gap-2 justify-between`}>
          {open ? (
            <div className="text-xl font-medium">
              My<span className="text-[#0096C7]">Logo</span>
            </div>
          ) : (
            <div className="text-xl font-medium">
              P<span className="text-[#0096C7]">s</span>
            </div>
          )}
          <img
            src={img}
            className={`cursor-pointer relative top-[1px] 
           ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            alt="menu 1"
          />
        </div>
        <NavBarItems open={open} setOpen={setOpen} />
        <img
          src={img2}
          className={`mt-auto mb-0 ${(!open || isImgHide) && "hidden"}`}
          alt="img 2"
        />
      </div>
    </aside>
  );
};

export default NavBar;
