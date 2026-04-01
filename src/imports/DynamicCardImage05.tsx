import svgPaths from "./svg-a2sdylng5g";
import imgImage685 from "figma:asset/bd1f9cc399276362a6e658b93b78156c4188adc9.png";

export default function DynamicCardImage() {
  return (
    <div className="relative size-full" data-name="Dynamic card image/05">
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
      <div className="-translate-x-1/2 absolute h-[375px] left-[calc(50%-6px)] top-[19px] w-[283px]" data-name="image 685">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage685} />
      </div>
    </div>
  );
}