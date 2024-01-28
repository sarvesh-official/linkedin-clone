import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../userSlice";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth"; // Adjust import path if needed
import { selectUser } from "../userSlice";

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logoutOfApp = async () => {
    try {
      const auth = getAuth(); // Fetch the auth instance if needed
      dispatch(logout());
      await signOut(auth); // Pass auth instance if using v8 or earlier
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div className="header flex justify-evenly border-b-[0.1px] border-[lightgray] pt-2 w-full sticky top-0 z-[999] bg-white">
      <div className="header__left flex mr-3 ">
        <img
          src="https://cdn-icons-png.flaticon.com/256/174/174857.png"
          alt=""
          className="object-contain h-8 mt-2"
        />

        <div className="header__search p-4 m-2 flex items-center rounded h-[22px] text-gray-400 bg-[#eef3f8]">
          <SearchIcon />
          <input
            placeholder="Search"
            type="text"
            className="outline-none border-none bg-transparent"
          />
        </div>
      </div>
      <div className="header__right flex">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Message" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <HeaderOptions avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
