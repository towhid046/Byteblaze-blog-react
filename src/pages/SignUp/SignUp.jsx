const googleLogo = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png`;
const gitHubLogo = `https://cdn.icon-icons.com/icons2/2428/PNG/512/github_black_logo_icon_147128.png`;

const SignUp = () => {
  return (
    <div className="container px-4 mx-auto ">
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
            // onClick={isSignIn ? logOut : logIn}
            // value={`${isSignIn ? "Log Out" : "Log in"}`}
            className="btn  bg-black text-white input-md hover:bg-gray-900"
          />{" "}
          <br />
          <p className="text-2xl font-semibold">Or</p>
          <p className="border-b-2 pb-2">Sign up with</p>
          <figure className="flex gap-8 pt-2 justify-center text-center">
            <img
            //   onClick={signInWithGoogle}
              className="w-8 cursor-pointer rounded-full"
              src={googleLogo}
              alt=""
            />
            <img
            //   onClick={signInWithGoogle}
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
