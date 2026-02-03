const img2 = "https://www.figma.com/api/mcp/asset/071ec322-ee51-4746-bff5-1762aa91949d";

function DeviceConnectionStatus({ className, size = "XL", states = "Default", status = "Success" }) {
  return (
    <div className={className || "bg-[#22c55e] content-stretch flex items-center justify-center p-[8px] relative rounded-[32px]"} 
         data-node-id="13398:26913">
      <div className="overflow-clip relative shrink-0 size-[24px]" 
           data-name="Icons" 
           data-node-id="13398:26909">
        <div className="-translate-y-1/2 absolute aspect-[33.332679748535156/29.999927520751953] left-[16.67%] right-[20.83%] top-1/2" 
             data-name="Vector" 
             data-node-id="I13398:26909;5586:3609">
          <div className="absolute inset-[-6.67%_-6%]">
            <img alt="" className="block max-w-none size-full" src={img2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceConnectionStatus;
