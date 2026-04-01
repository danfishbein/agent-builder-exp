import svgPaths from "./svg-5n4rk2sbhc";
import imgImage685 from "figma:asset/16500cfa3be970c70a57416816f4afe3cd395907.png";
import imgImage1 from "figma:asset/84aaf6016f7d9e34c363ef6e80c140c0b217d894.png";

function Frame() {
  return (
    <div className="bg-[#d6e2f6] h-[148.571px] overflow-clip relative rounded-[14px] shrink-0 w-[104px]">
      <div className="absolute h-[225.769px] left-[-45.47px] top-[10.77px] w-[170.427px]" data-name="image 685">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[137.18%] left-[-14.28%] max-w-none top-[-16.25%] w-[137.56%]" src={imgImage685} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] justify-end relative shrink-0 text-[#1c1c1c] text-[16px] w-full">
        <p className="leading-[1.55]" dir="auto">
          Emma
        </p>
      </div>
      <div className="flex flex-col font-['Figtree:Medium',sans-serif] justify-end overflow-hidden relative shrink-0 text-[#676879] text-[14px] text-ellipsis w-full">
        <p className="leading-[1.55]" dir="auto">
          I turn information and trends into clear insights so the team can make smarter decisions.
        </p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-white mr-[-7.2px] relative rounded-[24px] shrink-0 size-[28.8px]" data-name="Skills">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.18px)] size-[19.44px] top-[calc(50%-0.02px)]" data-name="Logos">
          <div className="absolute inset-[8.33%]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e9ef] border-[1.152px] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function MondayLogowednesy01Copy() {
  return (
    <div className="absolute inset-[22.75%_4.17%_22.76%_4.17%]" data-name="monday logowednesy-01 copy 15">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8202 10.5936">
        <g id="monday logowednesy-01 copy 15">
          <path clipRule="evenodd" d={svgPaths.p21f1b4a0} fill="var(--fill-0, #FB275D)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p3b21e200} fill="var(--fill-0, #FFCB00)" fillRule="evenodd" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p3daa92d0} fill="var(--fill-0, #00C875)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function Skills1() {
  return (
    <div className="bg-white mr-[-7.2px] relative rounded-[24px] shrink-0 size-[28.8px]" data-name="Skills">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.4px)] overflow-clip rounded-[11.25px] size-[19.44px] top-[calc(50%-0.4px)]" data-name="Logos">
          <MondayLogowednesy01Copy />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e7e9ef] border-[1.152px] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Apps() {
  return (
    <div className="content-stretch flex items-center pr-[7.2px] relative shrink-0" data-name="Apps">
      <Skills />
      <Skills1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative size-full">
        <Frame2 />
        <Apps />
        <div className="absolute bottom-[6.57px] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] right-[-17.5px] rounded-[6px]" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Start onboarding</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ForYouCustom() {
  return (
    <div className="relative rounded-[20px] size-full" data-name="for you custom">
      <div className="content-stretch flex gap-[20px] items-start min-w-[inherit] overflow-clip pl-[8px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <div className="absolute inset-[0_-0.5px_-0.43px_0] rounded-[6px]" data-name="Hover element (new)" />
        <Frame />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(18,18,18,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}