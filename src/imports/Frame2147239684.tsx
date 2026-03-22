import imgNbEnhancedImage from "figma:asset/eec979dd0911366f2a27a8c3660f38f4561997d5.png";

export default function Frame() {
  return (
    <div className="bg-[#00ba5f] overflow-clip relative rounded-[12px] size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[226px] left-[calc(50%+5.5px)] top-[calc(50%+69.71px)] w-[127px]" data-name="NB Enhanced Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNbEnhancedImage} />
      </div>
    </div>
  );
}