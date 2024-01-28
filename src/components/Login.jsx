import { useState } from "react";
import { auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleRegister = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!name) {
        setError("Please enter a full name!");
        setIsLoading(false);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: profilePic,
      });

      const user = auth.currentUser;
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: profilePic,
        })
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = await auth.currentUser;
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login grid place-items-center ml-auto mr-auto pt-[100px] pb-[100px]">
      {/* ... your JSX code ... */}
      <img
        className="object-contain h-[70px] mt-[20px] mb-[20px]"
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />

      <form className="flex flex-col gap-5">
        <input
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] rounded-[5px]"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)  "
        />
        <input
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] rounded-[5px]"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
        />
        <input
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] rounded-[5px]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          className="w-[350px] h-[50px] text-[20px] pl-[10px] mb-[10px] rounded-[5px]"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="w-[350px] h-[50px] text-[large] bg-[#0074b1] text-white rounded-[5px]"
        >
          Sign In
        </button>
      </form>

      <p className="mt-[20px]">
        Not a member?{" "}
        <span
          className="login_register text-[#0177b7] cursor-pointer"
          onClick={handleRegister}
        >
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
