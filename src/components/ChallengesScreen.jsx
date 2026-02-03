import { useState } from 'react';
import LauncherHeader from './LauncherHeader';

export default function ChallengesScreen({ onBack }) {
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  // Handler for Play button - loads into the specified hole
  const handlePlayChallenge = (competition) => {
    if (competition.hole) {
      // TODO: Implement navigation to hole
      console.log(`Loading into hole ${competition.hole} for ${competition.title}`);
      alert(`Loading into Hole ${competition.hole}...`);
      // In a real implementation, this would navigate to the game/hole view
    }
  };

  // Mock leaderboard data for Closest to the Pin
  const closestToPinLeaderboard = [
    { rank: 1, name: "Mike Johnson", distance: "2.3 ft", date: "Jan 28" },
    { rank: 2, name: "Sarah Williams", distance: "3.1 ft", date: "Jan 27" },
    { rank: 3, name: "David Chen", distance: "4.5 ft", date: "Jan 26" },
    { rank: 4, name: "Emily Davis", distance: "5.2 ft", date: "Jan 25" },
    { rank: 5, name: "James Wilson", distance: "6.8 ft", date: "Jan 24" },
  ];

  // Mock leaderboard data for Long Drive
  const longDriveLeaderboard = [
    { rank: 1, name: "Tom Anderson", distance: "342 yds", date: "Jan 29" },
    { rank: 2, name: "Lisa Martinez", distance: "338 yds", date: "Jan 28" },
    { rank: 3, name: "Chris Brown", distance: "335 yds", date: "Jan 27" },
    { rank: 4, name: "Jessica Taylor", distance: "331 yds", date: "Jan 26" },
    { rank: 5, name: "Ryan Garcia", distance: "328 yds", date: "Jan 25" },
  ];

  // Live Challenges - currently active
  const liveChallenges = [
    {
      id: 'wm-phoenix-open',
      title: 'The WM Phoenix Open',
      participants: 0,
      endDate: '7 days',
      hasLeaderboard: true,
      completed: false,
      isWeekly: true,
      hole: 16,
      yardage: 145,
      shots: 3,
      description: 'The WM Phoenix Open - Hole 16, 145 yards. Each player gets 3 shots to get closest to the pin.',
      leaderboard: [],
      badgeColor: '#f59e0b',
    },
    {
      id: 'closest-to-pin',
      title: 'Closest to the Pin',
      participants: 247,
      yourBest: '8.4 ft',
      yourRank: 42,
      endDate: '3 days',
      leaderboard: closestToPinLeaderboard,
      hasLeaderboard: true,
      completed: true,
    },
    {
      id: 'long-drive',
      title: 'Long Drive',
      participants: 189,
      yourBest: '312 yds',
      yourRank: 28,
      endDate: '3 days',
      leaderboard: longDriveLeaderboard,
      hasLeaderboard: true,
      completed: true,
    },
    {
      id: 'strokes-gained-130yd',
      title: 'Strokes Gained',
      subtitle: '130yd Green from Target Range',
      yourBest: '+2.3',
      currentScore: '+3.1',
      attempts: 47,
      endDate: 'Ongoing',
      hasLeaderboard: false,
      isPersonalBest: true,
      badgeColor: '#8b5cf6',
    },
  ];

  // Past Challenges - already ended
  const pastChallenges = [
    {
      id: 'january-ctp',
      title: 'January CTP Challenge',
      participants: 312,
      yourBest: '4.2 ft',
      yourRank: 15,
      endDate: 'Ended Jan 25',
      hasLeaderboard: true,
      completed: true,
      isPast: true,
      leaderboard: [
        { rank: 1, name: "Alex Thompson", distance: "1.8 ft", date: "Jan 24" },
        { rank: 2, name: "Sarah Miller", distance: "2.1 ft", date: "Jan 23" },
        { rank: 3, name: "Chris Johnson", distance: "2.9 ft", date: "Jan 22" },
      ],
    },
    {
      id: 'new-years-drive',
      title: 'New Years Long Drive',
      participants: 198,
      yourBest: '298 yds',
      yourRank: 45,
      endDate: 'Ended Jan 7',
      hasLeaderboard: true,
      completed: true,
      isPast: true,
      leaderboard: [
        { rank: 1, name: "Mike Davis", distance: "356 yds", date: "Jan 5" },
        { rank: 2, name: "Tom Wilson", distance: "349 yds", date: "Jan 6" },
        { rank: 3, name: "Jake Brown", distance: "341 yds", date: "Jan 4" },
      ],
    },
  ];

  // Combine for finding selected competition
  const allCompetitions = [...liveChallenges, ...pastChallenges];
  const currentCompetition = allCompetitions.find(c => c.id === selectedCompetition);

  // Competition Card View (List)
  if (!selectedCompetition) {
    return (
      <div className="bg-white relative size-full" data-name="Challenges Screen">
        <div className="-translate-x-1/2 absolute bg-[#f7f7f7] content-stretch flex flex-col min-h-screen items-start left-1/2 top-0 w-[1920px]" 
             data-name="Body">
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shadow-[0px_30px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" 
               data-name="Header">
            <LauncherHeader className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" />
          </div>
          
          <div className="bg-white content-stretch flex flex-col items-start flex-1 gap-[40px] px-[64px] py-[60px] relative w-full overflow-y-auto" 
               data-name="Challenges Content">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full max-w-[1400px] mx-auto">
              {/* Header Section */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <h1 className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[64px] text-left text-black uppercase leading-[0.9]">
                    CHALLENGES
                  </h1>
                  <button 
                    onClick={() => onBack && onBack()}
                    className="font-['Barlow:Medium',sans-serif] text-[16px] text-left text-[#5C616B] hover:text-[#cd1b32] transition-colors cursor-pointer"
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>

              {/* Live Challenges Section */}
              <div className="flex flex-col gap-[24px] w-full">
                <h2 className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black uppercase leading-[1]">
                  LIVE CHALLENGES
                </h2>
                <div 
                  className="w-full"
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px'
                  }}
                >
                  {liveChallenges.map((competition) => (
                  <div
                    key={competition.id}
                    onClick={() => setSelectedCompetition(competition.id)}
                    className="bg-white border-2 border-solid flex flex-col gap-[24px] items-start px-[24px] py-[24px] relative rounded-[16px] cursor-pointer hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)] transition-all hover:scale-[1.02]"
                    style={{ borderColor: competition.badgeColor || '#cd1b32', overflow: 'hidden' }}
                  >
                    <div className="flex flex-col gap-[8px] items-start w-full" style={{ overflow: 'hidden' }}>
                      <div className="flex flex-wrap gap-[8px] items-center w-full">
                        <span 
                          className="flex items-center justify-center px-[10px] py-[4px] rounded-[4px]"
                          style={{ backgroundColor: competition.badgeColor || '#22c55e' }}
                        >
                          <span className="font-['Barlow:SemiBold',sans-serif] text-[11px] text-center text-white uppercase tracking-[0.84px]">
                            {competition.isPersonalBest ? 'PERSONAL' : 'LIVE'}
                          </span>
                        </span>
                        {!competition.isPersonalBest && competition.completed === true && (
                          <span 
                            className="flex items-center justify-center px-[10px] py-[4px] rounded-[4px]"
                            style={{ backgroundColor: '#10b981' }}
                          >
                            <span className="font-['Barlow:SemiBold',sans-serif] text-[11px] text-center text-white uppercase tracking-[0.84px]">
                              COMPLETED
                            </span>
                          </span>
                        )}
                        <span className="font-['Barlow:Medium',sans-serif] text-[13px] text-left text-[#5C616B]">
                          {competition.isPersonalBest ? 'Challenge' : competition.isWeekly ? 'Weekly' : 'Monthly'}
                        </span>
                      </div>
                      <h2 
                        className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[22px] text-left text-black uppercase"
                        style={{ 
                          lineHeight: '1.3', 
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word',
                          wordBreak: 'break-word',
                          width: '100%',
                          maxWidth: '100%'
                        }}
                      >
                        {competition.title}
                      </h2>
                      {competition.subtitle && (
                        <p className="font-['Barlow:Regular',sans-serif] text-[13px] text-left text-[#5C616B]" style={{ lineHeight: '1.5', wordWrap: 'break-word', width: '100%' }}>
                          {competition.subtitle}
                        </p>
                      )}
                      <p className="font-['Barlow:Regular',sans-serif] text-[13px] text-left text-[#5C616B]" style={{ lineHeight: '1.5' }}>
                        {competition.isPersonalBest ? competition.endDate : `Ends in ${competition.endDate}`}
                      </p>
                    </div>

                    <div className="flex gap-[12px] items-start w-full">
                      {competition.hasLeaderboard ? (
                        <>
                          <div className="bg-[#f7f7f7] flex flex-col gap-[6px] items-start px-[12px] py-[10px] rounded-[8px] flex-1">
                            <span className="font-['Barlow:Medium',sans-serif] text-[11px] text-left text-[#5C616B] uppercase tracking-[0.84px]">
                              Participants
                            </span>
                            <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[20px] text-left text-black leading-[1]">
                              {competition.participants || 0}
                            </span>
                          </div>
                          {competition.yourRank ? (
                            <div className="bg-[#f7f7f7] flex flex-col gap-[6px] items-start px-[12px] py-[10px] rounded-[8px] flex-1">
                              <span className="font-['Barlow:Medium',sans-serif] text-[11px] text-left text-[#5C616B] uppercase tracking-[0.84px]">
                                Your Rank
                              </span>
                              <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[20px] text-left text-black leading-[1]">
                                #{competition.yourRank}
                              </span>
                            </div>
                          ) : competition.hole ? (
                            <div className="bg-[#f7f7f7] flex flex-col gap-[6px] items-start px-[12px] py-[10px] rounded-[8px] flex-1">
                              <span className="font-['Barlow:Medium',sans-serif] text-[11px] text-left text-[#5C616B] uppercase tracking-[0.84px]">
                                Hole
                              </span>
                              <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[20px] text-left text-black leading-[1]">
                                {competition.hole}
                              </span>
                            </div>
                          ) : null}
                        </>
                      ) : (
                        <div className="bg-[#f7f7f7] flex flex-col gap-[6px] items-start px-[12px] py-[10px] rounded-[8px] w-full">
                          <span className="font-['Barlow:Medium',sans-serif] text-[11px] text-left text-[#5C616B] uppercase tracking-[0.84px]">
                            Personal Best
                          </span>
                          <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[20px] text-left text-black leading-[1]">
                            {competition.yourBest}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-center w-full">
                      <span className="font-['Barlow:Medium',sans-serif] text-[13px] text-center text-[#cd1b32] uppercase tracking-[0.98px]">
                        View Details →
                      </span>
                    </div>
                  </div>
                  ))}
                </div>
              </div>

              {/* Past Challenges Section */}
              <div className="flex flex-col gap-[24px] w-full mt-[24px]">
                <h2 className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-[#5C616B] uppercase leading-[1]">
                  PAST CHALLENGES
                </h2>
                <div 
                  className="w-full"
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '24px'
                  }}
                >
                  {pastChallenges.map((competition) => (
                    <div
                      key={competition.id}
                      onClick={() => setSelectedCompetition(competition.id)}
                      className="bg-white border-2 border-solid flex flex-col gap-[24px] items-start px-[24px] py-[24px] relative rounded-[16px] cursor-pointer hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)] transition-all hover:scale-[1.02] opacity-80"
                      style={{ borderColor: '#9ca3af', overflow: 'hidden' }}
                    >
                      <div className="flex flex-col gap-[8px] items-start w-full" style={{ overflow: 'hidden' }}>
                        <div className="flex flex-wrap gap-[8px] items-center w-full">
                          <span 
                            className="flex items-center justify-center px-[10px] py-[4px] rounded-[4px]"
                            style={{ backgroundColor: '#9ca3af' }}
                          >
                            <span className="font-['Barlow:SemiBold',sans-serif] text-[11px] text-center text-white uppercase tracking-[0.84px]">
                              ENDED
                            </span>
                          </span>
                          {competition.completed && (
                            <span 
                              className="flex items-center justify-center px-[10px] py-[4px] rounded-[4px]"
                              style={{ backgroundColor: '#10b981' }}
                            >
                              <span className="font-['Barlow:SemiBold',sans-serif] text-[11px] text-center text-white uppercase tracking-[0.84px]">
                                COMPLETED
                              </span>
                            </span>
                          )}
                        </div>
                        <h2 
                          className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[22px] text-left text-black uppercase"
                          style={{ 
                            lineHeight: '1.3', 
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            wordBreak: 'break-word',
                            width: '100%',
                            maxWidth: '100%'
                          }}
                        >
                          {competition.title}
                        </h2>
                        <p className="font-['Barlow:Regular',sans-serif] text-[13px] text-left text-[#5C616B]" style={{ lineHeight: '1.5' }}>
                          {competition.endDate}
                        </p>
                      </div>

                      <div className="flex gap-[12px] items-start w-full">
                        <div className="bg-[#f7f7f7] flex flex-col gap-[6px] items-start px-[12px] py-[10px] rounded-[8px] flex-1">
                          <span className="font-['Barlow:Medium',sans-serif] text-[11px] text-left text-[#5C616B] uppercase tracking-[0.84px]">
                            Participants
                          </span>
                          <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[20px] text-left text-black leading-[1]">
                            {competition.participants || 0}
                          </span>
                        </div>
                        {competition.yourRank && (
                          <div className="bg-[#f7f7f7] flex flex-col gap-[6px] items-start px-[12px] py-[10px] rounded-[8px] flex-1">
                            <span className="font-['Barlow:Medium',sans-serif] text-[11px] text-left text-[#5C616B] uppercase tracking-[0.84px]">
                              Your Rank
                            </span>
                            <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[20px] text-left text-black leading-[1]">
                              #{competition.yourRank}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-center w-full">
                        <span className="font-['Barlow:Medium',sans-serif] text-[13px] text-center text-[#5C616B] uppercase tracking-[0.98px]">
                          View Results →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Expanded Competition Detail View
  return (
    <div className="bg-white relative size-full" data-name="Challenges Screen">
      <div className="-translate-x-1/2 absolute bg-[#f7f7f7] content-stretch flex flex-col min-h-screen items-start left-1/2 top-0 w-[1920px]" 
           data-name="Body">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shadow-[0px_30px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" 
             data-name="Header">
          <LauncherHeader className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" />
        </div>
        
        <div className="bg-white content-stretch flex flex-col items-start flex-1 gap-[40px] px-[64px] py-[60px] relative w-full overflow-y-auto" 
             data-name="Challenges Content">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full max-w-[1400px] mx-auto">
            {/* Header Section */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                <h1 className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[64px] text-left text-black uppercase leading-[0.9]">
                  CHALLENGES
                </h1>
                <button 
                  onClick={() => setSelectedCompetition(null)}
                  className="font-['Barlow:Medium',sans-serif] text-[16px] text-left text-[#5C616B] hover:text-[#cd1b32] transition-colors cursor-pointer"
                >
                  ← Back to Competitions
                </button>
              </div>
            </div>

            {/* Competition Card */}
            <div 
              className="bg-white border-2 border-solid content-stretch flex flex-col gap-[32px] items-start px-[48px] py-[40px] relative rounded-[16px] w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]"
              style={{ borderColor: currentCompetition.badgeColor || '#cd1b32' }}
            >
              {/* Competition Header */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <span 
                      className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0"
                      style={{ backgroundColor: currentCompetition.badgeColor || '#22c55e' }}
                    >
                      <span className="font-['Barlow:SemiBold',sans-serif] text-[12px] text-center text-white uppercase tracking-[0.84px]">
                        {currentCompetition.isPersonalBest ? 'PERSONAL' : 'LIVE'}
                      </span>
                    </span>
                    {!currentCompetition.isPersonalBest && currentCompetition.completed === true && (
                      <span 
                        className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0"
                        style={{ backgroundColor: '#10b981' }}
                      >
                        <span className="font-['Barlow:SemiBold',sans-serif] text-[12px] text-center text-white uppercase tracking-[0.84px]">
                          COMPLETED
                        </span>
                      </span>
                    )}
                    <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B]">
                      {currentCompetition.isPersonalBest ? 'Personal Challenge' : currentCompetition.isWeekly ? 'Weekly Competition' : 'Monthly Competition'}
                    </span>
                  </div>
                  <h2 className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[48px] text-left text-black uppercase leading-[0.9]">
                    {currentCompetition.title}
                  </h2>
                  {currentCompetition.subtitle && (
                    <p className="font-['Barlow:Regular',sans-serif] text-[18px] text-left text-[#5C616B] leading-[1.5]">
                      {currentCompetition.subtitle}
                    </p>
                  )}
                  <p className="font-['Barlow:Regular',sans-serif] text-[18px] text-left text-[#5C616B] leading-[1.5]">
                    {currentCompetition.isPersonalBest 
                      ? `Personal Best Challenge • ${currentCompetition.endDate}`
                      : currentCompetition.isWeekly
                      ? `Weekly Competition • Ends in ${currentCompetition.endDate}`
                      : `January 2026 Competition • Ends in ${currentCompetition.endDate}`
                    }
                  </p>
                </div>
              </div>

              {/* Competition Details */}
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                {currentCompetition.hasLeaderboard ? (
                  <>
                    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                      <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                        Participants
                      </span>
                      <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black leading-[0.9]">
                        {currentCompetition.participants || 0}
                      </span>
                    </div>
                    {currentCompetition.yourBest ? (
                      <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                        <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                          Your Best
                        </span>
                        <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black leading-[0.9]">
                          {currentCompetition.yourBest}
                        </span>
                      </div>
                    ) : currentCompetition.hole ? (
                      <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                        <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                          Hole
                        </span>
                        <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black leading-[0.9]">
                          {currentCompetition.hole}
                        </span>
                      </div>
                    ) : null}
                    {currentCompetition.yourRank ? (
                      <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                        <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                          Your Rank
                        </span>
                        <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black leading-[0.9]">
                          #{currentCompetition.yourRank}
                        </span>
                      </div>
                    ) : currentCompetition.yardage ? (
                      <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                        <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                          Yardage
                        </span>
                        <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black leading-[0.9]">
                          {currentCompetition.yardage} yds
                        </span>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                      <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                        Personal Best
                      </span>
                      <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-[#8b5cf6] leading-[0.9]">
                        {currentCompetition.yourBest}
                      </span>
                    </div>
                    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                      <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                        Current Score
                      </span>
                      <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black leading-[0.9]">
                        {currentCompetition.currentScore || currentCompetition.yourBest}
                      </span>
                    </div>
                    <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[20px] relative rounded-[8px] shrink-0 flex-1">
                      <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-left text-[#5C616B] uppercase tracking-[0.98px]">
                        Attempts
                      </span>
                      <span className="font-['Acumin_Pro_ExtraCondensed:Bold_Italic',sans-serif] text-[36px] text-left text-black leading-[0.9]">
                        {currentCompetition.attempts || 0}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Challenge Description - Show if description exists or if no leaderboard */}
              {(!currentCompetition.hasLeaderboard || currentCompetition.description) && (
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <div className="bg-[#f7f7f7] content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[24px] relative rounded-[8px] shrink-0 w-full">
                    <h3 className="font-['Barlow:SemiBold',sans-serif] text-[20px] text-left text-black uppercase tracking-[1.4px]">
                      About This Challenge
                    </h3>
                    {currentCompetition.description ? (
                      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                        <p className="font-['Barlow:Regular',sans-serif] text-[16px] text-left text-[#5C616B] leading-[1.5]">
                          {currentCompetition.description}
                        </p>
                        {currentCompetition.hole && (
                          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                              <span className="font-['Barlow:SemiBold',sans-serif] text-[14px] text-left text-black">
                                Hole:
                              </span>
                              <span className="font-['Barlow:Regular',sans-serif] text-[14px] text-left text-[#5C616B]">
                                {currentCompetition.hole}
                              </span>
                            </div>
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                              <span className="font-['Barlow:SemiBold',sans-serif] text-[14px] text-left text-black">
                                Yardage:
                              </span>
                              <span className="font-['Barlow:Regular',sans-serif] text-[14px] text-left text-[#5C616B]">
                                {currentCompetition.yardage} yards
                              </span>
                            </div>
                            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                              <span className="font-['Barlow:SemiBold',sans-serif] text-[14px] text-left text-black">
                                Shots per Player:
                              </span>
                              <span className="font-['Barlow:Regular',sans-serif] text-[14px] text-left text-[#5C616B]">
                                {currentCompetition.shots}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="font-['Barlow:Regular',sans-serif] text-[16px] text-left text-[#5C616B] leading-[1.5]">
                        Track your Strokes Gained score on a 130 yard green from Target Range. This is a personal challenge to beat your best score. No leaderboard - just you vs. your personal best!
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Leaderboard - Only show if challenge has leaderboard */}
              {currentCompetition.hasLeaderboard && (
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <h3 className="font-['Barlow:SemiBold',sans-serif] text-[24px] text-left text-black uppercase tracking-[1.68px]">
                    Leaderboard
                  </h3>
                  {currentCompetition.leaderboard && currentCompetition.leaderboard.length > 0 ? (
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                      {currentCompetition.leaderboard.map((entry) => (
                      <div 
                        key={entry.rank}
                        className="bg-[#f7f7f7] hover:bg-[#eeeeee] content-stretch flex gap-[24px] items-center px-[24px] py-[16px] relative rounded-[8px] shrink-0 w-full transition-colors"
                      >
                        <div className="content-stretch flex items-center justify-center w-[40px] h-[40px] relative shrink-0">
                          {entry.rank === 1 ? (
                            <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-center text-[#cd1b32]">
                              🏆
                            </span>
                          ) : (
                            <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-center text-[#5C616B]">
                              #{entry.rank}
                            </span>
                          )}
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                          <span className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-left text-black leading-[1.4]">
                            {entry.name}
                          </span>
                          <span className="font-['Barlow:Regular',sans-serif] text-[14px] text-left text-[#5C616B] leading-[1.4]">
                            {entry.date}
                          </span>
                        </div>
                        <div className="content-stretch flex items-center relative shrink-0">
                          <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-left text-[#cd1b32] leading-[1.4]">
                            {entry.distance}
                          </span>
                        </div>
                      </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-[#f7f7f7] content-stretch flex items-center justify-center px-[24px] py-[32px] relative rounded-[8px] shrink-0 w-full">
                      <p className="font-['Barlow:Regular',sans-serif] text-[16px] text-center text-[#5C616B] leading-[1.5]">
                        No entries yet. Be the first to play!
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Action Button - Hide button for all completed challenges */}
              {currentCompetition.completed !== true && (
                <button 
                  onClick={() => currentCompetition.hole && handlePlayChallenge(currentCompetition)}
                  className="bg-[#cd1b32] content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[48px] py-[16px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#b0172a] transition-colors w-full"
                >
                  <span className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-center text-white tracking-[1.26px] uppercase">
                    {currentCompetition.hole ? 'Play!' : currentCompetition.isPersonalBest ? 'Start Challenge' : 'Join Competition'}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
