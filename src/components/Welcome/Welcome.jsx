const Welcome = () => {
  return (
    <div className=" text-center h-[82vh] flex flex-col pt-28 pb-5 justify-between">
      <div className="flex items-cnter justify-center">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl font-bold">Welcome to ByteBlaze</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            saepe veritatis numquam voluptas sapiente ducimus vel fuga tempore
          </p>
          <div className="flex justify-center gap-5">
            <button className="btn btn-info">Read Blogs</button>
            <button className="btn btn-info">Bookmarks</button>
          </div>
        </div>
      </div>
      <div className=" ">
        <img 
        className="w-full"
          src="https://byte-blaze.netlify.app/assets/wave-DprG_XZY.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Welcome;
