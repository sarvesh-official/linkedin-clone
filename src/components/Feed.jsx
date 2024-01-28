import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import { db } from "./Firebase";
import { serverTimestamp } from "firebase/firestore";

import FlipMove from "react-flip-move";

import { getDocs, collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../userSlice";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const postRef = collection(db, "posts");

  const getPost = async () => {
    try {
      const data = await getDocs(postRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPosts(
        filteredData.sort((a, b) => b.data.timestamp - a.data.timestamp)
      );
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getPost();
  });

  const sendPost = async (e) => {
    e.preventDefault();
    //* adding posts
    addDoc(postRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="feed flex-[0.6] my-0 mx-[20px]">
      <div className="feed__inputContainer p-[10px] pb-[20px] rounded-[10px] mb-[10px] bg-white">
        <div className="feed__input border-[1px] border-[lightgray] rounded-[30px] flex p-[10px] text-[gray] pl-[15px]">
          <CreateIcon />
          <form className="flex w-full">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="ml-[10px] font-[600] w-[100%] outline-none"
            />
            <button type="submit" className="hidden" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions flex justify-evenly">
          <InputOptions Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
          <InputOptions
            Icon={SubscriptionsIcon}
            title={"Video"}
            color={"#E7A33E"}
          />
          <InputOptions
            Icon={EventNoteIcon}
            title={"Event"}
            color={"#C0CBCD"}
          />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title={"Write article"}
            color={"#7FC15E"}
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Posts
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
