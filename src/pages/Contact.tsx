import { Phone, MapPin, Clock, Mail } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-blue-100">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Téléphone
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Appelez-nous pour toute question
                    </p>
                    <a
                      href="tel:+33123456789"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      01 23 45 67 89
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-600">
                      123 Rue des Collectionneurs<br />
                      75001 Paris<br />
                      France
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Écrivez-nous, nous vous répondrons rapidement
                    </p>
                    <a
                      href="mailto:contact@grandlin.fr"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      contact@grandlin.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Horaires d'ouverture
                  </h3>
                  <p className="text-gray-600">
                    Venez nous rendre visite en boutique
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {openingHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium text-gray-900">
                      {schedule.day}
                    </span>
                    <span className={`${schedule.hours === 'Fermé' ? 'text-red-600' : 'text-gray-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
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

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Une question sur un produit ?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter par téléphone ou email. Notre équipe de passionnés saura vous conseiller sur tous nos produits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Appeler le magasin
              </a>
              <a
                href="mailto:contact@grandlin.fr"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
