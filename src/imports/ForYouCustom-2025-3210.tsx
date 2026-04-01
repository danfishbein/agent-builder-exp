import imgImage685 from "figma:asset/16500cfa3be970c70a57416816f4afe3cd395907.png";

function Frame() {
  return (
    <div className="bg-[#b584ff] h-[102.857px] overflow-clip relative rounded-[12px] shrink-0 w-[72px]">
      <div className="absolute h-[156.302px] left-[-31.48px] top-[7.45px] w-[117.988px]" data-name="image 685">
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

function Frame1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="content-stretch flex flex-col items-start justify-between py-[8px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

export default function ForYouCustom() {
  return (
    <div className="relative rounded-[20px] size-full" data-name="for you custom">
      <div className="content-stretch flex gap-[16px] items-center min-w-[inherit] overflow-clip pl-[8px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <div className="absolute inset-[0_0_-0.14px_0] rounded-[6px]" data-name="Hover element (new)" />
        <Frame />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(18,18,18,0.12)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}