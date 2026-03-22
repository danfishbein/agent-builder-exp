import imgNbEnhancedImage from "figma:asset/ca36a1fdf071ada42093d90c3d1b03550ee7245c.png";

export default function SelectionGallery() {
  return (
    <div className="bg-[#f6f7fb] relative size-full" data-name="Selection gallery=10">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[176px] items-center justify-center left-1/2 top-[calc(50%+28px)] w-[99px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[176px] relative w-[99px]" data-name="NB Enhanced Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNbEnhancedImage} />
          </div>
        </div>
      </div>
    </div>
  );
}