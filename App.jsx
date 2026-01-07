import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Zap, Headphones, Globe, Building2, Wallet, Bitcoin, CreditCard } from 'lucide-react';

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        setTimeout(() => scrollToSection(id), 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-5 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Estrategia Sonora</h1>
            <p className="text-blue-700 font-medium text-xs md:text-sm mt-0.5">Campañas Auditivas Inteligentes</p>
          </div>
          <div className="hidden md:flex items-center space-x-5">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-slate-700 hover:text-blue-700 font-medium text-sm"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-slate-700 hover:text-blue-700 font-medium text-sm"
            >
              Pagos
            </button>
            <a href="tel:3112720366" className="flex items-center text-blue-700 font-medium text-sm">
              <Phone className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
              311 272 0366
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-5">
            <span className="inline-block bg-blue-600/80 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Campañas Políticas en Colombia
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">ESTRATEGIA SONORA</h1>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-7"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Mensajes auditivos estratégicos para conectar con el votante
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold py-3 px-7 rounded-lg transition shadow-md hover:shadow-lg"
            >
              Nuestros Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-3 px-7 rounded-lg transition"
            >
              Métodos de Pago
            </button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-2">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      </div>

      {/* Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">¿QUIÉNES SOMOS?</h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-3"></div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
            <p className="text-slate-700 leading-relaxed">
              Estrategia Sonora es un emprendimiento especializado en campañas auditivas para candidatos y movimientos políticos en Colombia, combinando estrategia política, creatividad sonora e inteligencia artificial para ofrecer piezas de alto impacto a menor costo y con mayor rapidez.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              Nuestro enfoque es claro: hacer que el mensaje del candidato se escuche, se recuerde y conecte con el votante.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">¿QUÉ HACEMOS?</h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Headphones, title: "Cuñas radiales", desc: "Para radio nacional y regional" },
              { icon: Globe, title: "Audios digitales", desc: "WhatsApp, redes y mensajería" },
              { icon: Building2, title: "Radio comunitaria", desc: "Piezas para emisoras locales" },
              { icon: Zap, title: "Adaptación territorial", desc: "Por municipio o región" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm border">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">PAQUETES DE SERVICIOS</h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                name: "INICIO",
                price: "$700.000",
                items: ["1 cuña de 30s", "Guion estratégico", "Voz profesional", "Música libre de derechos", "1 ronda de ajustes"],
                ideal: "Campañas locales, concejos, ediles",
                bg: "from-blue-600 to-blue-700"
              },
              {
                name: "PRESENCIA",
                price: "$1.600.000",
                items: ["3 cuñas de 30s", "Guiones diferenciados", "Voces profesionales", "Música por pieza", "2 rondas de ajustes"],
                ideal: "Alcaldías y campañas regionales",
                bg: "from-amber-500 to-amber-600",
                popular: true
              },
              {
                name: "IMPACTO",
                price: "$3.000.000",
                items: ["6 cuñas (20/30s)", "Estrategia integral", "Voces m��ltiples", "Música premium", "Versiones para redes", "Ajustes ilimitados"],
                ideal: "Gobernaciones y Congreso",
                bg: "from-blue-800 to-blue-900"
              }
            ].map((pkg, i) => (
              <div key={i} className={`rounded-xl overflow-hidden ${pkg.popular ? 'ring-2 ring-amber-400 relative' : 'shadow-md'}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    MÁS POPULAR
                  </div>
                )}
                <div className={`bg-gradient-to-r ${pkg.bg} text-white p-5 text-center`}>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div className="mt-2 text-3xl font-bold">{pkg.price}</div>
                  <div className="mt-1 text-blue-100 text-xs">COP</div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 mb-5">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="font-medium text-slate-800 text-xs">Ideal para:</p>
                    <p className="text-slate-600 text-xs">{pkg.ideal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">CONTACTO Y PAGOS</h2>
            <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-slate-900 flex items-center mb-4">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" aria-hidden="true" /> Información
              </h3>
              <div className="space-y-3">
                <div className="flex">
                  <Phone className="h-4 w-4 text-slate-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span><a href="tel:3112720366" className="text-blue-700 hover:underline">+57 311 272 0366</a></span>
                </div>
                <div className="flex">
                  <Mail className="h-4 w-4 text-slate-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span><a href="mailto:estrategiasonora440hz@gmail.com" className="text-blue-700 hover:underline break-all">estrategiasonora440hz@gmail.com</a></span>
                </div>
                <div className="flex">
                  <MapPin className="h-4 w-4 text-slate-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>Villavicencio, Meta — Colombia</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-slate-900 flex items-center mb-4">
                <Wallet className="h-5 w-5 mr-2 text-amber-600" aria-hidden="true" /> Métodos de Pago
              </h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-slate-800 flex items-center">
                    <Bitcoin className="h-4 w-4 mr-1.5 text-orange-500" aria-hidden="true" /> Bitcoin (BTC)
                  </div>
                  <div className="bg-slate-100 p-2 rounded font-mono text-xs mt-1 break-all">
                    3Fe6D52TkxY9scCtaEfLiMPa5j4xrD6sD9
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-slate-800 flex items-center">
                    <CreditCard className="h-4 w-4 mr-1.5 text-gray-600" aria-hidden="true" /> Ethereum (ETH)
                  </div>
                  <div className="bg-slate-100 p-2 rounded font-mono text-xs mt-1 break-all">
                    0x6a885b98aea8fa1c85e147873368cc7127fe7a68
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-slate-800 flex items-center">
                    <CreditCard className="h-4 w-4 mr-1.5 text-blue-600" aria-hidden="true" /> USDC
                  </div>
                  <div className="bg-slate-100 p-2 rounded font-mono text-xs mt-1 break-all">
                    0xb772b544fde89762d28f26f8852e8253e74f3ff6
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-slate-800 flex items-center">
                    <CreditCard className="h-4 w-4 mr-1.5 text-green-600" aria-hidden="true" /> USDT (Solana)
                  </div>
                  <div className="bg-slate-100 p-2 rounded font-mono text-xs mt-1 break-all">
                    BdC1YkfJK9s5orYrFkG4Xc7NLmmNeNS4JgURzHC
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-slate-800 flex items-center">
                    <Building2 className="h-4 w-4 mr-1.5 text-purple-600" aria-hidden="true" /> Nubank
                  </div>
                  <div className="mt-1 space-y-1.5">
                    <div className="bg-slate-100 p-2 rounded">
                      <span className="text-slate-600">Placa:</span> 
                      <span className="ml-1 font-mono bg-slate-200 px-1.5 py-0.5 rounded">ANT538</span>
                    </div>
                    <div className="bg-slate-100 p-2 rounded">
                      <span className="text-slate-600">Llave:</span> 
                      <span className="ml-1 font-mono bg-slate-200 px-1.5 py-0.5 rounded break-all">@ANT538</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-4 rounded-xl">
              <p className="font-bold">Estrategia Sonora</p>
              <p className="text-blue-100 text-sm mt-1">La voz estratégica de tu campaña</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Estrategia Sonora. Todos los derechos reservados.</p>
          <p className="mt-1">Villavicencio, Meta — Colombia</p>
        </div>
      </footer>
    </div>
  );
};

export default App;