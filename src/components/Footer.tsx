import { Facebook, Instagram, Twitter, Mail, Sparkles } from 'lucide-react';
import { universes } from '../data/universes';

interface FooterProps {
  onNavigate: (page: string, universeId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE zNGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl blur-sm opacity-50 group-hover:blur-md transition-all"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold">GRANDLIN</span>
            </button>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Votre boutique premium spécialisée en cartes à collectionner et univers pop culture. Authenticité garantie et passion au service des collectionneurs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="group">
                <div className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Nos Univers</h3>
            <ul className="space-y-3">
              {universes.slice(0, 5).map((universe) => (
                <li key={universe.id}>
                  <button
                    onClick={() => onNavigate('universe', universe.id)}
                    className="text-gray-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {universe.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Nous contacter
                </button>
              </li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  01 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@grandlin.fr"
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  contact@grandlin.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2024 GRANDLIN. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                Conditions générales
              </button>
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
