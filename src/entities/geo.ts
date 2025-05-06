type Coordinates = {
  lat: number;
  lon: number;
};

type Address = {
  country: string;
  region?: string;
  area?: string;
  city: string;
  street: string;
  block?: string;
  house?: string;
  flat?: string;
  room?: string;

  coordinates: Coordinates;
};

export type { Address, Coordinates };
