const imgMouse1 = "https://www.figma.com/api/mcp/asset/efc4277b-b2ff-4504-83b0-5e95ebd2d7c6";
const imgMouse2 = "https://www.figma.com/api/mcp/asset/6487b208-ad0d-497f-8acc-e1914382ae95";
const imgMouse3 = "https://www.figma.com/api/mcp/asset/666c5d3b-c75f-47cd-b7e2-edc50fe12ec3";
const imgMouse4 = "https://www.figma.com/api/mcp/asset/47268d52-f25d-47ab-874f-68c6926e173c";
const img = "https://www.figma.com/api/mcp/asset/0b009f85-7318-4169-bdce-c8e4d46d190d";

function CardImages({ className, hover = false, title = false, type = "Target Range" }) {
  const isCourses = type === "Courses";
  const isCoursesOrCtp = ["Courses", "CTP", "Challenges"].includes(type);
  const isCtp = type === "CTP";
  const isRange = type === "Range";
  const isChallenges = type === "Challenges";
  
  // Get title text based on type
  const getTitle = () => {
    if (type === "Target Range") return "PRACTICE";
    if (type === "Courses") return "COURSES";
    if (type === "CTP") return "GAMES";
    if (type === "Challenges") return "CHALLENGES";
    return "TITLE";
  };
  
  return (
    <div className={className || "content-stretch flex h-[420px] items-center relative w-[320px]"} 
         id={isCtp ? "node-13255_22365" : isRange ? "node-13255_22301" : isCourses ? "node-13255_22369" : isChallenges ? "node-13255_challenges" : "node-13255_22299"}>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-h-px min-w-px overflow-clip relative rounded-[8px]" 
           data-name="Target Range" 
           id={isCtp ? "node-13255_22366" : isRange ? "node-13255_22302" : isCourses ? "node-13255_22370" : isChallenges ? "node-13255_challenges_card" : "node-13255_22223"}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" 
             src={isCtp ? imgMouse1 : isRange ? imgMouse2 : isCourses ? imgMouse3 : isChallenges ? imgMouse2 : imgMouse4} />
        <div className={`content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full ${isCoursesOrCtp ? "" : "justify-center"}`} 
             data-name="Title+Buttons" 
             id={isCtp ? "node-13255_22367" : isRange ? "node-13255_22303" : isCourses ? "node-13255_22371" : isChallenges ? "node-13255_challenges_title" : "node-13255_22251"}>
          {title && (
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-end min-h-px min-w-px overflow-clip px-[16px] relative rounded-[8px]" 
                 data-name="New.Card.Master" 
                 data-node-id="13343:331327" 
                 style={{ backgroundImage: "linear-gradient(168.11974379007643deg, rgba(0, 0, 0, 0) 68.572%, rgb(0, 0, 0) 83.124%)" }}>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px relative w-full" 
                   data-name="Content" 
                   data-node-id="I13343:331327;13234:130661">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px overflow-clip relative rounded-bl-[8px] rounded-br-[8px] w-full" 
                     data-name="Container" 
                     data-node-id="I13343:331327;13234:130662">
                  <div className="content-stretch flex flex-col items-center justify-end px-[16px] pb-[24px] relative shrink-0 w-full" 
                       data-name="Content&Buttons" 
                       data-node-id="I13343:331327;13234:130666">
                    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" 
                         data-name="Text" 
                         data-node-id="I13343:331327;13234:130667">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" 
                           data-name="Title" 
                           data-node-id="I13343:331327;13234:130668">
                        <div className="flex flex-[1_0_0] flex-col font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] justify-center leading-[0] min-h-px min-w-px relative text-[40px] text-center text-white uppercase" 
                             data-node-id="I13343:331327;13234:130669">
                          <p className="leading-[0.9] whitespace-pre-wrap">{getTitle()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {hover && (
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-h-px min-w-px overflow-clip px-[16px] relative rounded-[8px]" 
                 data-name="New.Card.Master" 
                 data-node-id="13343:346092" 
                 style={{ backgroundImage: "linear-gradient(161.25769928345517deg, rgba(0, 0, 0, 0) 46.399%, rgb(0, 0, 0) 60.374%)" }}>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px relative w-full" 
                   data-name="Content" 
                   data-node-id="I13343:346092;13234:130677">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px overflow-clip relative rounded-bl-[8px] rounded-br-[8px] w-full" 
                     data-name="Container" 
                     data-node-id="I13343:346092;13234:130678">
                  <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[32px] relative shrink-0 w-full" 
                       data-name="Content&Buttons" 
                       data-node-id="I13343:346092;13234:130682">
                    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" 
                         data-name="Text" 
                         data-node-id="I13343:346092;13234:130683">
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" 
                           data-name="Title" 
                           data-node-id="I13343:346092;13234:130684">
                        <div className="flex flex-[1_0_0] flex-col font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] justify-center leading-[0] min-h-px min-w-px relative text-[48px] text-center text-white uppercase" 
                             data-node-id="I13343:346092;13234:130685">
                          <p className="leading-[0.9] whitespace-pre-wrap">{getTitle()}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" 
                           data-name="Description" 
                           data-node-id="I13343:346092;13234:130686">
                        <div className="flex flex-[1_0_0] flex-col font-['Barlow:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#d3d5d9] text-[16px] text-center tracking-[-0.16px]" 
                             data-node-id="I13343:346092;13234:130687">
                          <p className="leading-[1.55] whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nisl libero.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.5)]" />
      </div>
    </div>
  );
}

export default CardImages;
