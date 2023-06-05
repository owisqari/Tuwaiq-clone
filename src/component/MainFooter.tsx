import TuwaiqLogo from "/tuwaiqFooter.svg";
import fedFooter from "/fedFooter.svg";
const MainFooter = () => {
  return (
    <>
      <footer className="w-screen h-full text-white min-h-96">
        <div className="bg-[#4E3797] bg-bottom bg-cover w-full h-full px-5 sm:px-1 z-[9999]">
          <div className="w-full px-10 py-8 pt-20 mx-auto max-w-7xl">
            <div className="w-full grid justify-center grid-cols-2 text-center lg:grid-cols-6 xl:text-right gap-y-4 sm:gap-y-10">
              <div className="flex items-center justify-center col-span-2 px-5 lg:col-span-1 md:col-span-2">
                <img alt="" src={TuwaiqLogo} />
              </div>
              <div className="flex flex-col items-center justify-center px-2">
                <a href="#" target="_blank">
                  شارك كمدرب
                </a>
                <a href="/about">حول الأكاديمية</a>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <a href="">الشروط والأحكام</a>
                <a href="">سياسة الخصوصية</a>
              </div>
              <div className="flex items-center justify-center col-span-2">
                <img className="w-full" src={fedFooter} alt="Logo" />
              </div>
            </div>
          </div>

          <div className="pb-4 mt-4 text-center pt-14">
            <p>جميع الحقوق محفوظة 2023</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default MainFooter;
