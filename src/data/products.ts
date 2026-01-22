export interface Product {
  id: string;
  name: string;
  type: 'Booster' | 'Coffret' | 'Carte' | 'Accessoire' | 'Starter Deck' | 'Produit Scellé';
  universeId: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'poke-1',
    name: 'Booster Écarlate et Violet',
    type: 'Booster',
    universeId: 'pokemon',
    image: 'https://images.unsplash.com/photo-1606503153255-59d2b10b0d46?w=400&q=80'
  },
  {
    id: 'poke-2',
    name: 'Coffret Dresseur d\'Élite',
    type: 'Coffret',
    universeId: 'pokemon',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80'
  },
  {
    id: 'poke-3',
    name: 'Pikachu VMAX',
    type: 'Carte',
    universeId: 'pokemon',
    image: 'https://images.unsplash.com/photo-1606503153255-59d2b10b0d46?w=400&q=80'
  },
  {
    id: 'poke-4',
    name: 'Protège-Cartes Premium',
    type: 'Accessoire',
    universeId: 'pokemon',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&q=80'
  },
  {
    id: 'poke-5',
    name: 'Booster Paradoxe des Deux',
    type: 'Booster',
    universeId: 'pokemon',
    image: 'https://images.unsplash.com/photo-1606503153255-59d2b10b0d46?w=400&q=80'
  },
  {
    id: 'poke-6',
    name: 'Display Booster 36 Boosters',
    type: 'Produit Scellé',
    universeId: 'pokemon',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80'
  },
  {
    id: 'magic-1',
    name: 'Booster Les Cavernes Oubliées d\'Ixalan',
    type: 'Booster',
    universeId: 'magic',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80'
  },
  {
    id: 'magic-2',
    name: 'Bundle Meurtres au Manoir Karlov',
    type: 'Coffret',
    universeId: 'magic',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80'
  },
  {
    id: 'magic-3',
    name: 'Liliana de la Voile',
    type: 'Carte',
    universeId: 'magic',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80'
  },
  {
    id: 'magic-4',
    name: 'Deck Commander 2024',
    type: 'Starter Deck',
    universeId: 'magic',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80'
  },
  {
    id: 'op-1',
    name: 'Booster Memorial Collection',
    type: 'Booster',
    universeId: 'one-piece',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80'
  },
  {
    id: 'op-2',
    name: 'Starter Deck Monkey D. Luffy',
    type: 'Starter Deck',
    universeId: 'one-piece',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80'
  },
  {
    id: 'lor-1',
    name: 'Booster Le Premier Chapitre',
    type: 'Booster',
    universeId: 'lorcana',
    image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&q=80'
  },
  {
    id: 'lor-2',
    name: 'Starter Deck Elsa',
    type: 'Starter Deck',
    universeId: 'lorcana',
    image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&q=80'
  },
  {
    id: 'db-1',
    name: 'Booster Fusion World',
    type: 'Booster',
    universeId: 'dragon-ball',
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&q=80'
  },
  {
    id: 'db-2',
    name: 'Starter Deck Goku',
    type: 'Starter Deck',
    universeId: 'dragon-ball',
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400&q=80'
  }
];
