import { Equipment } from '../types';

export const equipmentData: Equipment[] = [
  {
    id: "lcvp",
    name: "LCVP (Higgins Boat)",
    type: "Vessel",
    description: "The Landing Craft, Vehicle, Personnel (LCVP) or Higgins boat was used extensively in amphibious landings. Constructed of plywood, this shallow-draft barge could ferry a platoon of 36 men to shore at 9 knots.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LCVP_Normandy_landing.jpg/800px-LCVP_Normandy_landing.jpg",
    specs: {
      speed: "12 knots (max)",
      capacity: "36 troops or 1 vehicle",
      crew: "4 (Coxswain, Engineer, Crewman)",
      armament: "2x .30 cal machine guns"
    }
  },
  {
    id: "lct",
    name: "LCT (Landing Craft Tank)",
    type: "Vessel",
    description: "The Landing Craft Tank was an amphibious assault craft for landing tanks on beachheads. It had a ramp door at the bow.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LCT-202_off_Utah_Beach.jpg/800px-LCT-202_off_Utah_Beach.jpg",
    specs: {
      speed: "10 knots",
      capacity: "4 Medium Tanks or 300 tons cargo",
      crew: "12",
      range: "700 nautical miles"
    }
  },
  {
    id: "lci",
    name: "LCI (Landing Craft Infantry)",
    type: "Vessel",
    description: "A large amphibious ship designed to land some 200 soldiers directly onto a beach via two ramps on either side of the bow.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/LCI%28L%29_Normandy.jpg/800px-LCI%28L%29_Normandy.jpg",
    specs: {
      speed: "16 knots",
      capacity: "200 Infantry",
      crew: "24",
      armament: "5x 20mm Oerlikon cannons"
    }
  },
  {
    id: "sherman",
    name: "M4 Sherman",
    type: "Tank",
    description: "The primary battle tank used by the US and other Western Allies. Reliable and produced in large numbers.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/M4_Sherman_Normandy.jpg/800px-M4_Sherman_Normandy.jpg",
    specs: {
      weight: "30.3 tons",
      speed: "25-30 mph",
      crew: "5",
      armament: "75mm M3 Gun"
    }
  },
  {
    id: "ddtank",
    name: "Sherman DD Tank",
    type: "Tank",
    description: "Duplex Drive 'Donald Duck' tanks. Amphibious modifications of the Sherman tank, fitted with a canvas screen to float.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sherman_DD_Tank_with_screen_lowered.jpg/800px-Sherman_DD_Tank_with_screen_lowered.jpg",
    specs: {
      weight: "33 tons",
      speed: "4 knots (water)",
      crew: "5",
      armament: "75mm Gun"
    }
  },
  {
    id: "spitfire",
    name: "Supermarine Spitfire",
    type: "Aircraft",
    description: "British single-seat fighter aircraft used by the RAF and other Allied countries. Crucial for air superiority.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Spitfire_Mk_IX.jpg/800px-Spitfire_Mk_IX.jpg",
    specs: {
      speed: "370 mph",
      range: "470 miles",
      armament: "2x 20mm cannon, 4x .303 machine guns",
      crew: "1"
    }
  },
  {
    id: "mustang",
    name: "P-51 Mustang",
    type: "Aircraft",
    description: "American long-range, single-seat fighter and fighter-bomber. Escorted bombers and attacked ground targets.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/P-51_Mustang_flight.jpg/800px-P-51_Mustang_flight.jpg",
    specs: {
      speed: "437 mph",
      range: "1,650 miles",
      armament: "6x .50 cal machine guns",
      crew: "1"
    }
  },
  {
    id: "c47",
    name: "C-47 Skytrain",
    type: "Aircraft",
    description: "Military transport aircraft developed from the civilian Douglas DC-3 airliner. Used extensively to drop paratroopers.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/C-47_Dakota_D-Day.jpg/800px-C-47_Dakota_D-Day.jpg",
    specs: {
      speed: "224 mph",
      capacity: "28 Paratroopers",
      range: "1,600 miles",
      crew: "3"
    }
  },
  {
    id: "horsa",
    name: "Airspeed Horsa Glider",
    type: "Aircraft",
    description: "British troop-carrying glider used for air assault. Towed by C-47s or Stirling bombers.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Horsa_Glider.jpg/800px-Horsa_Glider.jpg",
    specs: {
      speed: "100 mph (towed)",
      capacity: "25 troops or a jeep/gun",
      weight: "15,000 lb (loaded)",
      crew: "2 pilots"
    }
  },
  {
    id: "thompson",
    name: "M1A1 Thompson",
    type: "Weapon",
    description: "American submachine gun. Favored by soldiers, paratroopers, officers and NCOs for its firepower.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/M1_Thompson.jpg/800px-M1_Thompson.jpg",
    specs: {
      range: "50m (effective)",
      weight: "10 lbs",
      capacity: "20 or 30 round box magazine",
      armament: ".45 ACP"
    }
  },
  {
    id: "garand",
    name: "M1 Garand",
    type: "Weapon",
    description: "Standard service rifle of the US Armed Forces. Semi-automatic, giving US troops a fire rate advantage.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/M1_Garand_rifle_cal_30.jpg/800px-M1_Garand_rifle_cal_30.jpg",
    specs: {
      range: "500 yards",
      weight: "9.5 lbs",
      capacity: "8-round en-bloc clip",
      armament: ".30-06 Springfield"
    }
  },
  {
    id: "bren",
    name: "Bren Light Machine Gun",
    type: "Weapon",
    description: "The primary light machine gun of Commonwealth forces. Reliable and accurate.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bren_LMG.jpg/800px-Bren_LMG.jpg",
    specs: {
      range: "600 yards",
      weight: "22 lbs",
      capacity: "30-round magazine",
      armament: ".303 British"
    }
  },
  {
    id: "churchill",
    name: "Churchill AVRE",
    type: "Tank",
    description: "Armoured Vehicle Royal Engineers. Fitted with a Petard mortar to destroy bunkers (Hobart's Funnies).",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Churchill_AVRE_mortar.jpg/800px-Churchill_AVRE_mortar.jpg",
    specs: {
      weight: "40 tons",
      speed: "15 mph",
      armament: "290mm Petard Mortar",
      crew: "6"
    }
  },
  {
    id: "lst",
    name: "LST (Landing Ship, Tank)",
    type: "Vessel",
    description: "Massive naval vessel designed to support amphibious operations by carrying tanks, vehicles, cargo, and landing troops directly onto shore.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LST_unloading_Normandy.jpg/800px-LST_unloading_Normandy.jpg",
    specs: {
      speed: "12 knots",
      capacity: "20 tanks, 150 troops",
      range: "6,000 miles",
      crew: "100+"
    }
  },
  {
    id: "flail",
    name: "Sherman Crab (Flail)",
    type: "Tank",
    description: "A Sherman tank modified with a rotating flail to detonate land mines ahead of the tank.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sherman_Crab_flail_tank.jpg/800px-Sherman_Crab_flail_tank.jpg",
    specs: {
      weight: "32 tons",
      speed: "20 mph",
      armament: "75mm Gun + Flail",
      crew: "5"
    }
  },
  {
    id: "gammon",
    name: "Gammon Bomb",
    type: "Weapon",
    description: "No. 82 Grenade. A British hand grenade used by airborne troops and paratroopers. Highly effective against armoured vehicles.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/No_82_Gammon_bomb.jpg/600px-No_82_Gammon_bomb.jpg",
    specs: {
      range: "Thrown distance",
      weight: "Varies (plastic explosive)",
      capacity: "N/A",
      armament: "Explosive charge"
    }
  }
];