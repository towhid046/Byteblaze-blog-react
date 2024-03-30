import { Helmet } from "react-helmet";
const googleLogo = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png`;
const gitHubLogo = `https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png`;

import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "./../../components/MainContext/MainContext";
import { auth, githubProviter, googleProvider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { user, setUser, handelSingOut } = useContext(UserContext);
  const nevigate = useNavigate();

  const handelSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result);
        nevigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handelSignInWithGitHub = () => {
    signInWithPopup(auth, githubProviter)
      .then((result) => {
        console.log(result.user);
        setUser(result);
        nevigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container px-4 mx-auto ">
      <Helmet>
        <title>Byteblaze | Sing Up</title>
      </Helmet>
      <div className="h-[90vh] flex justify-center items-center">
        <form className="space-y-2 text-center pt-10 px-10 pb-6 bg-white border rounded-lg">
          <input
            type="email"
            name="email"
            // onChange={(e) => setEmail(e.target.value)}
            className=" input input-bordered w-full max-w-xs  rounded-lg outline-none"
            placeholder="Email address"
          />{" "}
          <br />
          <input
            name="password"
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input input-bordered w-full max-w-xs  rounded-lg outline-none"
            placeholder="Password"
          />{" "}
          <br />
          <input
            type="submit"
            onClick={handelSingOut}
            value={`${user ? "Sign Out" : "Sign in"}`}
            className="btn  bg-black text-white input-md hover:bg-gray-900"
          />{" "}
          <br />
          <p className="text-2xl font-semibold">Or</p>
          <p className="border-b-2 pb-2">Sign up with</p>
          <figure className="flex gap-8 pt-2 justify-center text-center">
            <img
              onClick={handelSignInWithGoogle}
              className="w-8 cursor-pointer rounded-full"
              src={googleLogo}
              alt=""
            />
            <img
              onClick={handelSignInWithGitHub}
              className="w-8 cursor-pointer rounded-full"
              src={gitHubLogo}
              alt=""
            />
          </figure>{" "}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
