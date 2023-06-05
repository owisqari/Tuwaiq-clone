import Apple from "/Apple.png";
import CompTIA from "/CompTIA.png";
import IBM from "/IBM.png";
import Meta from "/Meta.png";
import PeopleCert from "/PeopleCert.png";
import CertNexus from "/CertNexus.png";
const Partners = () => {
  return (
    <>
      <div className="w-screen h-96 flex flex-col justify-center items-center bg-slate-100">
        <h1
          className="w-full text-3xl font-bold text-center py-14"
          style={{ color: "#4F3897" }}
        >
          شركاء التميز
        </h1>
        <div className="w-full">
          <div className="flex flex-row justify-center items-start ">
            <div className="flex flex-col justify-center mx-8 items-center">
              <img src={Apple} alt="Partners" className="w-40 h-40" />
            </div>
            <div className="flex flex-col justify-center mx-8 items-center">
              <img src={Meta} alt="Partners" className="w-40 h-40" />
            </div>
            <div className="flex flex-col justify-center mx-8 items-center">
              <img src={CompTIA} alt="Partners" className="w-40 h-40" />
            </div>
            <div className="flex flex-col justify-center mx-8 items-center">
              <img src={IBM} alt="Partners" className="w-40 h-40" />
            </div>
            <div className="flex flex-col justify-center mx-8 items-center">
              <img src={PeopleCert} alt="Partners" className="w-40 h-40" />
            </div>
            <div className="flex flex-col justify-center mx-8 items-center">
              <img src={CertNexus} alt="Partners" className="w-40 h-40" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
