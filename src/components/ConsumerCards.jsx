import CardImages from './CardImages';

const img1 = "https://www.figma.com/api/mcp/asset/154ef668-a067-4385-a891-fcce67bfef07";
const img = "https://www.figma.com/api/mcp/asset/0b009f85-7318-4169-bdce-c8e4d46d190d";

function ConsumerCards({ className, hover = false, size = "Large", type = "Target Range" }) {
  const isPerformanceAndLargeAndHover = type === "Performance" && size === "Large" && hover;
  const isTargetRangeAndLargeAndNotHover = type === "Target Range" && size === "Large" && !hover;
  
  return (
    <div className={className || `content-stretch flex gap-[10px] items-center relative ${isPerformanceAndLargeAndHover ? "h-[460px] w-[360px]" : "h-[420px] w-[320px]"}`} 
         id={isPerformanceAndLargeAndHover ? "node-16068_121342" : "node-13240_133155"}>
      {isTargetRangeAndLargeAndNotHover && <CardImages className="content-stretch flex h-[420px] items-center relative shrink-0 w-[320px]" title />}
      {isPerformanceAndLargeAndHover && (
        <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" 
             data-name="Card.images" 
             data-node-id="16068:121343">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]" 
               data-name="Target Range" 
               data-node-id="I16068:121343;16068:103644">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img1} />
            <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full" 
                 data-name="Title+Buttons" 
                 data-node-id="I16068:121343;16068:103645">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-h-px min-w-px overflow-clip px-[16px] relative rounded-[8px]" 
                   data-name="New.Card.Master" 
                   data-node-id="I16068:121343;16068:103647" 
                   style={{ backgroundImage: "linear-gradient(161.25769928345517deg, rgba(0, 0, 0, 0) 46.399%, rgb(0, 0, 0) 60.374%)" }}>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px relative w-full" 
                     data-name="Content" 
                     data-node-id="I16068:121343;16068:103647;13234:130677">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px overflow-clip relative rounded-bl-[8px] rounded-br-[8px] w-full" 
                       data-name="Container" 
                       data-node-id="I16068:121343;16068:103647;13234:130678">
                    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[32px] relative shrink-0 w-full" 
                         data-name="Content&Buttons" 
                         data-node-id="I16068:121343;16068:103647;13234:130682">
                      <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" 
                           data-name="Text" 
                           data-node-id="I16068:121343;16068:103647;13234:130683">
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" 
                             data-name="Title" 
                             data-node-id="I16068:121343;16068:103647;13234:130684">
                          <div className="flex flex-[1_0_0] flex-col font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[48px] text-center text-white uppercase" 
                               data-node-id="I16068:121343;16068:103647;13234:130685">
                            <p className="leading-[0.9] whitespace-pre-wrap">PERFORMANCE CENTER</p>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" 
                             data-name="Description" 
                             data-node-id="I16068:121343;16068:103647;13234:130686">
                          <div className="flex flex-[1_0_0] flex-col font-['Barlow:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d3d5d9] text-[16px] text-center tracking-[-0.16px]" 
                               data-node-id="I16068:121343;16068:103647;13234:130687">
                            <p className="leading-[1.55] whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nisl libero.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.5)]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ConsumerCards;
