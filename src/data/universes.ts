export interface Universe {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  popularity: number;
}

export const universes: Universe[] = [
  {
    id: 'pokemon',
    name: 'Pokémon',
    description: 'Découvrez notre collection complète de cartes Pokémon : boosters, coffrets, cartes à l\'unité et accessoires pour tous les dresseurs.',
    color: 'from-yellow-400 to-red-500',
    image: 'https://images.unsplash.com/photo-1606503153255-59d2b10b0d46?w=800&q=80',
    popularity: 1
  },
  {
    id: 'magic',
    name: 'Magic: The Gathering',
    description: 'Plongez dans l\'univers de Magic avec nos boosters, extensions récentes, cartes rares et produits scellés pour enrichir votre collection.',
    color: 'from-purple-600 to-pink-500',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80',
    popularity: 2
  },
  {
    id: 'one-piece',
    name: 'One Piece Card Game',
    description: 'Rejoignez l\'équipage ! Retrouvez les derniers boosters, starter decks et cartes exclusives du jeu de cartes One Piece.',
    color: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80',
    popularity: 3
  },
  {
    id: 'lorcana',
    name: 'Disney Lorcana',
    description: 'Explorez la magie Disney avec Lorcana : boosters, decks de démarrage et cartes enchantées de vos personnages Disney préférés.',
    color: 'from-blue-400 to-purple-500',
    image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=800&q=80',
    popularity: 4
  },
  {
    id: 'dragon-ball',
    name: 'Dragon Ball Super Card Game',
    description: 'Libérez votre puissance avec notre sélection de cartes Dragon Ball : boosters, starter decks et cartes exclusives pour vos combats épiques.',
    color: 'from-orange-600 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&q=80',
    popularity: 5
  },
  {
    id: 'league-of-legends',
    name: 'Legends of Runeterra',
    description: 'Entrez dans l\'arène avec les cartes inspirées de l\'univers League of Legends : stratégie, action et collection au rendez-vous.',
    color: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    popularity: 6
  }
];
