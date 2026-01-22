import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { universes } from '../data/universes';

interface FooterProps {
  onNavigate: (page: string, universeId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">GRANDLIN</h3>
            <p className="text-gray-400 text-sm">
              Votre boutique spécialisée en cartes à collectionner et univers pop culture.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nos Univers</h3>
            <ul className="space-y-2">
              {universes.slice(0, 4).map((universe) => (
                <li key={universe.id}>
                  <button
                    onClick={() => onNavigate('universe', universe.id)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {universe.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 GRANDLIN. Tous droits réservés.</p>
          <div className="mt-2">
            <button className="hover:text-white transition-colors">
              Mentions légales
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
