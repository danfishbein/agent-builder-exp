import imgGeminiGeneratedImage6Gin3M6Gin3M6Gin1 from "figma:asset/1655f041f68bd55d6d182073a4671484e23da852.png";
import imgNbEnhancedImage1 from "figma:asset/87d8479472e80436ded8aa7fd1ef991ffa65b1b7.png";
import { imgNbEnhancedImage } from "./svg-fw6c9";

function Frame2() {
  return (
    <div className="absolute h-[29.086px] left-[0.4px] top-[2.92px] w-[58.885px]">
      <div className="absolute bottom-[-58.29px] h-[87.378px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.868px_2.256px] mask-size-[62.447px_86.428px] w-[58.885px]" data-name="NB Enhanced Image" style={{ maskImage: `url('${imgNbEnhancedImage}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.34%] left-[1.36%] max-w-none top-[-11.19%] w-[100.45%]" src={imgNbEnhancedImage1} />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute blur-[0.684px] h-[85.5px] left-[-13.51px] rounded-[182.497px] top-[-2px] w-[59.403px]">
      <div className="absolute bottom-[-5.04px] h-[13.415px] left-[0.75px] opacity-0 w-[30.155px]" data-name="Gemini_Generated_Image_6gin3m6gin3m6gin 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[568.5%] left-[-0.04%] max-w-none top-[-468.5%] w-[187.77%]" src={imgGeminiGeneratedImage6Gin3M6Gin3M6Gin1} />
        </div>
      </div>
      <div className="absolute bottom-[-5.99px] h-[14.365px] left-[30.79px] opacity-0 w-[28.374px]" data-name="Gemini_Generated_Image_6gin3m6gin3m6gin 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[517.56%] left-[-110.51%] max-w-none top-[-417.56%] w-[210.55%]" src={imgGeminiGeneratedImage6Gin3M6Gin3M6Gin1} />
        </div>
      </div>
      <div className="absolute h-[88.09px] left-[-3.28px] top-[4.34px] w-[66.008px]" data-name="Gemini_Generated_Image_6gin3m6gin3m6gin 3">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-0.02%] max-w-none top-0 w-[100.04%]" src={imgGeminiGeneratedImage6Gin3M6Gin3M6Gin1} />
          </div>
          <div className="absolute bg-gradient-to-b from-[32.365%] from-[rgba(255,255,255,0)] inset-0 to-[43.971%] to-white via-[39.909%] via-[rgba(255,255,255,0.72)]" />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[32px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d4e4] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <Frame />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[20px] tracking-[-0.1px] whitespace-nowrap">
        <p className="leading-[24px]" dir="auto">
          Feedback Intelligence Agent
        </p>
      </div>
    </div>
  );
}