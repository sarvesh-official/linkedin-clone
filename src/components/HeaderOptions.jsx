import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";

function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div
      onClick={onClick}
      className="headerOptions flex flex-col items-center mr-5 text-[gray] cursor-pointer hover:text-black"
    >
      {Icon && <Icon className="" />}
      {avatar && (
        <Avatar
          className="object-contain !w-[25px] !h-[25px]"
          src={user?.photoURL}
        >
          {user?.email[0]}
        </Avatar>
      )}

      <h3 className="font-[400] text-[12px]">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
