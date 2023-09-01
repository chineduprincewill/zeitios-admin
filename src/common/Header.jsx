import { useContext } from "react";
import Logo from "../assets/logo/Logo.png";
import { AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { userid, shownav, updateShownav, logout } = useContext(AuthContext);

  //   console.log(userid);
  //const [userinfo, setUserinfo] = useState(null);

  const handleLogout = () => {
    logout();
    location.reload();
  };

  return (
    <div className="fixed top-0 z-30 w-full flex justify-between items-center m-0 px-4 py-4 bg-[#0259dc]">
      <div>
        <img src={Logo} alt="logo" className="md:hidden" />
      </div>
      <div className="md:flex hidden">
        <div className="bg-gray-200 rounded-l-xl px-2 py-2">
          <CiSearch size={20} className="cursor-pointer" />
        </div>
        <input
          type="text"
          className="w-[300px] bg-gray-200 rounded-r-xl p-1"
          placeholder="Search"
        />
      </div>
      <div className="flex space-x-4 items-center">
        <span className="text-white">{userid}</span>
        <HiOutlineMail size={20} className="text-gray-300 cursor-pointer" />

        <AiOutlineLogout
          size={20}
          className="text-red-500 cursor-pointer"
          onClick={() => handleLogout()}
        />

        <div className="md:hidden z-50">
          {shownav ? (
            <AiOutlineClose
              size={20}
              className="text-gray-300 cursor-pointer"
              onClick={() => updateShownav()}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              className="text-gray-300 cursor-pointer"
              onClick={() => updateShownav()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
