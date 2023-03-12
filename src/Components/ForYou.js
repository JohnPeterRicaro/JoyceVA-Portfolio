import Breeze1 from "./Assets/Breeze/Breeze 1.svg";
import Breeze2 from "./Assets/Breeze/Breeze 2.svg";
import Blink from "./Assets/Blinks/BLINK-GIF.gif";

const ForYou = () => {
  return (
    <section className="mt-40">
      <div className="flex gap-14 justify-center items-center flex-col">
        <div className=" relative flex justify-center items-center">
          <div className="absolute translate-x-[-440px]">
            <img className="w-[273px]" src={Breeze1} alt="" />
          </div>
          <div className="absolute translate-x-[-264px] translate-y-[8px]">
            <img className="w-[42px]" src={Blink} alt="" />
          </div>
          <h1 id="__ForYou" className="text-[32px] md:text-[51.3px] text-[#046A9B] font-bold dropShadow">
            What's in it for you?
          </h1>
        </div>
        <div className="flex space-y-4 md:space-y-20 justify-center items-center flex-col">
          <div className="boxShadow w-[350px] md:w-[700px] h-auto p-8 text-[#046A9B] flex justify-center items-center flex-col text-center rounded-3xl bg-[#e8ebf3] shadow-lg">
            <h1 className=" font-Cookie text-[27.8px]">
              The job/tasks can be done without breaking your bank!
            </h1>
            <p className=" font-OpenSans w-[auto] md:w-[524px] font-light text-[14.8px]">
              I want to make sure that the services I offer are worth every
              penny. By hiring an independent contractor, you don't need to
              worry about 401K, payroll, workers comp, taxes, and health
              insurance.
              <br />
              <br />
              When I say that I want you to save more money, giving bonuses is
              not required as well... nor even a salary increase! No need to
              think about any other fees, just the per-hour rate!
            </p>
          </div>
          <div className="boxShadow w-[350px] md:w-[700px] h-auto p-8 text-[#046A9B] flex justify-center items-center flex-col text-center rounded-3xl bg-[#e8ebf3] shadow-lg">
            <h1 className=" font-Cookie text-[27.8px]">
              All your files are secured!
            </h1>
            <p className=" font-OpenSans w-auto md:w-[524px] font-light text-[14.8px]">
              You don't have to worry about the security of your files and
              documents because here's what I can assure you:
              <br />
              <br />I will provide equipment or computer that I will use solely
              for this job only. I will also provide an NBI clearance, an
              official document issued by the Philippines' National Bureau of
              Investigation which will certify that I don't have any criminal
              records.
            </p>
          </div>
          <div className="boxShadow w-[350px] md:w-[700px] h-auto p-8 text-[#046A9B] flex justify-center items-center flex-col text-center rounded-3xl bg-[#e8ebf3] shadow-lg">
            <h1 className=" font-Cookie text-[27.8px]">
              Gain peace of mind and clarity
            </h1>
            <p className="relative font-OpenSans w-auto md:w-[524px] font-light text-[14.8px]">
              Let me take care of the back-office tasks, answer email/website
              inquiries, set and manage appointments, and organize data
              efficiently with the utmost confidentiality. Being a business
              owner doesn't mean that you must spend all your time on your
              business. By hiring a virtual assistant, you can concentrate on
              much more important tasks to grow your business, focus on your
              clients, or just simply have time for yourself.
              <br />
              <br />
              Take it back, you deserve your time.
            </p>
            <div className="absolute translate-x-[190px] translate-y-[190px] md:translate-x-[380px] md:translate-y-[180px] rotate-[-15deg]">
              <img className="w-[111px] md:w-[223px]" src={Breeze2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ForYou;
