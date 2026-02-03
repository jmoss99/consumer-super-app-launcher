import PlayerCard from './PlayerCard';
import DeviceConnectionStatus from './DeviceConnectionStatus';

const imgVector125 = "https://www.figma.com/api/mcp/asset/a63b2e5d-fd4b-4f9d-a386-07a550369e33";
const img4 = "https://www.figma.com/api/mcp/asset/000e4c57-4b62-4553-bb1a-98b425f5d4c0";
const img = "https://www.figma.com/api/mcp/asset/0b009f85-7318-4169-bdce-c8e4d46d190d";

function LauncherHeader({ className, cloud = true, connection = true, download = false, notification = true }) {
  return (
    <div className={className || ""} data-name="Launcher.Header" data-node-id="35:15611">
      <div className="content-stretch flex gap-[16px] items-center relative w-[1920px]" 
           data-name="Type=Default, Size=Large, Property=Launcher" 
           data-node-id="2517:88497">
        <div className="content-stretch flex items-center relative shrink-0" 
             data-name="Header-Diagonal" 
             data-node-id="2517:88498">
          <div className="bg-black content-stretch flex items-center relative shrink-0" 
               data-name="Header" 
               data-node-id="6622:251818">
            <div className="bg-black content-stretch flex gap-[32px] h-[100px] items-center px-[32px] py-[24px] relative shrink-0 min-w-[364px]" 
                 data-name="Profile" 
                 data-node-id="2517:88499">
              <PlayerCard className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" />
            </div>
            <div className="bg-black content-stretch flex flex-col h-[100px] items-center justify-center px-[32px] relative shrink-0 flex-1" 
                 data-name="Menu" 
                 data-node-id="8369:736946">
              <div className="content-stretch flex gap-[16px] items-center justify-center pt-[24px] px-[16px] relative shrink-0 w-full" 
                   data-name="Tabs" 
                   data-node-id="8369:736947">
                <div className="content-stretch flex items-start relative shrink-0" 
                     data-name="Tabs" 
                     data-node-id="8369:736948">
                  <div className="border-b-2 border-transparent border-solid content-stretch flex items-center justify-center pb-[8px] relative shrink-0" 
                       data-name=".Tabs_Master" 
                       data-node-id="I8369:736948;1631:142623">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" 
                         data-name="Text" 
                         data-node-id="I8369:736948;1631:142623;1631:142536">
                      <p className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[48px] text-white uppercase whitespace-nowrap" 
                         data-node-id="I8369:736948;1631:142623;1631:142538">
                        SESSIONS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" 
                     data-name="Tabs" 
                     data-node-id="8369:736949">
                  <div className="border-b-2 border-[#cd1b32] border-solid content-stretch flex items-center justify-center pb-[8px] relative shrink-0" 
                       data-name=".Tabs_Master" 
                       data-node-id="I8369:736949;1631:142611">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" 
                         data-name="Text" 
                         data-node-id="I8369:736949;1631:142611;1631:142536">
                      <p className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[48px] text-white uppercase whitespace-nowrap" 
                         data-node-id="I8369:736949;1631:142611;1631:142538">
                        PLAY
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" 
                     data-name="Tabs" 
                     data-node-id="8369:736950">
                  <div className="border-b-2 border-transparent border-solid content-stretch flex items-center justify-center pb-[8px] relative shrink-0" 
                       data-name=".Tabs_Master" 
                       data-node-id="I8369:736950;1631:142623">
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" 
                         data-name="Text" 
                         data-node-id="I8369:736950;1631:142623;1631:142536">
                      <p className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[48px] text-white uppercase whitespace-nowrap" 
                         data-node-id="I8369:736950;1631:142623;1631:142538">
                        PROFILE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="content-stretch flex h-full items-center relative shrink-0" 
                 data-name="Diagonal Frame" 
                 data-node-id="2517:88505">
              <div className="h-[100px] relative shrink-0 w-[46.667px]" 
                   data-node-id="2517:88506">
                <img alt="" className="block max-w-none size-full" src={imgVector125} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-full items-center justify-end min-h-px min-w-px px-[32px] relative" 
               data-name="Device Info" 
               data-node-id="2517:88512">
            {cloud && (
              <div className="bg-[#22c55e] content-stretch flex items-center justify-center p-[8px] relative rounded-[200px] shrink-0 size-[40px]" 
                   data-name="Sync" 
                   data-node-id="13400:186362">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" 
                     data-name="Info.Icons" 
                     data-node-id="I13400:186362;5221:186283">
                  <div className="absolute inset-[10%_0]" 
                       data-name="Subtract" 
                       data-node-id="I13400:186362;5221:186283;13415:373192">
                    <img alt="" className="block max-w-none size-full" src={img4} />
                  </div>
                </div>
              </div>
            )}
            {connection && <DeviceConnectionStatus className="bg-[#22c55e] content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LauncherHeader;
