import svgPaths from "./svg-kgixezgvoj";
import imgAvatarContainer from "figma:asset/800e7c4073485ef4638ac1aacca79f096ce73b44.png";

function CompanyLogoContainer() {
  return (
    <div className="absolute inset-[0_25.81%_0_0] overflow-clip rounded-bl-[4px] rounded-tl-[4px]" data-name="Company Logo Container">
      <div className="absolute bg-white h-[32px] left-0 opacity-50 top-0 w-[46px]" data-name="Background" />
      <div className="absolute left-[6px] overflow-clip size-[20px] top-[6px]" data-name="Product Logo / Small">
        <div className="absolute inset-[28.34%_54.13%_30.88%_15.62%]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.04997 8.1546">
            <path clipRule="evenodd" d={svgPaths.p8f5b1c0} fill="var(--fill-0, #FB275D)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
        <div className="absolute inset-[28.25%_29.47%_30.88%_40.23%]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.05988 8.17401">
            <path clipRule="evenodd" d={svgPaths.p39d0d080} fill="var(--fill-0, #FFCB00)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
        <div className="absolute inset-[49.03%_15.62%_30.88%_64.81%]" data-name="Oval">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91309 4.01822">
            <path clipRule="evenodd" d={svgPaths.p3521d400} fill="var(--fill-0, #00C875)" fillRule="evenodd" id="Oval" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar Container">
      <img alt="" className="absolute block max-w-none size-full" height="32" src={imgAvatarContainer} width="32" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[32px] left-0 top-0 w-[62px]" data-name="Profile button">
        <CompanyLogoContainer />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center left-[calc(50%+15px)] rounded-[100px] top-1/2" data-name="Avatar">
          <AvatarContainer />
        </div>
      </div>
    </div>
  );
}