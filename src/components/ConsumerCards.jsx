import CardImages from './CardImages';

const img1 = "https://www.figma.com/api/mcp/asset/154ef668-a067-4385-a891-fcce67bfef07";

function ConsumerCards({ className, hover = false, size = "Large", type = "Target Range" }) {
  const isPerformance = type === "Performance";
  const isTargetRange = type === "Target Range";
  
  // For Target Range, use CardImages component
  if (isTargetRange && size === "Large" && !hover) {
    return (
      <div className={className || "h-[420px] w-[320px] relative"}>
        <CardImages className="h-full w-full" title type="Target Range" />
      </div>
    );
  }
  
  // For Performance card
  if (isPerformance && size === "Large") {
    return (
      <div className="h-[420px] w-[320px] relative">
        <div className="h-full w-full overflow-hidden rounded-[8px] relative">
          {/* Background Image */}
          <img 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover rounded-[8px]" 
            src={img1} 
          />
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 rounded-[8px]"
            style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8) 100%)" }}
          />
          
          {/* Title at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[40px] text-white uppercase leading-[0.9]">
              PERFORMANCE CENTER
            </p>
          </div>
          
          {/* Inner Shadow */}
          <div className="absolute inset-0 pointer-events-none rounded-[8px] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.5)]" />
        </div>
      </div>
    );
  }
  
  // Default fallback
  return (
    <div className={className || "h-[420px] w-[320px] relative"}>
      <CardImages className="h-full w-full" title type={type} />
    </div>
  );
}

export default ConsumerCards;
