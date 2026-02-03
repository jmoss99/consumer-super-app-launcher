const imgTypeDefaultSizeLarge = "https://www.figma.com/api/mcp/asset/8ca497a1-49fc-4f49-90af-c1b1b84f807a";
const img = "https://www.figma.com/api/mcp/asset/0b009f85-7318-4169-bdce-c8e4d46d190d";

function Crm({ className }) {
  return (
    <div className={className || ""} data-name="CRM" data-node-id="13240:177665">
      <div className="content-stretch flex flex-col gap-[32px] h-[400px] items-center justify-center px-[32px] relative w-[1920px]" 
           data-name="Type=Default, Size=Large" 
           data-node-id="13240:177757">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeDefaultSizeLarge} />
        <div className="-translate-x-1/2 absolute bottom-[16px] content-stretch flex gap-[7px] items-center left-1/2" 
             data-name="Bullet" 
             data-node-id="13240:177801">
          <div className="bg-[rgba(255,255,255,0.2)] h-[6px] rounded-[32px] shrink-0 w-[22px]" data-node-id="13240:177802" />
          <div className="bg-[rgba(255,255,255,0.5)] h-[6px] rounded-[32px] shrink-0 w-[48px]" data-node-id="13240:177803" />
          <div className="bg-[rgba(255,255,255,0.2)] h-[6px] rounded-[32px] shrink-0 w-[22px]" data-node-id="13240:177804" />
        </div>
      </div>
    </div>
  );
}

export default Crm;
