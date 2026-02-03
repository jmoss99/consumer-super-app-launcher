const imgMouse = "https://www.figma.com/api/mcp/asset/2ffcbc97-1f3a-4cba-bb5a-7eeda4b53608";

function Mouse({ className }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="Mouse" data-node-id="13418:169663">
      <div className="absolute inset-[-12.5%]">
        <img alt="" className="block max-w-none size-full" src={imgMouse} />
      </div>
    </div>
  );
}

export default Mouse;
