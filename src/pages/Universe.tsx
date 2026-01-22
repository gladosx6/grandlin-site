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
        return 'bg-purple-100 text-purple-800';
      case 'Coffret':
        return 'bg-blue-100 text-blue-800';
      case 'Carte':
        return 'bg-green-100 text-green-800';
      case 'Accessoire':
        return 'bg-yellow-100 text-yellow-800';
      case 'Starter Deck':
        return 'bg-red-100 text-red-800';
      case 'Produit Scellé':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className={`relative bg-gradient-to-br ${universe.color} text-white`}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            Retour aux univers
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Univers {universe.name}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {universe.description}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Notre Collection
            </h2>
            <p className="text-gray-600">
              Découvrez notre sélection de produits {universe.name}
            </p>
          </div>

          {universeProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {universeProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(product.type)}`}>
                        {getTypeIcon(product.type)}
                        {product.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{product.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Aucun produit disponible pour le moment</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Besoin d'informations ?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur nos produits {universe.name}.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
