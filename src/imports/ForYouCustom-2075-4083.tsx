import svgPaths from "./svg-ep2s6xzylh";
import imgImage685 from "figma:asset/87d8479472e80436ded8aa7fd1ef991ffa65b1b7.png";

function Frame() {
  return (
    <div className="bg-[#f689cd] h-[103px] overflow-clip relative rounded-[8px] shrink-0 w-[76.09px]">
      <div className="-translate-x-1/2 absolute h-[99.752px] left-1/2 top-[3.25px] w-[76.09px]" data-name="image 685">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[345.91%] left-[-72.86%] max-w-none top-[-31.71%] w-[248.68%]" src={imgImage685} />
        </div>
      </div>
      <div className="absolute bg-[rgba(18,18,18,0.12)] h-[103.223px] left-0 opacity-0 top-0 w-[76.09px]" />
      <button className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[4.719px] items-center justify-center left-[calc(50%+0.29px)] opacity-0 px-[4.719px] py-[3.539px] rounded-[4px] size-[18.875px] top-[calc(50%-0.18px)]" data-name="IconButton">
        <div className="overflow-clip relative shrink-0 size-[11.797px]" data-name="Icon / Platform / Edit">
          <div className="absolute inset-[10%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.43753 9.43753">
              <path clipRule="evenodd" d={svgPaths.p3747d580} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-end relative shrink-0 text-[#1c1c1c] text-[18px] w-full">
        <p className="leading-[1.55]" dir="auto">
          Elena
        </p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] justify-end overflow-hidden relative shrink-0 text-[#676879] text-[16px] text-ellipsis w-full">
        <p className="leading-[1.55]" dir="auto">
          Feedback Intelligence Agent
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

export default function ForYouCustom() {
  return (
    <div className="bg-[#fafafc] relative rounded-[24px] size-full" data-name="for you custom">
      <div className="content-stretch flex gap-[24px] items-start overflow-clip pl-[16px] pr-[24px] py-[16px] relative rounded-[inherit] size-full">
        <div className="absolute bottom-0 left-0 rounded-[6px] top-0 w-[310px]" data-name="Hover element (new)" />
        <Frame />
        <Frame1 />
        <button className="absolute content-stretch cursor-pointer flex gap-[8px] items-center justify-center right-[16px] rounded-[4px] size-[32px] top-[16px]" data-name="Icon Button">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / Board">
            <div className="absolute inset-[15%_10%]" data-name="Union">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
                <path clipRule="evenodd" d={svgPaths.p23226200} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
              </svg>
            </div>
          </div>
        </button>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}