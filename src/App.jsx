import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { login, logout, selectUser } from "./userSlice";
import { useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/Firebase";
import Widgets from "./components/Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const hasCheckedAuthState = useRef(false);
  useEffect(() => {
    const checkAuthState = () => {
      onAuthStateChanged(auth, (userAuth) => {
        if (userAuth) {
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoURL: userAuth.photoURL,
            })
          );
        } else {
          dispatch(logout());
        }
        hasCheckedAuthState.current = true;
      });
    };

    if (!hasCheckedAuthState.current) {
      checkAuthState();
    }

    return () => {};
  });
  return (
    <div className="app bg-[#f3f2ef] flex flex-col">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body flex mt-[35px] max-w-[1200px] ml-[200px] justify-evenly gap-12">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
