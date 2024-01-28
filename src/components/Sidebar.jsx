import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItems flex text-[13px] text-[gray] cursor-pointer font-bold mb-1 p-1 hover:bg-[whitesmoke]">
        <span className="sidebar__hash mr-[10px] ml-[5px]">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar top-[80px] sticky flex-[0.2] rounded-[10px] text-center h-fit">
      <div className="sidebar__top flex flex-col items-center border-b-0 border-[1px] border-[lightgray] bg-white rounded-tr-[10px] rounded-tl-[10px] pb-[10px]">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="-mb-5 w-full h-[60px] rounded-tr-[10px] rounded-tl-[10px] object-cover"
        />
        <Avatar className="sidebar__avatar mb-2" src={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2 className="text-[18px] font-bold">{user.displayName}</h2>
        <h4 className="text-[12px] font-semi bold text-[gray]">{user.email}</h4>
      </div>
      <div className="sidebar__stats p-[10px] mb-[10px] rounded-br-[10px] rounded-bl-[10px] bg-white border-[lightgray] border-[1px]">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,243</p>
        </div>
      </div>
      <div className="sidebar__bottom text-left p-[10px] bg-white border-[lightgray] border-[1px] rounded-[10px] mt-[10px]">
        <p className="text-[13px] pb-[10px]">Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("mernstack")}
        {recentItems("software")}
        {recentItems("design")}
      </div>
    </div>
  );
}

export default Sidebar;
