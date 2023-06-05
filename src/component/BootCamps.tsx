interface BootCampsProps {
  type: string;
  name: string;
  startAt: string;
  period: string;
  city: string;
}
const BootCamps = (props: BootCampsProps) => {
  return (
    <>
      <div className="bg-white p-6 text-right rounded-2xl border-r-[15px] shadow-shadow space-y-4 h-full flex flex-col border-[#91D8DB]">
        <div className="flex-col flex-1">
          <div className="relative flex justify-between -ml-7">
            <p className="w-full text-lg text-[#91D8DB]">{props.type}</p>
          </div>
          <h2
            className="text-lg text-[#4D4D4D] mt-2 h-24 font-medium flex-1"
            x-text="course?.titleCorrected?.substring(0,250)"
          >
            {props.name}
          </h2>
          <div className="flex items-center justify-start gap-x-4">
            <span className="flex items-center justify-center text-xs">
              <span x-text="course?.city" x-show="course?.type!=='REMORE'">
                {props.city}
              </span>
              <span
                x-text="course?.typeLocalized"
                x-show="course?.type==='REMORE'"
              ></span>
            </span>
            <span
              className="flex items-center justify-center text-xs"
              x-show="course.weeks"
            >
              <span x-text="course.weeks == 1 ? 'أسبوع ' : course.weeks == 2 ? ' أسبوعان ' : course.weeks + ' أسابيع '">
                {" "}
                {props.period}{" "}
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pb-4">
          <span className="flex items-center justify-center text-xs">
            <span>{props.startAt}</span>
          </span>
          <a className="w-24 text-center transition-colors duration-300 border rounded-full h-7 hover:text-white text-[#91D8DB] border-[#91D8DB] hover:bg-[#91D8DB]">
            التفاصيل
          </a>
        </div>
      </div>
    </>
  );
};

export default BootCamps;
