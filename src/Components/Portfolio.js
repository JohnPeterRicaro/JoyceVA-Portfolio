import Breeze1 from "./Assets/Breeze/Breeze 1.svg";
import Breeze6 from "./Assets/Breeze/Breeze 6.svg";
import Blink from "./Assets/Blinks/BLINK-GIF.gif";

const Porfolio = () => {
  return (
    <section className="w-[80%] mt-[40px] space-y-[20px] md:space-y-[50px] mx-auto flex justify-center items-center flex-col">
      <div className="w-full relative flex justify-start items-start">
        <div className="absolute">
          <img
            className=" hidden md:block md:w-[42px] md:-translate-x-[46px] md:translate-y-[25px]"
            src={Blink}
            alt=""
          />
        </div>
        <h1 id="__Portfolio" className="w-full text-[32px] md:text-[51px] text-[#046a9b] font-bold dropShadow flex justify-center items-center md:justify-start md:items-start">
          Insurance Porfolio
        </h1>
        <div className="absolute hidden md:block md:translate-x-[740px] md:translate-y-[-80px]">
          <img className="w-[273px]" src={Breeze1} alt="" />
        </div>
      </div>
      {/** Tab */}
      <div className="w-full flex justify-start items-start flex-col">
        <div className="w-full flex justify-center items-center md:justify-start md:items-start">
          <div className="boxShadow w-[350px] md:w-[700px] bg-[#e8ebf3] text-[#296f8d] text-[12px] md:text-[18px] flex justify-center items-center flex-col p-16 rounded-3xl space-y-[6px] md:space-y-[10px]">
            <h1 className="text-[16px] text-[#046a9b] md:text-[24px] font-semibold">
              Insurance software I have experience using:
            </h1>
            <div className="">
              <p>EZlynx | AMS360 | Hawksoft | FSC Rater</p>
              <p>Insurance Pro | Applied Epic | Pipedrive</p>
            </div>
            <h1 className="text-[16px] text-[#046a9b] md:text-[24px] font-semibold">
              Insurance carriers I know how to navigate:
            </h1>
            <ul className="list-disc ">
              <li>
                For Personal Lines - Progressive, Travelers, NatGen, Nationwide,
                Safeco, ASI, Kemper, Mercury
              </li>
              <li>
                For Commercial Lines - Great American Insurance, Progressive,
                Berkshire Hathaway, Parkwood, Rocklake, Qualitas, Southwind RRG,
                Accelerant Specialty.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/** Tab */}
      <div className="w-full flex justify-start items-start flex-col">
        <div className="w-full flex justify-center items-center md:justify-end md:items-end">
          <div className="boxShadow w-[350px] md:w-[700px] bg-[#e8ebf3] text-[#296f8d] text-[12px] md:text-[18px] flex justify-center items-center flex-col p-16 rounded-3xl space-y-[6px] md:space-y-[10px]">
            <h1 className="text-[16px] text-[#046a9b] md:text-[24px] font-semibold">
              Forms I know how to fill out:
            </h1>
            <ul className="list-disc">
              <li>Acord 27 - Evidence of Property Insurance</li>
              <li>Acord 23 - Vehicle or equipment certificate of insurance</li>
              <li>Acord 25 - Certificate of liability insurance</li>
              <li>Acord 35 - Cancellation of liability / Policy Release</li>
              <li>EFT or ACH Authorization Forms</li>
              <li>
                Selection/Rejection of Uninsured/Underinsured Motorist Coverage
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/** Tab */}
      <div className="w-full flex justify-start items-start flex-col">
        <div className="w-full flex justify-center items-center md:justify-start md:items-start">
          <div className="boxShadow w-[350px] md:w-[700px] bg-[#e8ebf3] text-[#296f8d] text-[12px] md:text-[18px] flex justify-center items-center flex-col p-16 rounded-3xl space-y-[6px] md:space-y-[10px]">
            <h1 className="text-[16px] text-[#046a9b] md:text-[24px] font-semibold">
              I can help the team with daily tasks such as:
            </h1>
            <ul className="list-disc ">
              <li>Certificate of Insurance Requests</li>
              <li>Additional Insured/Waiver of Subrogation Requests</li>
              <li>Mortgagee requests</li>
              <li>
                Endorsement Requests {"("}Updating Drivers, Vehicles, Address,
                Coverages{")"}
              </li>
              <li>Generating MVR</li>
              <li>Answering inbound calls</li>
              <li>Outbound Calls</li>
              <li>Database information update</li>
              <li>
                Billing - working with finance companies, billing discrepancies,
                sending notices to the insured about their current bill
              </li>
              <li>
                Submitting quote requests for change in coverage or vehicle
                removal/addition
              </li>
              <li>Renewals</li>
            </ul>
          </div>
        </div>
      </div>
      {/** Tab */}
      <div className="relative w-full flex justify-start items-start flex-col">
        <div className="w-full flex justify-center items-center md:justify-end md:items-end">
          <div className="boxShadow w-[350px] md:w-[700px] bg-[#e8ebf3] text-[#296f8d] text-[12px] md:text-[18px] flex justify-center items-center flex-col p-16 rounded-3xl space-y-[6px] md:space-y-[10px]">
            <h1 className="text-[16px] text-[#046a9b] md:text-[24px] font-semibold">
              Forms I know how to fill out:
            </h1>
            <ul className="list-disc ">
              <li>
                Application/Proposal - filling out application forms and
                paperwork. Enter new business account details in the Agency
                Management System
              </li>
              <li>
                Binding - prepared binding documents and accounting forms.
                Sending the proposal via electronic signature website
              </li>
              <li>Issuance of policy - sending policies to the insured</li>
              <li>Renewals - sending renewal notices</li>
              <li>
                Loss Runs - requesting for loss runs for upcoming renewals and
                forwarding to the broker in record
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute translate-y-[450px] translate-x-[-40px] md:translate-x-0 md:translate-y-[220px]">
          <img className="w-[135px] md:w-[273px]" src={Breeze6} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Porfolio;
