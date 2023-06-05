const GetStartedSec = () => {
  return (
    <>
      <section id="intro" className="w-screen">
        <div className="flex items-center justify-center h-full border-b-0 border-b-solid border-b-transparent bg-opacity-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
          <div className="flex flex-col justify-center h-screen item-center gap-y-2 sm:gap-y-4">
            <div className="flex items-center justify-center text-6xl font-bold leading-normal text-white sm:text-8xl">
              تعلم تقنيات
            </div>
            <div className="flex items-center justify-center text-6xl font-bold leading-normal text-white sm:text-8xl">
              المستقبــــــل
            </div>
            <div className="flex justify-center py-3 text-lg text-white item-center">
              <a
                className="rounded-full drop-shadow bg-[#54BBBD] hover:bg-[#54BBBD]/80 flex items-center justify-center px-24 py-4 
                            w-full sm:max-w-lg mt-8 sm:mx-20 md:text-5xl  text-2xl text-white font-bold"
                href="#"
              >
                ابـــــــــدأ الآن
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStartedSec;
