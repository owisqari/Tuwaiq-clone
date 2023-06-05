import NavBar from "../component/NavBar";
import GetStarted from "../component/GetStartedSec";
import BootCamps from "../component/BootCamps";
import Partners from "../component/Partners";
import ContactUs from "../component/ContactUsSec";
import MainFooter from "../component/MainFooter";
const Home = () => {
  return (
    <>
      <NavBar />
      <GetStarted />
      <div className="bootcamp-container">
        <div>
          <h1
            className="w-full text-3xl font-bold text-center py-14"
            style={{ color: "#4F3897" }}
          >
            أحدث المعسكرات والبرامج
          </h1>
        </div>
        <div className="bootcamp-container-body">
          <BootCamps
            name="البنية المؤسسية بمنهجية وإطار TOGAF"
            type="معسكر"
            startAt="يبدأ في 11-06-2023"
            city="الرياض"
            period="أسبوعان"
          />
          <BootCamps
            name="البنية المؤسسية بمنهجية وإطار TOGAF"
            type="معسكر"
            startAt="يبدأ في 11-06-2023"
            city="الرياض"
            period="أسبوعان"
          />
          <BootCamps
            name="تصميم الألعاب بـاستخدام Unity"
            type="معسكر"
            startAt="يبدأ في 09-07-2023"
            city="الرياض"
            period="٤ اسابيع"
          />
        </div>
        <button
          className="w-64 mt-32 text-center transition-colors duration-300 border rounded-full h-10"
          style={{ color: "#4F3897", borderColor: "#4F3897" }}
        >
          المزيد من المعسكرات والبرامج
        </button>
      </div>
      <Partners />
      <ContactUs />
      <MainFooter />
    </>
  );
};

export default Home;
