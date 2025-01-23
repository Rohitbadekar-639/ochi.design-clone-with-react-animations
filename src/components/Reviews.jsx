function Reviews() {
  return (
    <>
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10"></div>
      <h1 className="text-[4vw] tracking-tight px-20 pt-20">Client Reviews</h1>
      {/* <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10"></div> */}
      <div className="main w-full h-screen bg-zinc-900 flex items-center gap-5 px-20 pb-60">
        <div className="cardcontainer w-1/2 h-[50vh]">
          <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
              &copy;2024-2025
            </button>
          </div>
        </div>
        <div className="cardcontainer w-1/2 flex gap-5 h-[50vh]">
          <div className="card flex items-center justify-center relative rounded-xl w-full h-full bg-[#192826]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
              Rating 5.0 On Clutch
            </button>
          </div>
          <div className="card flex items-center justify-center relative rounded-xl w-full h-full bg-[#192826]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">
              Business Bootcamp Alumni
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
