import { BeachInfo } from '../types';

export const beachData: BeachInfo[] = [
  {
    id: 'utah',
    name: "Utah Beach",
    codeName: "Utah",
    nations: ["USA"],
    divisions: ["US 4th Infantry Division"],
    casualties: "197 (Lightest of all beaches)",
    description: "The westernmost of the five landing beaches. Added to the invasion plan late to secure the Cotentin Peninsula and the port of Cherbourg.",
    objectives: "Secure the beachhead, link up with airborne troops, and push towards Cherbourg.",
    color: "bg-blue-700"
  },
  {
    id: 'omaha',
    name: "Omaha Beach",
    codeName: "Omaha",
    nations: ["USA"],
    divisions: ["US 1st Infantry Division", "US 29th Infantry Division"],
    casualties: "~2,400 (Heaviest)",
    description: "Known as 'Bloody Omaha'. High bluffs, strong currents, and formidable German defenses made this the deadliest landing zone.",
    objectives: "Link up with British at Gold and Americans at Utah. Establish a beachhead 5 miles deep.",
    color: "bg-red-700"
  },
  {
    id: 'gold',
    name: "Gold Beach",
    codeName: "Gold",
    nations: ["UK"],
    divisions: ["British 50th Infantry Division"],
    casualties: "~400",
    description: "Located in the center of the landing zones. The British faced stiff resistance at Le Hamel but broke through with the help of Hobart's Funnies.",
    objectives: "Capture Bayeux and the Caen-Bayeux road. Link up with Americans at Omaha.",
    color: "bg-yellow-600"
  },
  {
    id: 'juno',
    name: "Juno Beach",
    codeName: "Juno",
    nations: ["Canada"],
    divisions: ["3rd Canadian Infantry Division"],
    casualties: "961 (Heavy initial losses)",
    description: "Heavily mined and defended. The Canadians faced a delay due to tide, leading to landing among obstacles. They made the deepest inland penetration of the day.",
    objectives: "Cut the Caen-Bayeux road, seize Carpiquet airfield, link with Gold and Sword.",
    color: "bg-green-700"
  },
  {
    id: 'sword',
    name: "Sword Beach",
    codeName: "Sword",
    nations: ["UK", "Free France"],
    divisions: ["British 3rd Infantry Division", "Free French Commandos"],
    casualties: "~630",
    description: "The easternmost beach. The primary goal was to shield the flank and capture the strategic city of Caen.",
    objectives: "Capture Caen (ambitious), link with 6th Airborne at Orne River bridges.",
    color: "bg-blue-600"
  }
];