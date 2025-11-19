export interface TimelineEvent {
  id: number;
  time: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Airborne' | 'Naval' | 'Land' | 'Planning';
}

export interface EquipmentSpecs {
  weight?: string;
  speed?: string;
  crew?: string;
  armament?: string;
  capacity?: string;
  range?: string;
}

export interface Equipment {
  id: string;
  name: string;
  type: 'Vessel' | 'Tank' | 'Aircraft' | 'Weapon';
  description: string;
  imageUrl: string;
  specs: EquipmentSpecs;
}

export interface BeachInfo {
  id: string;
  name: string;
  codeName: string;
  nations: string[];
  divisions: string[];
  casualties: string;
  description: string;
  objectives: string;
  color: string;
}

export type ViewState = 'timeline' | 'equipment' | 'map' | 'historian';