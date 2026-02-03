const img3 = "https://www.figma.com/api/mcp/asset/ab1f9bca-19a4-450d-91e2-969e45a78524";

function PlayerCard({ className }) {
  return (
    <div className={className || "content-stretch flex items-center relative w-[363px]"} 
         data-name="player.card" 
         data-node-id="16727:42171">
      <div className="bg-[#1f1f1f] border border-[#1f1f1f] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pr-[32px] relative rounded-br-[8px] rounded-tr-[8px] ml-[90px]" 
           data-node-id="16727:42151">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" 
             data-node-id="16727:42152">
          <div className="content-stretch flex gap-[10px] h-[48px] items-center pl-[16px] relative shrink-0 w-full" 
               data-node-id="16727:42153">
            <p className="font-['Barlow:Medium',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.2px]" 
               data-node-id="16727:42154">
              Ryan Schmidt
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(0,0,0,0.5)] content-stretch flex gap-[10px] items-center left-0 p-[4px] rounded-[300px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.4)] size-[80px] top-1/2 z-10" 
           data-name="Avatar.types" 
           data-node-id="16727:42165">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" 
             data-node-id="I16727:42165;12185:74509">
          <img alt="" className="block max-w-none size-full object-cover rounded-full" height="72" src={img3} width="72" />
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
