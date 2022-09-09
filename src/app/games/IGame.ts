export interface IGame {
  id: number;
  name: string;
  description: string;
  tags: string[];
  launchDate: Date;
  publishers: string[];
  developers: string[];
  price: number;
  discount: number;
  reviews: string[];
  rating: number;
}
