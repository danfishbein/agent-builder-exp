import imgGeminiGeneratedImageQfm0Reqfm0Reqfm03 from "figma:asset/be71b3e1a270a2accd90e83787d40903a247497d.png";
import imgEnhancedImage62 from "figma:asset/1d2ab994643957b43cbc8129bc63acb1c08db29b.png";
import imgHilaeinyHttpssMjRun5OpDVEyTosHttpssMjRunW2QmAIarcJgHtAc3E5173315E4B3788BeC2Ffd031D0560 from "figma:asset/4282894302a1ed4df79aaad28061cfaed24ca8bf.png";

function Avatar2() {
  return (
    <div className="absolute backdrop-blur-[0.687px] bg-[#9593ff] left-[16px] overflow-clip rounded-[24px] shadow-[-0.55px_0.366px_5.496px_0px_rgba(31,132,132,0.1)] size-[28px] top-[111px]" data-name="Avatar 03">
      <div className="absolute h-[81.113px] left-[-18.87px] top-[-9.03px] w-[67.208px]" data-name="Gemini_Generated_Image_qfm0reqfm0reqfm0 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeminiGeneratedImageQfm0Reqfm0Reqfm03} />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute backdrop-blur-[0.687px] bg-[#1ad5ff] left-[16px] overflow-clip rounded-[24px] shadow-[-0.55px_0.366px_5.496px_0px_rgba(31,132,132,0.1)] size-[28px] top-[63px]" data-name="Avatar 02">
      <div className="absolute h-[47.099px] left-[-9.4px] top-[-2.66px] w-[41.476px]" data-name="enhanced_image (6) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgEnhancedImage62} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="absolute backdrop-blur-[0.702px] bg-[#ffe100] left-[16px] overflow-clip rounded-[24px] shadow-[-0.561px_0.374px_5.613px_0px_rgba(31,132,132,0.1)] size-[28px] top-[15px]" data-name="Avatar 01">
      <div className="absolute h-[58.275px] left-[-7.44px] top-[-6.02px] w-[45.363px]" data-name="hilaeiny_httpss.mj.run5opD_vEyTos_httpss.mj.runW2qmAIarcJg_ht_ac3e5173-315e-4b37-88be-c2ffd031d056_0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[116.71%] left-[-14.76%] max-w-none top-[-16.68%] w-[123.95%]" src={imgHilaeinyHttpssMjRun5OpDVEyTosHttpssMjRunW2QmAIarcJgHtAc3E5173315E4B3788BeC2Ffd031D0560} />
        </div>
      </div>
    </div>
  );
}

export default function Avatars() {
  return (
    <div className="relative size-full" data-name="Avatars">
      <Avatar2 />
      <Avatar1 />
      <Avatar />
    </div>
  );
}