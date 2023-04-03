import { ReactComponent as EndIcon } from "../../assets/search-normal.svg";
const textStyle =
  "w-full rounded-md leading-8 border border-[#16191F] p-1 pl-3 placeholder-[#6C757D] text-sm text-white focus:border-primary focus:ring-primary focus:outline-primary bg-[#08090A]";
const selectStyle =
  "w-full rounded-md leading-8 border border-[#16191F] p-1 px-3 text-[#6C757D] text-sm focus:border-primary focus:ring-primary focus:outline-primary bg-[#08090A]";
const SearchCard = () => {
  return (
    <div className="flex gap-3 xs:flex-col sm:flex-row">
      <div className="sm:w-[82%] xs:w-full">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <EndIcon />
          </span>
          <input
            className={`${textStyle} pr-10`}
            placeholder={"Search by name or ID..."}
          />
        </div>
      </div>
      <div className="sm:w-[18%] xs:w-full select-wrapper">
        <select className={`${selectStyle}`} value={0}>
          <option selected>Filter by...</option>
        </select>
      </div>
    </div>
  );
};

export default SearchCard;
