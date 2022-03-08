const PERKS = [
  { key: -1, isKiller: false, name: "Ace_In_The_Hole" },
  { key: -1, isKiller: false, name: "Adrenaline" },
  { key: -1, isKiller: false, name: "Aftercare" },
  { key: -1, isKiller: true, name: "Agitation" },
  { key: -1, isKiller: false, name: "Alert" },
  { key: -1, isKiller: false, name: "AnyMeansNecessary" },
  { key: -1, isKiller: false, name: "Autodidact" },
  { key: -1, isKiller: true, name: "BBQAndChilli" },
  { key: -1, isKiller: false, name: "Babysitter" },
  { key: -1, isKiller: false, name: "Balanced_Landing" },
  { key: -1, isKiller: true, name: "Bamboozle" },
  { key: -1, isKiller: true, name: "BeastOfPrey" },
  { key: -1, isKiller: false, name: "BetterTogether" },
  { key: -1, isKiller: true, name: "Bitter_Murmur" },
  { key: -1, isKiller: true, name: "BloodEcho" },
  { key: -1, isKiller: false, name: "BloodPact" },
  { key: -1, isKiller: true, name: "BloodWarden" },
  { key: -1, isKiller: true, name: "Bloodhound" },
  { key: -1, isKiller: false, name: "BoilOver" },
  { key: -1, isKiller: false, name: "Bond" },
  { key: -1, isKiller: false, name: "BorrowedTime" },
  { key: -1, isKiller: false, name: "Botany_Knowledge" },
  { key: -1, isKiller: false, name: "Breakdown" },
  { key: -1, isKiller: false, name: "Breakout" },
  { key: -1, isKiller: true, name: "Brutal_Strength" },
  { key: -1, isKiller: false, name: "BuckleUp" },
  { key: -1, isKiller: false, name: "BuiltToLast" },
  { key: -1, isKiller: false, name: "Calm_Spirit" },
  { key: -1, isKiller: false, name: "Camaraderie" },
  { key: -1, isKiller: true, name: "CorruptIntervention" },
  { key: -1, isKiller: true, name: "Coulrophobia" },
  { key: -1, isKiller: true, name: "CruelConfinement" },
  { key: -1, isKiller: false, name: "Dance_with_me" },
  { key: -1, isKiller: true, name: "DarkDevotion" },
  { key: -1, isKiller: false, name: "Dark_Sense" },
  { key: -1, isKiller: false, name: "DeadHard" },
  { key: -1, isKiller: true, name: "DeadMansSwitch" },
  { key: -1, isKiller: true, name: "Deathbound" },
  { key: -1, isKiller: false, name: "DecisiveStrike" },
  { key: -1, isKiller: true, name: "Deerstalker" },
  { key: -1, isKiller: false, name: "Deja_Vu" },
  { key: -1, isKiller: false, name: "Deliverance" },
  { key: -1, isKiller: false, name: "DesperateMeasures" },
  { key: -1, isKiller: false, name: "DetectivesHunch" },
  { key: -1, isKiller: true, name: "Discordance" },
  { key: -1, isKiller: false, name: "Distortion" },
  { key: -1, isKiller: true, name: "Distressing" },
  { key: -1, isKiller: false, name: "Diversion" },
  { key: -1, isKiller: true, name: "DragonsGrip" },
  { key: -1, isKiller: true, name: "Dying_Light" },
  { key: -1, isKiller: false, name: "Empathy" },
  { key: -1, isKiller: true, name: "Enduring" },
  { key: -1, isKiller: true, name: "FireUp" },
  { key: -1, isKiller: false, name: "Fixated" },
  { key: -1, isKiller: false, name: "FlipFlop" },
  { key: -1, isKiller: false, name: "ForThePeople" },
  { key: -1, isKiller: true, name: "ForcedPenance" },
  { key: -1, isKiller: true, name: "FranklinsLoss" },
  { key: -1, isKiller: true, name: "FurtiveChase" },
  { key: -1, isKiller: true, name: "Gearhead" },
  { key: -1, isKiller: true, name: "GeneratorOvercharge" },
  { key: -1, isKiller: true, name: "HangmansTrick" },
  { key: -1, isKiller: false, name: "HeadOn" },
  { key: -1, isKiller: true, name: "HexBloodFavor" },
  { key: -1, isKiller: true, name: "HexRetribution" },
  { key: -1, isKiller: true, name: "HexUndying" },
  { key: -1, isKiller: true, name: "Hex_Devour_Hope" },
  { key: -1, isKiller: true, name: "Hex_HauntedGround" },
  { key: -1, isKiller: true, name: "Hex_HuntressLullaby" },
  { key: -1, isKiller: true, name: "Hex_Ruin" },
  { key: -1, isKiller: true, name: "Hex_The_Third_Seal" },
  { key: -1, isKiller: true, name: "Hex_Thrill_Of_The_Hunt" },
  { key: -1, isKiller: false, name: "Hope" },
  { key: -1, isKiller: true, name: "ImAllEars" },
  { key: -1, isKiller: true, name: "InTheDark" },
  { key: -1, isKiller: true, name: "InfectiousFright" },
  { key: -1, isKiller: false, name: "InnerStrength" },
  { key: -1, isKiller: true, name: "Insidious" },
  { key: -1, isKiller: true, name: "IronMaiden" },
  { key: -1, isKiller: true, name: "Iron_Grasp" },
  { key: -1, isKiller: false, name: "Iron_Will" },
  { key: -1, isKiller: true, name: "K22P01" },
  { key: -1, isKiller: true, name: "K22P02" },
  { key: -1, isKiller: true, name: "K22P03" },
  { key: -1, isKiller: true, name: "K23P01" },
  { key: -1, isKiller: true, name: "K23P02" },
  { key: -1, isKiller: true, name: "K23P03" },
  { key: -1, isKiller: true, name: "K24P01" },
  { key: -1, isKiller: true, name: "K24P02" },
  { key: -1, isKiller: true, name: "K24P03" },
  { key: -1, isKiller: true, name: "K25P01" },
  { key: -1, isKiller: true, name: "K25P02" },
  { key: -1, isKiller: true, name: "K25P03" },
  { key: -1, isKiller: true, name: "K26P01" },
  { key: -1, isKiller: true, name: "K26P02" },
  { key: -1, isKiller: true, name: "K26P03" },
  { key: -1, isKiller: false, name: "Kindred" },
  { key: -1, isKiller: false, name: "Leader" },
  { key: -1, isKiller: false, name: "LeftBehind" },
  { key: -1, isKiller: true, name: "Lightborn" },
  { key: -1, isKiller: false, name: "Lightweight" },
  { key: -1, isKiller: false, name: "Lithe" },
  { key: -1, isKiller: false, name: "LuckyBreak" },
  { key: -1, isKiller: true, name: "MadGrit" },
  { key: -1, isKiller: true, name: "MakeYourChoice" },
  { key: -1, isKiller: true, name: "Mindbreaker" },
  { key: -1, isKiller: true, name: "MonitorAndAbuse" },
  { key: -1, isKiller: true, name: "Monstrous_Shrine" },
  { key: -1, isKiller: true, name: "Nemesis" },
  { key: -1, isKiller: false, name: "NoMither" },
  { key: -1, isKiller: true, name: "No_One_Escapes_Death" },
  { key: -1, isKiller: false, name: "No_One_Left_Behind" },
  { key: -1, isKiller: true, name: "NurseCalling" },
  { key: -1, isKiller: false, name: "ObjectOfObsession" },
  { key: -1, isKiller: false, name: "OffTheRecord" },
  { key: -1, isKiller: false, name: "Open_Handed" },
  { key: -1, isKiller: true, name: "OverwhelmingPresence" },
  { key: -1, isKiller: false, name: "Pharmacy" },
  { key: -1, isKiller: true, name: "Play_With_Your_Food" },
  { key: -1, isKiller: false, name: "Plunderers_Instinct" },
  { key: -1, isKiller: false, name: "Poised" },
  { key: -1, isKiller: true, name: "Predator" },
  { key: -1, isKiller: false, name: "Premonition" },
  { key: -1, isKiller: false, name: "Prove_Thyself" },
  { key: -1, isKiller: false, name: "QuickQuiet" },
  { key: -1, isKiller: true, name: "Rancor" },
  { key: -1, isKiller: false, name: "RedHerring" },
  { key: -1, isKiller: true, name: "RememberMe" },
  { key: -1, isKiller: false, name: "RepressedAlliance" },
  { key: -1, isKiller: false, name: "Resilience" },
  { key: -1, isKiller: false, name: "S24P01" },
  { key: -1, isKiller: false, name: "S24P02" },
  { key: -1, isKiller: false, name: "S24P03" },
  { key: -1, isKiller: false, name: "S25P01" },
  { key: -1, isKiller: false, name: "S25P02" },
  { key: -1, isKiller: false, name: "S25P03" },
  { key: -1, isKiller: false, name: "S26P01" },
  { key: -1, isKiller: false, name: "S26P02" },
  { key: -1, isKiller: false, name: "S26P03" },
  { key: -1, isKiller: false, name: "S27P01" },
  { key: -1, isKiller: false, name: "S27P02" },
  { key: -1, isKiller: false, name: "S27P03" },
  { key: -1, isKiller: false, name: "S28P01" },
  { key: -1, isKiller: false, name: "S28P02" },
  { key: -1, isKiller: false, name: "S28P03" },
  { key: -1, isKiller: false, name: "S29P01" },
  { key: -1, isKiller: false, name: "S29P02" },
  { key: -1, isKiller: false, name: "S29P03" },
  { key: -1, isKiller: false, name: "Saboteur" },
  { key: -1, isKiller: true, name: "Save_The_Best_For_Last" },
  { key: -1, isKiller: false, name: "SecondWind" },
  { key: -1, isKiller: false, name: "SelfSufficient" },
  { key: -1, isKiller: false, name: "Self_Care" },
  { key: -1, isKiller: true, name: "Shadowborn" },
  { key: -1, isKiller: false, name: "Slippery_Meat" },
  { key: -1, isKiller: true, name: "Sloppy_Butcher" },
  { key: -1, isKiller: false, name: "Small_Game" },
  { key: -1, isKiller: false, name: "SoleSurvivor" },
  { key: -1, isKiller: false, name: "Solidarity" },
  { key: -1, isKiller: false, name: "SoulGuard" },
  { key: -1, isKiller: true, name: "Spies_From_The_Shadows" },
  { key: -1, isKiller: false, name: "Spine_Chill" },
  { key: -1, isKiller: true, name: "SpiritFury" },
  { key: -1, isKiller: false, name: "Sprint_Burst" },
  { key: -1, isKiller: false, name: "StakeOut" },
  { key: -1, isKiller: false, name: "Streetwise" },
  { key: -1, isKiller: true, name: "Stridor" },
  { key: -1, isKiller: true, name: "Surge" },
  { key: -1, isKiller: true, name: "Surveillance" },
  { key: -1, isKiller: false, name: "Technician" },
  { key: -1, isKiller: false, name: "Tenacity" },
  { key: -1, isKiller: true, name: "TerritorialImperative" },
  { key: -1, isKiller: true, name: "Thanatophobia" },
  { key: -1, isKiller: false, name: "TheMettleOfMan" },
  { key: -1, isKiller: false, name: "This_Is_Not_Happening" },
  { key: -1, isKiller: true, name: "ThrillingTremors" },
  { key: -1, isKiller: true, name: "Tinkerer" },
  { key: -1, isKiller: true, name: "TrailofTorment" },
  { key: -1, isKiller: true, name: "Unnerving_Presence" },
  { key: -1, isKiller: true, name: "Unrelenting" },
  { key: -1, isKiller: false, name: "Up_The_Ante" },
  { key: -1, isKiller: false, name: "Urban_Evasion" },
  { key: -1, isKiller: false, name: "Vigil" },
  { key: -1, isKiller: false, name: "Visionary" },
  { key: -1, isKiller: false, name: "WakeUp" },
  { key: -1, isKiller: false, name: "WellMakeIt" },
  { key: -1, isKiller: false, name: "WereGonnaLiveForever" },
  { key: -1, isKiller: true, name: "Whispers" },
  { key: -1, isKiller: false, name: "WindowsOfOpportunity" },
  { key: -1, isKiller: true, name: "ZanshinTactics" },
  { key: -1, isKiller: true, name: "pop_goes_the_weasel" },
  { key: -1, isKiller: false, name: "S30P01" },
  { key: -1, isKiller: false, name: "S30P02" },
  { key: -1, isKiller: false, name: "S30P03" },
  { key: -1, isKiller: true, name: "K27P01" },
  { key: -1, isKiller: true, name: "K27P02" },
  { key: -1, isKiller: true, name: "K27P03" },
  { key: 0, isKiller: false, name: "Bond_TEACH_" },
  { key: 0, isKiller: false, name: "Leader_TEACH_" },
  { key: 0, isKiller: false, name: "Prove_Thyself_TEACH_" },
  { key: 1, isKiller: false, name: "Adrenaline_TEACH_" },
  { key: 1, isKiller: false, name: "QuickQuiet_TEACH_" },
  { key: 1, isKiller: false, name: "Sprint_Burst_TEACH_" },
  { key: 2, isKiller: false, name: "Botany_Knowledge_TEACH_" },
  { key: 2, isKiller: false, name: "Empathy_TEACH_" },
  { key: 2, isKiller: false, name: "Self_Care_TEACH_" },
  { key: 3, isKiller: false, name: "Calm_Spirit_TEACH_" },
  { key: 3, isKiller: false, name: "Iron_Will_TEACH_" },
  { key: 3, isKiller: false, name: "Saboteur_TEACH_" },
  { key: 4, isKiller: false, name: "Balanced_Landing_TEACH_" },
  { key: 4, isKiller: false, name: "Streetwise_TEACH_" },
  { key: 4, isKiller: false, name: "Urban_Evasion_TEACH_" },
  { key: 5, isKiller: false, name: "DecisiveStrike_TEACH_" },
  { key: 5, isKiller: false, name: "ObjectOfObsession_TEACH_" },
  { key: 5, isKiller: false, name: "SoleSurvivor_TEACH_" },
  { key: 6, isKiller: false, name: "Ace_In_The_Hole_TEACH_" },
  { key: 6, isKiller: false, name: "Open_Handed_TEACH_" },
  { key: 6, isKiller: false, name: "Up_The_Ante_TEACH_" },
  { key: 7, isKiller: false, name: "BorrowedTime_TEACH_" },
  { key: 7, isKiller: false, name: "LeftBehind_TEACH_" },
  { key: 7, isKiller: false, name: "SelfSufficient_TEACH_" },
  { key: 8, isKiller: false, name: "Alert_TEACH_" },
  { key: 8, isKiller: false, name: "Lithe_TEACH_" },
  { key: 8, isKiller: false, name: "Technician_TEACH_" },
  { key: 9, isKiller: false, name: "DeadHard_TEACH_" },
  { key: 9, isKiller: false, name: "NoMither_TEACH_" },
  { key: 9, isKiller: false, name: "WereGonnaLiveForever_TEACH_" },
  { key: 10, isKiller: false, name: "BoilOver_TEACH_" },
  { key: 10, isKiller: false, name: "Dance_with_me_TEACH_" },
  { key: 10, isKiller: false, name: "WindowsOfOpportunity_TEACH_" },
  { key: 11, isKiller: false, name: "Pharmacy_TEACH_" },
  { key: 11, isKiller: false, name: "Vigil_TEACH_" },
  { key: 11, isKiller: false, name: "WakeUp_TEACH_" },
  { key: 12, isKiller: false, name: "DetectivesHunch_TEACH_" },
  { key: 12, isKiller: false, name: "StakeOut_TEACH_" },
  { key: 12, isKiller: false, name: "Tenacity_TEACH_" },
  { key: 13, isKiller: false, name: "Autodidact_TEACH_" },
  { key: 13, isKiller: false, name: "Deliverance_TEACH_" },
  { key: 13, isKiller: false, name: "Diversion_TEACH_" },
  { key: 14, isKiller: false, name: "Aftercare_TEACH_" },
  { key: 14, isKiller: false, name: "Breakdown_TEACH_" },
  { key: 14, isKiller: false, name: "Distortion_TEACH_" },
  { key: 15, isKiller: false, name: "HeadOn_TEACH_" },
  { key: 15, isKiller: false, name: "Poised_TEACH_" },
  { key: 15, isKiller: false, name: "Solidarity_TEACH_" },
  { key: 16, isKiller: false, name: "BuckleUp_TEACH_" },
  { key: 16, isKiller: false, name: "FlipFlop_TEACH_" },
  { key: 16, isKiller: false, name: "TheMettleOfMan_TEACH_" },
  { key: 17, isKiller: false, name: "BetterTogether_TEACH_" },
  { key: 17, isKiller: false, name: "Fixated_TEACH_" },
  { key: 17, isKiller: false, name: "InnerStrength_TEACH_" },
  { key: 18, isKiller: false, name: "Babysitter_TEACH_" },
  { key: 18, isKiller: false, name: "Camaraderie_TEACH_" },
  { key: 18, isKiller: false, name: "SecondWind_TEACH_" },
  { key: 19, isKiller: false, name: "AnyMeansNecessary_TEACH_" },
  { key: 19, isKiller: false, name: "Breakout_TEACH_" },
  { key: 19, isKiller: false, name: "LuckyBreak_TEACH_" },
  { key: 20, isKiller: false, name: "ForThePeople_TEACH_" },
  { key: 20, isKiller: false, name: "OffTheRecord_TEACH_" },
  { key: 20, isKiller: false, name: "RedHerring_TEACH_" },
  { key: 21, isKiller: false, name: "BloodPact_TEACH_" },
  { key: 21, isKiller: false, name: "RepressedAlliance_TEACH_" },
  { key: 21, isKiller: false, name: "SoulGuard_TEACH_" },
  { key: 22, isKiller: false, name: "BuiltToLast_TEACH_" },
  { key: 22, isKiller: false, name: "DesperateMeasures_TEACH_" },
  { key: 22, isKiller: false, name: "Visionary_TEACH_" },
  { key: 23, isKiller: false, name: "S24P01_TEACH_" },
  { key: 23, isKiller: false, name: "S24P02_TEACH_" },
  { key: 23, isKiller: false, name: "S24P03_TEACH_" },
  { key: 24, isKiller: false, name: "S25P01_TEACH_" },
  { key: 24, isKiller: false, name: "S25P02_TEACH_" },
  { key: 24, isKiller: false, name: "S25P03_TEACH_" },
  { key: 25, isKiller: false, name: "S26P01_TEACH_" },
  { key: 25, isKiller: false, name: "S26P02_TEACH_" },
  { key: 25, isKiller: false, name: "S26P03_TEACH_" },
  { key: 26, isKiller: false, name: "S27P01_TEACH_" },
  { key: 26, isKiller: false, name: "S27P02_TEACH_" },
  { key: 26, isKiller: false, name: "S27P03_TEACH_" },
  { key: 27, isKiller: false, name: "S28P01_TEACH_" },
  { key: 27, isKiller: false, name: "S28P02_TEACH_" },
  { key: 27, isKiller: false, name: "S28P03_TEACH_" },
  { key: 28, isKiller: false, name: "S29P01_TEACH_" },
  { key: 28, isKiller: false, name: "S29P02_TEACH_" },
  { key: 28, isKiller: false, name: "S29P03_TEACH_" },
  { key: 29, isKiller: false, name: "S30P01_TEACH_" },
  { key: 29, isKiller: false, name: "S30P02_TEACH_" },
  { key: 29, isKiller: false, name: "S30P03_TEACH_" },
  { key: 268435456, isKiller: true, name: "Agitation_TEACH_" },
  { key: 268435456, isKiller: true, name: "Brutal_Strength_TEACH_" },
  { key: 268435456, isKiller: true, name: "Unnerving_Presence_TEACH_" },
  { key: 268435457, isKiller: true, name: "Bloodhound_TEACH_" },
  { key: 268435457, isKiller: true, name: "Predator_TEACH_" },
  { key: 268435457, isKiller: true, name: "Shadowborn_TEACH_" },
  { key: 268435458, isKiller: true, name: "Enduring_TEACH_" },
  { key: 268435458, isKiller: true, name: "Lightborn_TEACH_" },
  { key: 268435458, isKiller: true, name: "Tinkerer_TEACH_" },
  { key: 268435459, isKiller: true, name: "NurseCalling_TEACH_" },
  { key: 268435459, isKiller: true, name: "Stridor_TEACH_" },
  { key: 268435459, isKiller: true, name: "Thanatophobia_TEACH_" },
  { key: 268435460, isKiller: true, name: "Hex_Devour_Hope_TEACH_" },
  { key: 268435460, isKiller: true, name: "Hex_Ruin_TEACH_" },
  { key: 268435460, isKiller: true, name: "Hex_The_Third_Seal_TEACH_" },
  { key: 268435461, isKiller: true, name: "Dying_Light_TEACH_" },
  { key: 268435461, isKiller: true, name: "Play_With_Your_Food_TEACH_" },
  { key: 268435461, isKiller: true, name: "Save_The_Best_For_Last_TEACH_" },
  { key: 268435462, isKiller: true, name: "GeneratorOvercharge_TEACH_" },
  { key: 268435462, isKiller: true, name: "MonitorAndAbuse_TEACH_" },
  { key: 268435462, isKiller: true, name: "OverwhelmingPresence_TEACH_" },
  { key: 268435463, isKiller: true, name: "BeastOfPrey_TEACH_" },
  { key: 268435463, isKiller: true, name: "Hex_HuntressLullaby_TEACH_" },
  { key: 268435463, isKiller: true, name: "TerritorialImperative_TEACH_" },
  { key: 268435464, isKiller: true, name: "BBQAndChilli_TEACH_" },
  { key: 268435464, isKiller: true, name: "FranklinsLoss_TEACH_" },
  { key: 268435464, isKiller: true, name: "InTheDark_TEACH_" },
  { key: 268435465, isKiller: true, name: "BloodWarden_TEACH_" },
  { key: 268435465, isKiller: true, name: "FireUp_TEACH_" },
  { key: 268435465, isKiller: true, name: "RememberMe_TEACH_" },
  { key: 268435466, isKiller: true, name: "HangmansTrick_TEACH_" },
  { key: 268435466, isKiller: true, name: "MakeYourChoice_TEACH_" },
  { key: 268435466, isKiller: true, name: "Surveillance_TEACH_" },
  { key: 268435467, isKiller: true, name: "Bamboozle_TEACH_" },
  { key: 268435467, isKiller: true, name: "Coulrophobia_TEACH_" },
  { key: 268435467, isKiller: true, name: "pop_goes_the_weasel_TEACH_" },
  { key: 268435468, isKiller: true, name: "Hex_HauntedGround_TEACH_" },
  { key: 268435468, isKiller: true, name: "Rancor_TEACH_" },
  { key: 268435468, isKiller: true, name: "SpiritFury_TEACH_" },
  { key: 268435469, isKiller: true, name: "Discordance_TEACH_" },
  { key: 268435469, isKiller: true, name: "Ironmaiden_TEACH_" },
  { key: 268435469, isKiller: true, name: "Madgrit_TEACH_" },
  { key: 268435470, isKiller: true, name: "CorruptIntervention_TEACH_" },
  { key: 268435470, isKiller: true, name: "DarkDevotion_TEACH_" },
  { key: 268435470, isKiller: true, name: "InfectiousFright_TEACH_" },
  { key: 268435471, isKiller: true, name: "FurtiveChase_TEACH_" },
  { key: 268435471, isKiller: true, name: "ImAllEars_TEACH_" },
  { key: 268435471, isKiller: true, name: "ThrillingTremors_TEACH_" },
  { key: 268435472, isKiller: true, name: "CruelConfinement_TEACH_" },
  { key: 268435472, isKiller: true, name: "Mindbreaker_TEACH_" },
  { key: 268435472, isKiller: true, name: "Surge_TEACH_" },
  { key: 268435473, isKiller: true, name: "BloodEcho_TEACH_" },
  { key: 268435473, isKiller: true, name: "Nemesis_TEACH_" },
  { key: 268435473, isKiller: true, name: "ZanshinTactics_TEACH_" },
  { key: 268435474, isKiller: true, name: "DeadMansSwitch_TEACH_" },
  { key: 268435474, isKiller: true, name: "Gearhead_TEACH_" },
  { key: 268435474, isKiller: true, name: "HexRetribution_TEACH_" },
  { key: 268435475, isKiller: true, name: "Deathbound_TEACH_" },
  { key: 268435475, isKiller: true, name: "ForcedPenance_TEACH_" },
  { key: 268435475, isKiller: true, name: "TrailofTorment_TEACH_" },
  { key: 268435476, isKiller: true, name: "DragonsGrip_TEACH_" },
  { key: 268435476, isKiller: true, name: "HexBloodFavor_TEACH_" },
  { key: 268435476, isKiller: true, name: "HexUndying_TEACH_" },
  { key: 268435477, isKiller: true, name: "K22P01_TEACH_" },
  { key: 268435477, isKiller: true, name: "K22P02_TEACH_" },
  { key: 268435477, isKiller: true, name: "K22P03_TEACH_" },
  { key: 268435478, isKiller: true, name: "K23P01_TEACH_" },
  { key: 268435478, isKiller: true, name: "K23P02_TEACH_" },
  { key: 268435478, isKiller: true, name: "K23P03_TEACH_" },
  { key: 268435479, isKiller: true, name: "K24P01_TEACH_" },
  { key: 268435479, isKiller: true, name: "K24P02_TEACH_" },
  { key: 268435479, isKiller: true, name: "K24P03_TEACH_" },
  { key: 268435480, isKiller: true, name: "K25P01_TEACH_" },
  { key: 268435480, isKiller: true, name: "K25P02_TEACH_" },
  { key: 268435480, isKiller: true, name: "K25P03_TEACH_" },
  { key: 268435481, isKiller: true, name: "K26P01_TEACH_" },
  { key: 268435481, isKiller: true, name: "K26P02_TEACH_" },
  { key: 268435481, isKiller: true, name: "K26P03_TEACH_" },
  { key: 268435482, isKiller: true, name: "K27P01_TEACH_" },
  { key: 268435482, isKiller: true, name: "K27P02_TEACH_" },
  { key: 268435482, isKiller: true, name: "K27P03_TEACH_" },
]
