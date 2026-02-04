const imgMouse1 = "https://www.figma.com/api/mcp/asset/efc4277b-b2ff-4504-83b0-5e95ebd2d7c6";
const imgMouse2 = "https://www.figma.com/api/mcp/asset/6487b208-ad0d-497f-8acc-e1914382ae95";
const imgMouse3 = "https://www.figma.com/api/mcp/asset/666c5d3b-c75f-47cd-b7e2-edc50fe12ec3";
const imgMouse4 = "https://www.figma.com/api/mcp/asset/47268d52-f25d-47ab-874f-68c6926e173c";

function CardImages({ className, hover = false, title = false, type = "Target Range" }) {
  const isCourses = type === "Courses";
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

  // Get image based on type
  const getImage = () => {
    if (isCtp) return imgMouse1;
    if (isRange) return imgMouse2;
    if (isCourses) return imgMouse3;
    if (isChallenges) return imgMouse2;
    return imgMouse4;
  };
  
  return (
    <div className={className || "h-[420px] w-[320px] relative"}>
      <div className="h-full w-full overflow-hidden rounded-[8px] relative">
        {/* Background Image */}
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover rounded-[8px]" 
          src={getImage()} 
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 rounded-[8px]"
          style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%)" }}
        />
        
        {/* Title at Bottom */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[40px] text-white uppercase leading-[0.9]">
              {getTitle()}
            </p>
          </div>
        )}
        
        {/* Hover State */}
        {hover && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[48px] text-white uppercase leading-[0.9] mb-2">
              {getTitle()}
            </p>
            <p className="font-['Barlow:Medium',sans-serif] text-[16px] text-[#d3d5d9] leading-[1.55]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
        
        {/* Inner Shadow */}
        <div className="absolute inset-0 pointer-events-none rounded-[8px] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.5)]" />
      </div>
    </div>
  );
}

export default CardImages;
