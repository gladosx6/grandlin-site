import { ArrowRight, Shield, Star, Users, Sparkles } from 'lucide-react';
import { universes } from '../data/universes';

interface HomeProps {
  onNavigate: (page: string, universeId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE zNGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-8 animate-fade-in-up">
              <Sparkles className="h-4 w-4" />
              Votre boutique premium de cartes à collectionner
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up text-shadow-lg" style={{ animationDelay: '0.1s' }}>
              Cartes à collectionner
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                & univers pop culture
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Découvrez une sélection premium de cartes Pokémon, One Piece, Magic, Lorcana, Dragon Ball et bien plus
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => {
                  const section = document.getElementById('universes');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 premium-shadow"
              >
                Découvrir nos univers
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <section id="universes" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
              <Star className="h-4 w-4" />
              Collection Premium
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choisissez votre univers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez notre collection exceptionnelle de cartes à collectionner, boosters exclusifs et accessoires premium
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {universes.map((universe, index) => (
              <button
                key={universe.id}
                onClick={() => onNavigate('universe', universe.id)}
                className="group relative overflow-hidden rounded-3xl premium-shadow hover:premium-shadow-lg transition-all duration-500 transform hover:-translate-y-3 card-shine"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={universe.image}
                    alt={universe.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${universe.color} opacity-70 group-hover:opacity-60 transition-opacity duration-500`}></div>

                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-xs font-bold text-white">
                      #{universe.popularity}
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center text-shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {universe.name}
                    </h3>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-sm font-semibold">Explorer</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm text-white/95 line-clamp-2 leading-relaxed">
                    {universe.description.split(':')[0]}
                  </p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-t-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Authenticité garantie</h3>
                <p className="text-gray-600 leading-relaxed">Toutes nos cartes sont authentiques, vérifiées et certifiées par nos experts</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-t-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sélection premium</h3>
                <p className="text-gray-600 leading-relaxed">Des milliers de cartes rares, boosters exclusifs et produits collector</p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Communauté passionnée</h3>
                <p className="text-gray-600 leading-relaxed">Rejoignez des milliers de collectionneurs partageant votre passion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
