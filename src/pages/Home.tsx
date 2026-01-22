import { ArrowRight } from 'lucide-react';
import { universes } from '../data/universes';

interface HomeProps {
  onNavigate: (page: string, universeId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Cartes à collectionner<br />& univers pop culture
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Pokémon, One Piece, Magic, Lorcana, Dragon Ball, et bien plus
            </p>
            <button
              onClick={() => {
                const section = document.getElementById('universes');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Découvrir nos univers
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </section>

      <section id="universes" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre univers
            </h2>
            <p className="text-lg text-gray-600">
              Explorez notre collection de cartes à collectionner, boosters et accessoires
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universes.map((universe) => (
              <button
                key={universe.id}
                onClick={() => onNavigate('universe', universe.id)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={universe.image}
                    alt={universe.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${universe.color} opacity-60 group-hover:opacity-50 transition-opacity`}></div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center group-hover:scale-110 transition-transform">
                      {universe.name}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm text-white/90 line-clamp-2">
                    {universe.description.split(':')[0]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authenticité garantie</h3>
              <p className="text-gray-600">Toutes nos cartes sont authentiques et vérifiées</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Large sélection</h3>
              <p className="text-gray-600">Des milliers de cartes et produits disponibles</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Communauté passionnée</h3>
              <p className="text-gray-600">Rejoignez une communauté de collectionneurs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
