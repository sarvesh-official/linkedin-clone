import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { forwardRef } from "react";
const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div className="post bg-white p-[15px] mb-[10px] rounded-[10px]">
      <div ref={ref} className="post__header flex mb-[10px]">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info ml-[10px]">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-[12px] text-[gray]">{description}</p>
        </div>
      </div>
      <div className="post__body overflowWrap">
        <p>{message}</p>
      </div>
      <div className="post__buttons flex justify-evenly">
        <InputOptions Icon={ThumbUpOffAltIcon} title={"Like"} />
        <InputOptions Icon={ChatOutlinedIcon} title={"Comment"} />
        <InputOptions Icon={ShareOutlinedIcon} title={"Share"} />
        <InputOptions Icon={SendOutlinedIcon} title={"Send"} />
      </div>
    </div>
  );
});

export default Posts;
