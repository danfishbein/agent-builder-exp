import svgPaths from "./svg-89mc1vrgmk";

function Gradient() {
  return (
    <div className="absolute blur-[8px] inset-0 rounded-[16px]" data-name="Gradient">
      <div aria-hidden="true" className="absolute border-7 border-[#04f7fb] border-solid inset-[-3.5px] pointer-events-none rounded-[19.5px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0">
      <div className="h-[20px] relative shrink-0 w-[6px]" data-name="Cursor">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] not-italic text-[#323338] text-[16px] whitespace-nowrap">
          <p className="leading-[19.2px]">|</p>
        </div>
      </div>
      <p className="font-['Figtree:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-[rgba(50,51,56,0.38)] whitespace-nowrap">What do you want agents to handle for you?</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <button className="bg-[#f6f7fb] content-stretch cursor-pointer flex gap-[8px] items-center justify-center max-h-[24px] max-w-[24px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / Basic / Add">
          <div className="absolute inset-[11.25%]" data-name="Union">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4 12.4">
              <path clipRule="evenodd" d={svgPaths.p225c1f00} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function LeftActions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Left actions">
      <Frame />
    </div>
  );
}

function PromptActions() {
  return <div className="flex-[1_0_0] h-[14px] min-h-px min-w-px" data-name="Prompt actions" />;
}

function Footer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Footer">
      <LeftActions />
      <PromptActions />
      <div className="bg-[rgba(50,51,56,0.38)] content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[32px] opacity-50 px-[8px] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ecedf5] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Build agent</p>
        </div>
      </div>
    </div>
  );
}

function PromptBoxField() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-start justify-between p-[16px] rounded-[16px]" data-name="Prompt box field">
      <div aria-hidden="true" className="absolute border border-[#04f7fb] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Frame1 />
      <Footer />
    </div>
  );
}

export default function PromptBox() {
  return (
    <div className="relative size-full" data-name="Prompt box">
      <Gradient />
      <PromptBoxField />
    </div>
  );
}