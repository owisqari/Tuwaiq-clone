const ContactUsSec = () => {
  return (
    <>
      <section
        id="mail"
        className="flex items-center justify-center w-screen py-8 pb-14"
        style={{ backgroundColor: "#5BBFC3" }}
      >
        <div className="container mx-auto w-screen">
          <h1 className="mb-16 text-3xl font-bold text-center text-white px-14">
            اشترك في النشرة البريدية
          </h1>
          <div className="flex flex-wrap items-center justify-center">
            <div className="flex flex-wrap flex-row-reverse gap-4 px-8 sm:grid sm:grid-cols-4 justify-items-center">
              <button
                type="submit"
                className="h-12 rounded-2xl bg-[#4E3797] hover:bg-purple-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full md:w-44"
              >
                إشـــتـــــراك
              </button>
              <input
                type="text"
                className="bg-white border border-[#F9FAFB] rounded-lg py-2 px-4 lg:w-96"
                placeholder="ادخل بريدك الإلكتروني"
              />
              <input
                type="text"
                className="bg-white border border-[#F9FAFB] rounded-lg py-2 px-4 lg:w-48"
                placeholder="الاسم الأخير"
              />
              <input
                type="text"
                className="bg-white border border-[#F9FAFB] rounded-lg py-2 px-4 lg:w-48"
                placeholder="الاسم الأول"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSec;
