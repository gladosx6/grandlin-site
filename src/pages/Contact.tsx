import { Phone, MapPin, Clock, Mail, Sparkles } from 'lucide-react';

export default function Contact() {
  const openingHours = [
    { day: 'Lundi', hours: '10:00 - 19:00' },
    { day: 'Mardi', hours: '10:00 - 19:00' },
    { day: 'Mercredi', hours: '10:00 - 19:00' },
    { day: 'Jeudi', hours: '10:00 - 19:00' },
    { day: 'Vendredi', hours: '10:00 - 19:00' },
    { day: 'Samedi', hours: '10:00 - 18:00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE zNGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white/90 mb-8">
              <Sparkles className="h-4 w-4" />
              Nous sommes là pour vous
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Notre équipe passionnée est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group bg-white rounded-2xl premium-shadow hover:premium-shadow-lg p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl blur-sm opacity-50"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Téléphone
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Appelez-nous pour toute question sur nos produits
                    </p>
                    <a
                      href="tel:+33123456789"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
                    >
                      <Phone className="h-4 w-4" />
                      01 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl premium-shadow hover:premium-shadow-lg p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl blur-sm opacity-50"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Rue des Collectionneurs<br />
                      75001 Paris<br />
                      France
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl premium-shadow hover:premium-shadow-lg p-8 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl blur-sm opacity-50"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Écrivez-nous, nous vous répondrons rapidement
                    </p>
                    <a
                      href="mailto:contact@grandlin.fr"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all transform hover:scale-105"
                    >
                      <Mail className="h-4 w-4" />
                      contact@grandlin.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl premium-shadow p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl blur-sm opacity-50"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center">
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Horaires d'ouverture
                  </h3>
                  <p className="text-gray-600">
                    Venez nous rendre visite en boutique
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {openingHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-semibold text-gray-900">
                      {schedule.day}
                    </span>
                    <span className={`font-medium ${schedule.hours === 'Fermé' ? 'text-red-600' : 'text-gray-700'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-3xl premium-shadow overflow-hidden">
            <div className="aspect-[21/9] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937596!2d2.3412!3d48.8606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du magasin"
              ></iframe>
            </div>
          </div>

          <div className="mt-16 relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 md:p-16 text-center premium-shadow-lg">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE zNGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyczEyIDUuMzczIDEyIDEyLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

            <div className="absolute top-10 right-10 w-48 h-48 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-10"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyan-300 rounded-full mix-blend-overlay filter blur-2xl opacity-20"></div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Une question sur un produit ?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Notre équipe de passionnés est disponible pour vous conseiller et répondre à toutes vos questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33123456789"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 premium-shadow"
                >
                  <Phone className="h-5 w-5" />
                  Appeler le magasin
                </a>
                <a
                  href="mailto:contact@grandlin.fr"
                  className="group inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5" />
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
