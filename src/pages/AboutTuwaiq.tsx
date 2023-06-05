import NavBar from "../component/NavBar";
import MainFooter from "../component/MainFooter";
import Partners from "../component/Partners";
import eLearn from "/eLearn.svg";
import competitions from "/competitions.svg";
import meetings from "/meetings.svg";
import train from "/train.svg";
import bootcamps from "/bootcamps.svg";
import ecommunity from "/ecommunity.svg";
const AboutTuwaiq = () => {
  return (
    <>
      <NavBar />
      <section className="bg-custom">
        <h1>اكاديمية طويق</h1>
      </section>
      <section className=" bg-slate-100 flex justify-center px-3 lg:justify-center pb-14 sm:px-1">
        <div className=" rounded-2xl w-[70rem] h-72  p-8 text-right">
          <h1 className="text-3xl font-bold sm:text-7xl text-primary-500">
            من نحن؟
          </h1>
          <div className="py-3 mt-10 text-xl leading-6 text-black sm:text-3xl">
            تُعد أكاديمية طويق الأولى في البرامج التعليمية لمجالات التقنيات
            المتقدمة بالمملكة العربية السعودية، حيث تقدم عدد من البرامج المتنوعة
            في مختلف المسارات التقنية ولمختلف الفئات العمرية؛ وتم الإعـــلان عن
            تأسيس الأكاديمية في أغسطس من عام 2019م.
          </div>
        </div>
      </section>
      <section className="w-screen mx-auto py-14">
        <h1 className="text-2xl font-bold text-center text-primary-500 pb-14">
          ماذا نقدم؟
        </h1>
        <div className="grid items-center justify-center max-w-6xl grid-cols-2 gap-4 mx-auto lg:grid-cols-3 justify-items-center md:gap-24">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-slate-50">
              <img className="w-16 h-16" src={eLearn} alt="" />
            </div>
            <div className="pt-3 font-medium text-dark-gray">
              التعليم الإلكتروني
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-slate-50">
              <img className="w-16 h-16" src={competitions} alt="" />
            </div>
            <div className="pt-3 font-medium text-dark-gray">
              المنافسات العالمية
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-slate-50">
              <img className="w-16 h-16" src={meetings} alt="" />
            </div>
            <div className="pt-3 font-medium text-dark-gray">
              اللقاءات المعرفية
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-slate-50">
              <img className="w-16 h-16" src={ecommunity} alt="" />
            </div>
            <div className="pt-3 font-medium text-dark-gray">
              المجتمعات الرقمية
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-slate-50">
              <img className="w-16 h-16" src={bootcamps} alt="" />
            </div>
            <div className="pt-3 font-medium text-dark-gray">المعسكرات</div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-slate-50">
              <img className="w-16 h-16" src={train} alt="" />
            </div>
            <div className="pt-3 font-medium text-dark-gray">
              البرامج التدريبية
            </div>
          </div>
        </div>
      </section>
      <Partners />
      <MainFooter />
    </>
  );
};

export default AboutTuwaiq;
