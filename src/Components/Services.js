import Breeze3 from "./Assets/Breeze/Breeze 2.svg";
import Blink from "./Assets/Blinks/BLINK-GIF.gif";
import DataEntry from "./Assets/Icons/Data Entry.svg";
import CustomerService from "./Assets/Icons/Customer Service.svg";
import AdminTask from "./Assets/Icons/Administrative Task.svg";

const Services = () => {
  return (
    <section className="mx-auto mt-[160px] w-[full] flex">
      <div>
        <div className="realtive flex justify-center items-center">
          <div className="absolute translate-x-[-620px] translate-y-[50px] rotate-[-20deg]">
            <img className="hidden md:block w-[180px]" src={Breeze3} alt="" />
          </div>
          <div className="absolute translate-x-[-220px] translate-y-[8px]">
            <img className="hidden md:block w-[42px]" src={Blink} alt="" />
          </div>
          <h1 id="__Services" className="text-[32px] md:text-[52px] font-bold text-[#046A9B] dropShadow">
            Services I offer
          </h1>
        </div>
        <div className="mt-[40px] md:mt-[80px] space-x-0 space-y-4 md:space-y-0 md:space-x-20 flex justify-center items-center flex-col md:flex-row md:justify-center md:items-start">
          <div className="boxShadow w-[350px] h-[auto] md:w-[22%] md:h-[600px] shadow-xl bg-[#e8ebf3] rounded-xl flex justify-start items-center flex-col">
            <div className="mt-[40px]">
              <img className="w-[83px]" src={DataEntry} alt="" />
            </div>
            <div className="flex justify-center items-center flex-col p-10">
              <h2 className="mb-[10px] text-[#046a9b] font-bold">Data Entry</h2>
              <p className="font-light text-[#296f8d]">
                Insurance agencies rely on carefully organized information,
                whether it's sending the correct declaration page or quoting a
                new business. While the act of data entry is relatively or to
                some extent, simple. It can be monotonous, repetitive, and
                tedious. Your skills are better applied elsewhere that's why
                having a dedicated virtual assistant will free up your schedule
                so you focus on areas that provide real value.
              </p>
            </div>
          </div>
          <div className="boxShadow w-[350px] h-auto md:w-[22%] md:h-[600px] shadow-xl bg-[#e8ebf3] rounded-xl flex justify-start items-center flex-col">
            <div className="mt-[40px]">
              <img className="w-[83px]" src={CustomerService} alt="" />
            </div>
            <div className="flex justify-center items-center flex-col p-10">
              <h2 className="mb-[10px] text-[#046a9b] font-bold">Customer Service</h2>
              <p className="font-light text-[#296f8d]">
                The U.S. Small Business Administration reports that 68% of
                customers leave because they are upset with the treatment they
                have experienced. According to Microsoft, 96% of consumers say
                that customer service is an important factor and aspect of their
                loyalty to a business. These studies just show how important
                customer service is, and that is why having a virtual assistant
                who is experienced and loves what he/she does can have a great
                impact on company's reputation.
              </p>
            </div>
          </div>
          <div className="relative boxShadow w-[350px] h-auto md:w-[22%] md:h-[600px] shadow-xl bg-[#e8ebf3] rounded-xl flex justify-start items-center flex-col">
            <div className="mt-[40px]">
              <img className="w-[83px]" src={AdminTask} alt="" />
            </div>
            <div className="flex justify-center items-center flex-col p-10">
              <h2 className="mb-[10px] text-[#046a9b] font-bold">Administrative Tasks</h2>
              <p className="font-light text-[#296f8d]">
                Maintaining and updating records, corresponding to email
                inquiries, sending policy documents... These tasks can be done
                by anyone. But to be able to do it seamlessly and accurately,
                it's worth hiring someone who specializes in these tasks. With
                lesser administrative tasks to keep up with, your team can
                increase their level of productivity. Hiring a virtual assistant
                also improves efficiency because you get more work done in less
                time without breaking the bank.
              </p>
            </div>
            <div className="absolute translate-x-[160px] translate-y-[530px] md:translate-x-[220px] md:translate-y-[580px] rotate-[-50deg] scale-x-[-1]">
                <img className="w-[90px] md:w-[180px]" src={Breeze3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
