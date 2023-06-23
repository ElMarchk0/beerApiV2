interface Beer {
  name: string;
  id: number;
  description: string;
  brand: string;
  ABV: number;
}

interface Review {
  beerId: number;
  rating: string;
  content: string;
  createdAt: Date;
}

export { Beer, Review };
