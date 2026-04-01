import svgPaths from "./svg-d3byv47pwg";
import imgImage685 from "figma:asset/87d8479472e80436ded8aa7fd1ef991ffa65b1b7.png";

function Frame1() {
  return (
    <div className="bg-[#f689cd] h-[174.622px] overflow-clip relative rounded-[11.384px] shrink-0 w-[129px]">
      <div className="-translate-x-1/2 absolute h-[169.116px] left-1/2 top-[5.51px] w-[129px]" data-name="image 685">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[345.91%] left-[-72.86%] max-w-none top-[-31.71%] w-[248.68%]" src={imgImage685} />
        </div>
      </div>
      <div className="absolute bg-[rgba(18,18,18,0.12)] h-[175px] left-0 opacity-0 top-0 w-[129px]" />
      <button className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[8px] items-center justify-center left-[calc(50%+0.5px)] opacity-0 px-[8px] py-[6px] rounded-[4px] size-[32px] top-[calc(50%-0.31px)]" data-name="IconButton">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / Edit">
          <div className="absolute inset-[10%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p19a04340} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start leading-[0] not-italic relative shrink-0 text-ellipsis w-full">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] h-[25px] justify-end overflow-hidden relative shrink-0 text-[#1c1c1c] text-[16px] w-[206px] whitespace-nowrap">
        <p className="leading-[1.55] overflow-hidden" dir="auto">
          Hi I’m Elena
        </p>
      </div>
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-end min-w-full overflow-hidden relative shrink-0 text-[#676879] text-[14px] w-[min-content]">
        <p className="leading-[1.55]" dir="auto">
          Feedback Intelligence Agent
        </p>
      </div>
    </div>
  );
}

function Bullet() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Bullet">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Bullet">
          <path d={svgPaths.p30a9e100} fill="var(--fill-0, #00C875)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p7fcde80} fill="var(--fill-0, #00C875)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[32px] mix-blend-multiply relative rounded-[62.5px] shrink-0">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip pr-[5px] py-[12.5px] relative rounded-[inherit]">
        <div className="content-stretch flex gap-[4px] items-center mix-blend-multiply pl-[6px] pr-[10px] py-[6px] relative rounded-[50px] shrink-0" data-name="Vibe status">
          <Bullet />
          <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00c875] text-[14px] whitespace-nowrap">
            <p className="leading-none">Active</p>
          </div>
          <div className="absolute content-stretch flex flex-col inset-0 items-start" data-name=".Tooltip - published">
            <div className="absolute inset-0 rounded-[6px]" data-name="Hover element (new)" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[62.5px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="content-stretch flex flex-col items-start justify-between py-[18px] relative size-full">
        <Frame3 />
        <Frame />
      </div>
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-[#fafafc] content-stretch flex gap-[24px] items-start pl-[16px] pr-[24px] py-[16px] relative rounded-[24px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Frame1 />
      <Frame2 />
      <button className="absolute content-stretch cursor-pointer flex gap-[8px] items-center justify-center left-[365px] rounded-[4px] size-[32px] top-[16px]" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Platform / Board">
          <div className="absolute inset-[15%_10%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
              <path clipRule="evenodd" d={svgPaths.p23226200} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}