export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Drinks';
  image?: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
}
