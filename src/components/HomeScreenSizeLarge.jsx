import LauncherHeader from './LauncherHeader';
import Crm from './Crm';
import ConsumerCards from './ConsumerCards';
import CardImages from './CardImages';

const imgMouse1 = "https://www.figma.com/api/mcp/asset/efc4277b-b2ff-4504-83b0-5e95ebd2d7c6";
const imgMouse3 = "https://www.figma.com/api/mcp/asset/666c5d3b-c75f-47cd-b7e2-edc50fe12ec3";
const imgMouse4 = "https://www.figma.com/api/mcp/asset/47268d52-f25d-47ab-874f-68c6926e173c";
const img = "https://www.figma.com/api/mcp/asset/0b009f85-7318-4169-bdce-c8e4d46d190d";
const img5 = "https://www.figma.com/api/mcp/asset/4d526b14-5fd8-4a8d-9d2e-6ad10ebd673e";
const img6 = "https://www.figma.com/api/mcp/asset/a66e5fb3-8344-4317-b863-9223ba80bddc";
const img7 = "https://www.figma.com/api/mcp/asset/58b178cd-89fa-4386-a9fa-bb7a47d53337";
const img8 = "https://www.figma.com/api/mcp/asset/73420383-8294-457f-91e3-54a093818aa9";

export default function HomeScreenSizeLarge({ onNavigateToChallenges }) {
  return (
    <div className="bg-white relative size-full" data-name="Home / Screen Size / Large" data-node-id="17004:98856">
      <div className="-translate-x-1/2 absolute bg-[#f7f7f7] content-stretch flex flex-col h-[1080px] items-start left-1/2 top-0 w-[1920px]" 
           data-name="Body" 
           data-node-id="17004:98857">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shadow-[0px_30px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" 
             data-name="Header" 
             data-node-id="17004:98858">
          <LauncherHeader className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" />
        </div>
        <div className="bg-black content-stretch flex flex-col h-[400px] items-center justify-center overflow-clip relative shrink-0 w-full" 
             data-name="CRM" 
             data-node-id="17004:98860">
          <Crm className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-h-px min-w-px overflow-clip px-[32px] relative w-[1920px]" />
        </div>
        <div className="bg-white content-stretch flex flex-[1_0_0] gap-[32px] items-center justify-center min-h-px min-w-px px-[32px] py-[40px] relative w-full" 
             data-name="Home Cards" 
             data-node-id="17004:98865">
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center justify-center min-h-px min-w-px relative" 
               data-name="Cards" 
               data-node-id="17004:98866">
            <div className="content-stretch flex gap-[10px] h-[420px] items-center relative shrink-0 w-[320px]" 
                 data-name="Consumer.Cards" 
                 data-node-id="17004:98870">
              <CardImages className="content-stretch flex h-[420px] items-center relative shrink-0 w-[320px]" 
                          type="Target Range" 
                          title />
            </div>
            <div className="content-stretch flex gap-[10px] h-[420px] items-center relative shrink-0 w-[320px]" 
                 data-name="Consumer.Cards" 
                 data-node-id="17004:98871">
              <CardImages className="content-stretch flex h-[420px] items-center relative shrink-0 w-[320px]" 
                          type="Courses" 
                          title />
            </div>
            <div className="content-stretch flex gap-[10px] h-[420px] items-center relative shrink-0 w-[320px]" 
                 data-name="Consumer.Cards" 
                 data-node-id="17004:98872">
              <CardImages className="content-stretch flex h-[420px] items-center relative shrink-0 w-[320px]" 
                          type="CTP" 
                          title />
            </div>
            <div 
              className="content-stretch flex gap-[10px] h-[420px] items-center relative shrink-0 w-[320px] cursor-pointer hover:opacity-90 transition-opacity" 
              data-name="Consumer.Cards" 
              data-node-id="17004:98873"
              onClick={() => onNavigateToChallenges && onNavigateToChallenges()}
            >
              <CardImages className="content-stretch flex h-[420px] items-center relative shrink-0 w-[320px]" 
                          type="Challenges" 
                          title />
            </div>
            <ConsumerCards className="content-stretch flex gap-[10px] h-[460px] items-center relative shrink-0 w-[360px]" 
                           hover 
                           type="Performance" />
          </div>
        </div>
        <div className="content-stretch flex isolate items-center justify-between pl-[32px] relative shrink-0 w-full" 
             data-name="Footer" 
             data-node-id="17004:98902">
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 z-[2]" 
                 data-name="Product Logo" 
                 data-node-id="I17004:98902;8341:670460">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] h-full items-center justify-center pr-[244px] relative">
                <div className="h-[63px] overflow-clip relative shrink-0 w-[396px]" 
                     data-name="Logos" 
                     data-node-id="I17004:98902;11559:370011">
                  <div className="absolute inset-[0_0.18%_0.15%_0]" 
                       data-name="Rapsodo Golf" 
                       data-node-id="I17004:98902;11559:370011;2948:10342">
                    <img alt="" className="block max-w-none size-full" src={img5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[80px] min-h-px min-w-px relative z-[1]" 
               data-name="Header-Diagonal" 
               data-node-id="I17004:98902;8341:670463">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
              <div className="flex h-full items-center justify-center relative shrink-0">
                <div className="flex-none h-full rotate-180">
                  <div className="content-stretch flex h-full items-center relative" 
                       data-name="Diagonal Frame" 
                       data-node-id="I17004:98902;8341:670468">
                    <div className="aspect-[37.60000991821289/80] h-full relative shrink-0" 
                         data-node-id="I17004:98902;8341:670469">
                      <img alt="" className="block max-w-none size-full" src={img6} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black content-stretch flex flex-[1_0_0] gap-[12px] h-full items-center justify-end min-h-px min-w-px px-[32px] relative" 
                   data-name="Menu" 
                   data-node-id="I17004:98902;8341:670470">
                <div className="bg-[#1f1f1f] content-stretch flex gap-[8px] h-[48px] items-center px-[8px] relative rounded-[8px] shrink-0" 
                     data-name="Language/Dropdown" 
                     data-node-id="I17004:98902;8341:676207">
                  <div className="content-stretch flex gap-[8px] items-center justify-end px-[8px] relative rounded-[4px] shrink-0" 
                       data-name="CurrencyDropdown/List/Item" 
                       data-node-id="I17004:98902;8341:676207;8341:676845">
                    <div className="overflow-clip relative shrink-0 size-[24px]" 
                         data-name="Media / Flags" 
                         data-node-id="I17004:98902;8341:676207;8341:676845;1100:10254">
                      <div className="absolute inset-[14.29%_0_14.28%_0]" 
                           data-name="Flag" 
                           data-node-id="I17004:98902;8341:676207;8341:676845;1100:10254;54:2177">
                        <img alt="" className="block max-w-none size-full" src={img7} />
                      </div>
                    </div>
                    <p className="font-['Barlow:SemiBold',sans-serif] h-[20px] leading-[1.4] not-italic relative shrink-0 text-[14px] text-white text-center tracking-[0.98px] uppercase w-[28px] whitespace-pre-wrap" 
                       data-node-id="I17004:98902;8341:676207;8341:676845;1100:10255">
                      USD
                    </p>
                  </div>
                  <div className="relative shrink-0 size-[24px]" 
                       data-name="Local Icons" 
                       data-node-id="I17004:98902;8341:676207;8341:677051">
                    <img alt="" className="block max-w-none size-full" src={img8} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
