import { useState } from "react";
import { useWindowDimensions } from "../../hooks/useWindowsDimentions";
import NavBar from "./NavBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const width = useWindowDimensions();

  const [open, setOpen] = useState(width >= 768);

  return (
    <div className="flex font-Poppins bg-black text-white">
      <NavBar open={open} setOpen={setOpen} isImgHide={width <= 768} />

      <div
        className={`flex flex-1 flex-col overflow-x-auto h-[100vh]`}
        onClick={() => {
          if (width <= 768 && open) {
            setOpen(() => false);
          }
        }}
      >
        <main className={`flex-1 ${open && "max-[767px]:hidden"}`}>
          <div className={"xs:px-6 xs:pt-6 sm:pt-6 sm:px-6 md:px-12 md:pt-12"}>
            <Header
              isWidth={width <= 768}
              setShow={() => setOpen(true)}
              show={open}
            />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
