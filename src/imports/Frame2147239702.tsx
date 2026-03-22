function Frame() {
  return <div className="absolute bg-white border border-[#d0d4e4] border-solid h-[104px] left-0 rounded-[12px] top-0 w-[56px]" />;
}

export default function Frame1() {
  return (
    <div className="relative rounded-[60px] size-full">
      <Frame />
    </div>
  );
}