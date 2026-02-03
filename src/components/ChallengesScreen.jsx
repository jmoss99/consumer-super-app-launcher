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

  // Mock leaderboard data for Closest to the Pin (Top 25 + more)
  const closestToPinLeaderboard = [
    { rank: 1, name: "Mike Johnson", distance: "2.3 ft", date: "Jan 28" },
    { rank: 2, name: "Sarah Williams", distance: "3.1 ft", date: "Jan 27" },
    { rank: 3, name: "David Chen", distance: "4.5 ft", date: "Jan 26" },
    { rank: 4, name: "Emily Davis", distance: "5.2 ft", date: "Jan 25" },
    { rank: 5, name: "James Wilson", distance: "6.8 ft", date: "Jan 24" },
    { rank: 6, name: "Amanda Foster", distance: "7.1 ft", date: "Jan 24" },
    { rank: 7, name: "Robert Kim", distance: "7.4 ft", date: "Jan 23" },
    { rank: 8, name: "Jennifer Lopez", distance: "7.6 ft", date: "Jan 23" },
    { rank: 9, name: "Michael Scott", distance: "7.8 ft", date: "Jan 22" },
    { rank: 10, name: "Rachel Green", distance: "7.9 ft", date: "Jan 22" },
    { rank: 11, name: "Kevin Hart", distance: "8.0 ft", date: "Jan 21" },
    { rank: 12, name: "Monica Geller", distance: "8.1 ft", date: "Jan 21" },
    { rank: 13, name: "Ross Geller", distance: "8.2 ft", date: "Jan 20" },
    { rank: 14, name: "Chandler Bing", distance: "8.2 ft", date: "Jan 20" },
    { rank: 15, name: "Joey Tribbiani", distance: "8.3 ft", date: "Jan 19" },
    { rank: 16, name: "Phoebe Buffay", distance: "8.3 ft", date: "Jan 19" },
    { rank: 17, name: "Ted Mosby", distance: "8.3 ft", date: "Jan 18" },
    { rank: 18, name: "Marshall Eriksen", distance: "8.4 ft", date: "Jan 18" },
    { rank: 19, name: "Lily Aldrin", distance: "8.4 ft", date: "Jan 17" },
    { rank: 20, name: "Barney Stinson", distance: "8.4 ft", date: "Jan 17" },
    { rank: 21, name: "Robin Scherbatsky", distance: "8.5 ft", date: "Jan 16" },
    { rank: 22, name: "Jim Halpert", distance: "8.5 ft", date: "Jan 16" },
    { rank: 23, name: "Pam Beesly", distance: "8.5 ft", date: "Jan 15" },
    { rank: 24, name: "Dwight Schrute", distance: "8.6 ft", date: "Jan 15" },
    { rank: 25, name: "Angela Martin", distance: "8.6 ft", date: "Jan 14" },
  ];

  // Mock leaderboard data for Long Drive (Top 25 + more)
  const longDriveLeaderboard = [
    { rank: 1, name: "Tom Anderson", distance: "342 yds", date: "Jan 29" },
    { rank: 2, name: "Lisa Martinez", distance: "338 yds", date: "Jan 28" },
    { rank: 3, name: "Chris Brown", distance: "335 yds", date: "Jan 27" },
    { rank: 4, name: "Jessica Taylor", distance: "331 yds", date: "Jan 26" },
    { rank: 5, name: "Ryan Garcia", distance: "328 yds", date: "Jan 25" },
    { rank: 6, name: "Marcus Johnson", distance: "325 yds", date: "Jan 25" },
    { rank: 7, name: "Derek Williams", distance: "323 yds", date: "Jan 24" },
    { rank: 8, name: "Kyle Thompson", distance: "321 yds", date: "Jan 24" },
    { rank: 9, name: "Brandon Lee", distance: "320 yds", date: "Jan 23" },
    { rank: 10, name: "Tyler Davis", distance: "319 yds", date: "Jan 23" },
    { rank: 11, name: "Austin Clark", distance: "318 yds", date: "Jan 22" },
    { rank: 12, name: "Jordan White", distance: "317 yds", date: "Jan 22" },
    { rank: 13, name: "Cameron Harris", distance: "316 yds", date: "Jan 21" },
    { rank: 14, name: "Dylan Moore", distance: "316 yds", date: "Jan 21" },
    { rank: 15, name: "Ethan Jackson", distance: "315 yds", date: "Jan 20" },
    { rank: 16, name: "Logan Martin", distance: "315 yds", date: "Jan 20" },
    { rank: 17, name: "Mason Rodriguez", distance: "314 yds", date: "Jan 19" },
    { rank: 18, name: "Noah Gonzalez", distance: "314 yds", date: "Jan 19" },
    { rank: 19, name: "Owen Hernandez", distance: "313 yds", date: "Jan 18" },
    { rank: 20, name: "Parker Lopez", distance: "313 yds", date: "Jan 18" },
    { rank: 21, name: "Quinn Martinez", distance: "313 yds", date: "Jan 17" },
    { rank: 22, name: "Riley Wilson", distance: "312 yds", date: "Jan 17" },
    { rank: 23, name: "Seth Anderson", distance: "312 yds", date: "Jan 16" },
    { rank: 24, name: "Tristan Thomas", distance: "311 yds", date: "Jan 16" },
    { rank: 25, name: "Victor Jackson", distance: "311 yds", date: "Jan 15" },
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
      notCompleted: true,
      isWeekly: true,
      hole: 16,
      yardage: 145,
      shots: 3,
      description: 'The WM Phoenix Open - Hole 16, 145 yards. Each player gets 3 shots to get closest to the pin.',
      leaderboard: [],
      badgeColor: '#22c55e',
    },
    {
      id: 'closest-to-pin',
      title: 'February Closest To The Pin',
      participants: 247,
      yourBest: '10.3 ft',
      yourRank: 42,
      yourName: 'Ryan Schmidt',
      yourDate: 'Jan 12',
      endDate: 'Feb 28',
      leaderboard: closestToPinLeaderboard,
      hasLeaderboard: true,
      completed: true,
      hideButton: true,
    },
    {
      id: 'long-drive',
      title: 'February Long Drive',
      participants: 189,
      yourBest: '309 yds',
      yourRank: 28,
      yourName: 'Ryan Schmidt',
      yourDate: 'Jan 14',
      endDate: 'Feb 28',
      leaderboard: longDriveLeaderboard,
      hasLeaderboard: true,
      completed: true,
      hideButton: true,
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
      yourName: 'Ryan Schmidt',
      yourDate: 'Jan 20',
      endDate: 'Ended Jan 25',
      hasLeaderboard: true,
      completed: true,
      isPast: true,
      hideButton: true,
      leaderboard: [
        { rank: 1, name: "Alex Thompson", distance: "1.8 ft", date: "Jan 24" },
        { rank: 2, name: "Sarah Miller", distance: "2.1 ft", date: "Jan 23" },
        { rank: 3, name: "Chris Johnson", distance: "2.9 ft", date: "Jan 22" },
        { rank: 4, name: "Emma Watson", distance: "3.0 ft", date: "Jan 22" },
        { rank: 5, name: "Daniel Craig", distance: "3.2 ft", date: "Jan 21" },
        { rank: 6, name: "Olivia Stone", distance: "3.3 ft", date: "Jan 21" },
        { rank: 7, name: "Henry Ford", distance: "3.4 ft", date: "Jan 20" },
        { rank: 8, name: "Grace Kelly", distance: "3.5 ft", date: "Jan 20" },
        { rank: 9, name: "Frank Sinatra", distance: "3.6 ft", date: "Jan 19" },
        { rank: 10, name: "Audrey Hepburn", distance: "3.7 ft", date: "Jan 19" },
        { rank: 11, name: "Clark Gable", distance: "3.8 ft", date: "Jan 18" },
        { rank: 12, name: "Marilyn Monroe", distance: "3.9 ft", date: "Jan 18" },
        { rank: 13, name: "Humphrey Bogart", distance: "4.0 ft", date: "Jan 17" },
        { rank: 14, name: "Lauren Bacall", distance: "4.1 ft", date: "Jan 17" },
        { rank: 15, name: "Ryan Schmidt", distance: "4.2 ft", date: "Jan 20", isUser: true },
        { rank: 16, name: "Cary Grant", distance: "4.3 ft", date: "Jan 16" },
        { rank: 17, name: "Ingrid Bergman", distance: "4.4 ft", date: "Jan 16" },
        { rank: 18, name: "James Stewart", distance: "4.5 ft", date: "Jan 15" },
        { rank: 19, name: "Katharine Hepburn", distance: "4.6 ft", date: "Jan 15" },
        { rank: 20, name: "Spencer Tracy", distance: "4.7 ft", date: "Jan 14" },
        { rank: 21, name: "Bette Davis", distance: "4.8 ft", date: "Jan 14" },
        { rank: 22, name: "Gregory Peck", distance: "4.9 ft", date: "Jan 13" },
        { rank: 23, name: "Joan Crawford", distance: "5.0 ft", date: "Jan 13" },
        { rank: 24, name: "Gary Cooper", distance: "5.1 ft", date: "Jan 12" },
        { rank: 25, name: "Barbara Stanwyck", distance: "5.2 ft", date: "Jan 12" },
      ],
    },
    {
      id: 'new-years-drive',
      title: 'New Years Long Drive',
      participants: 198,
      yourBest: '298 yds',
      yourRank: 45,
      yourName: 'Ryan Schmidt',
      yourDate: 'Jan 3',
      endDate: 'Ended Jan 7',
      hasLeaderboard: true,
      completed: true,
      isPast: true,
      hideButton: true,
      leaderboard: [
        { rank: 1, name: "Mike Davis", distance: "356 yds", date: "Jan 5" },
        { rank: 2, name: "Tom Wilson", distance: "349 yds", date: "Jan 6" },
        { rank: 3, name: "Jake Brown", distance: "341 yds", date: "Jan 4" },
        { rank: 4, name: "Steve Rogers", distance: "338 yds", date: "Jan 4" },
        { rank: 5, name: "Tony Stark", distance: "335 yds", date: "Jan 3" },
        { rank: 6, name: "Bruce Banner", distance: "332 yds", date: "Jan 3" },
        { rank: 7, name: "Thor Odinson", distance: "330 yds", date: "Jan 2" },
        { rank: 8, name: "Peter Parker", distance: "328 yds", date: "Jan 2" },
        { rank: 9, name: "Natasha Romanoff", distance: "326 yds", date: "Jan 1" },
        { rank: 10, name: "Clint Barton", distance: "324 yds", date: "Jan 1" },
        { rank: 11, name: "Scott Lang", distance: "322 yds", date: "Jan 1" },
        { rank: 12, name: "Stephen Strange", distance: "320 yds", date: "Jan 1" },
        { rank: 13, name: "Wanda Maximoff", distance: "318 yds", date: "Jan 2" },
        { rank: 14, name: "Vision Android", distance: "316 yds", date: "Jan 2" },
        { rank: 15, name: "Sam Wilson", distance: "314 yds", date: "Jan 3" },
        { rank: 16, name: "Bucky Barnes", distance: "312 yds", date: "Jan 3" },
        { rank: 17, name: "Carol Danvers", distance: "310 yds", date: "Jan 4" },
        { rank: 18, name: "Nick Fury", distance: "308 yds", date: "Jan 4" },
        { rank: 19, name: "Maria Hill", distance: "306 yds", date: "Jan 5" },
        { rank: 20, name: "Phil Coulson", distance: "304 yds", date: "Jan 5" },
        { rank: 21, name: "Pepper Potts", distance: "302 yds", date: "Jan 6" },
        { rank: 22, name: "Happy Hogan", distance: "301 yds", date: "Jan 6" },
        { rank: 23, name: "Rhodey Rhodes", distance: "300 yds", date: "Jan 7" },
        { rank: 24, name: "Wong Master", distance: "299 yds", date: "Jan 7" },
        { rank: 25, name: "Shuri Princess", distance: "298 yds", date: "Jan 7" },
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
                    {/* Completed/Not Complete Badge - Top Right */}
                    {!competition.isPersonalBest && competition.completed === true && (
                      <span 
                        className="absolute top-[12px] right-[12px] flex items-center justify-center px-[10px] py-[4px] rounded-[4px] z-10"
                        style={{ backgroundColor: '#10b981' }}
                      >
                        <span className="font-['Barlow:SemiBold',sans-serif] text-[11px] text-center text-white uppercase tracking-[0.84px]">
                          COMPLETED
                        </span>
                      </span>
                    )}
                    {competition.notCompleted === true && (
                      <span 
                        className="absolute top-[12px] right-[12px] flex items-center justify-center px-[10px] py-[4px] rounded-[4px] z-10"
                        style={{ backgroundColor: '#ef4444' }}
                      >
                        <span className="font-['Barlow:SemiBold',sans-serif] text-[11px] text-center text-white uppercase tracking-[0.84px]">
                          NOT COMPLETE
                        </span>
                      </span>
                    )}
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
                        {competition.isPersonalBest 
                          ? competition.endDate 
                          : competition.title.includes('February')
                          ? `Ends ${competition.endDate}`
                          : `Ends in ${competition.endDate}`
                        }
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
                        {competition.completed === true ? 'View Leaderboard →' : 'View Details →'}
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
                      {/* Completed Badge - Top Right */}
                      {competition.completed && (
                        <span 
                          className="absolute top-[12px] right-[12px] flex items-center justify-center px-[10px] py-[4px] rounded-[4px] z-10"
                          style={{ backgroundColor: '#10b981' }}
                        >
                          <span className="font-['Barlow:SemiBold',sans-serif] text-[11px] text-center text-white uppercase tracking-[0.84px]">
                            COMPLETED
                          </span>
                        </span>
                      )}
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
                    {currentCompetition.notCompleted === true && (
                      <span 
                        className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0"
                        style={{ backgroundColor: '#ef4444' }}
                      >
                        <span className="font-['Barlow:SemiBold',sans-serif] text-[12px] text-center text-white uppercase tracking-[0.84px]">
                          NOT COMPLETE
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
                      : currentCompetition.title.includes('February')
                      ? `February 2026 Competition • Ends ${currentCompetition.endDate}`
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
                      {/* Show top 25 entries */}
                      {currentCompetition.leaderboard.slice(0, 25).map((entry) => (
                      <div 
                        key={entry.rank}
                        className={`hover:bg-[#eeeeee] content-stretch flex gap-[24px] items-center px-[24px] py-[16px] relative rounded-[8px] shrink-0 w-full transition-colors ${entry.isUser ? 'bg-[#fef3c7] border-2 border-[#f59e0b]' : 'bg-[#f7f7f7]'}`}
                      >
                        <div className="content-stretch flex items-center justify-center w-[40px] h-[40px] relative shrink-0">
                          {entry.rank === 1 ? (
                            <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-center text-[#cd1b32]">
                              🏆
                            </span>
                          ) : entry.rank === 2 ? (
                            <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-center text-[#9ca3af]">
                              🥈
                            </span>
                          ) : entry.rank === 3 ? (
                            <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-center text-[#cd7f32]">
                              🥉
                            </span>
                          ) : (
                            <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-center text-[#5C616B]">
                              #{entry.rank}
                            </span>
                          )}
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                          <span className={`font-['Barlow:SemiBold',sans-serif] text-[18px] text-left leading-[1.4] ${entry.isUser ? 'text-[#b45309]' : 'text-black'}`}>
                            {entry.name} {entry.isUser && '(You)'}
                          </span>
                          <span className="font-['Barlow:Regular',sans-serif] text-[14px] text-left text-[#5C616B] leading-[1.4]">
                            {entry.date}
                          </span>
                        </div>
                        <div className="content-stretch flex items-center relative shrink-0">
                          <span className={`font-['Barlow:Bold',sans-serif] text-[20px] text-left leading-[1.4] ${entry.isUser ? 'text-[#b45309]' : 'text-[#cd1b32]'}`}>
                            {entry.distance}
                          </span>
                        </div>
                      </div>
                      ))}
                      
                      {/* Show user's position if they're outside top 25 */}
                      {currentCompetition.yourRank > 25 && currentCompetition.yourName && (
                        <>
                          {/* Separator */}
                          <div className="content-stretch flex gap-[24px] items-center justify-center px-[24px] py-[12px] relative shrink-0 w-full">
                            <div className="flex-1 h-[1px] bg-[#d1d5db]"></div>
                            <span className="font-['Barlow:Medium',sans-serif] text-[14px] text-center text-[#5C616B]">
                              • • •
                            </span>
                            <div className="flex-1 h-[1px] bg-[#d1d5db]"></div>
                          </div>
                          
                          {/* User's position */}
                          <div 
                            className="bg-[#fef3c7] border-2 border-[#f59e0b] hover:bg-[#fde68a] content-stretch flex gap-[24px] items-center px-[24px] py-[16px] relative rounded-[8px] shrink-0 w-full transition-colors"
                          >
                            <div className="content-stretch flex items-center justify-center w-[40px] h-[40px] relative shrink-0">
                              <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-center text-[#b45309]">
                                #{currentCompetition.yourRank}
                              </span>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                              <span className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-left text-[#b45309] leading-[1.4]">
                                {currentCompetition.yourName} (You)
                              </span>
                              <span className="font-['Barlow:Regular',sans-serif] text-[14px] text-left text-[#5C616B] leading-[1.4]">
                                {currentCompetition.yourDate || 'Your best attempt'}
                              </span>
                            </div>
                            <div className="content-stretch flex flex-col items-end relative shrink-0">
                              <span className="font-['Barlow:Bold',sans-serif] text-[20px] text-left text-[#b45309] leading-[1.4]">
                                {currentCompetition.yourBest}
                              </span>
                              <span className="font-['Barlow:Regular',sans-serif] text-[12px] text-right text-[#5C616B] leading-[1.4]">
                                of {currentCompetition.participants} players
                              </span>
                            </div>
                          </div>
                        </>
                      )}
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

              {/* Action Button - Hide if hideButton is true */}
              {!currentCompetition.hideButton && (
                <button 
                  onClick={() => currentCompetition.hole && handlePlayChallenge(currentCompetition)}
                  className="bg-[#cd1b32] content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[48px] py-[16px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#b0172a] transition-colors w-full"
                >
                  <span className="font-['Barlow:SemiBold',sans-serif] text-[18px] text-center text-white tracking-[1.26px] uppercase">
                    {currentCompetition.hole ? 'Play!' : currentCompetition.isPersonalBest && currentCompetition.id === 'strokes-gained-130yd' ? 'Try Again' : currentCompetition.isPersonalBest ? 'Start Challenge' : 'Join Competition'}
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
