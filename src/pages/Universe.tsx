import { ArrowLeft, Package } from 'lucide-react';
import { universes } from '../data/universes';
import { products } from '../data/products';

interface UniverseProps {
  universeId: string;
  onNavigate: (page: string) => void;
}

export default function Universe({ universeId, onNavigate }: UniverseProps) {
  const universe = universes.find(u => u.id === universeId);
  const universeProducts = products.filter(p => p.universeId === universeId);

  if (!universe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Univers non trouvé</h1>
          <button
            onClick={() => onNavigate('home')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const getTypeIcon = (type: string) => {
    return <Package className="h-5 w-5" />;
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Booster':
        return 'bg-gradient-to-r from-pink-500 to-rose-500 text-white';
      case 'Coffret':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'Carte':
        return 'bg-gradient-to-r from-emerald-500 to-green-500 text-white';
      case 'Accessoire':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white';
      case 'Starter Deck':
        return 'bg-gradient-to-r from-red-500 to-rose-500 text-white';
      case 'Produit Scellé':
        return 'bg-gradient-to-r from-slate-600 to-slate-700 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className={`relative bg-gradient-to-br ${universe.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE zNGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <button
            onClick={() => onNavigate('home')}
            className="group inline-flex items-center gap-2 text-white/90 hover:text-white transition-all mb-10 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour aux univers</span>
          </button>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
              {universe.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              {universe.description}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre Collection
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez notre sélection premium de produits {universe.name}
            </p>
          </div>

          {universeProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {universeProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl premium-shadow hover:premium-shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 card-shine"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold shadow-lg ${getTypeBadgeColor(product.type)}`}>
                        {getTypeIcon(product.type)}
                        {product.type}
                      </span>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                          <span>Voir détails</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium text-gray-500">{product.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl premium-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-2xl mb-6">
                <Package className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun produit disponible</h3>
              <p className="text-gray-600">Revenez bientôt pour découvrir nos nouveautés</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-center premium-shadow-lg">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE zNGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

            <div className="absolute top-10 right-10 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-10"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-300 rounded-full mix-blend-overlay filter blur-2xl opacity-20"></div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Besoin d'informations ?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Notre équipe passionnée est à votre disposition pour répondre à toutes vos questions sur nos produits {universe.name}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 premium-shadow"
              >
                Nous contacter
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
