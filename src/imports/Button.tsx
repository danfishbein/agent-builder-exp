export default function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] relative rounded-[6px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323338] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Edit agent</p>
      </div>
    </div>
  );
}