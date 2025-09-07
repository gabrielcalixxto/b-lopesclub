'use client';
import AgendamentoModal from "./components/AgendamentoModal";
import { useState } from "react";
export const dynamic = 'force-dynamic';


export default function Home() {

  const [isAgendamentoOpen, setIsAgendamentoOpen] = useState(false);
  const openAgendamento = () => setIsAgendamentoOpen(true);
  const closeAgendamento = () => setIsAgendamentoOpen(false);
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/assets/backgroundhero.jpg"
            alt="Barbearia"
            className="w-full h-screen md:h-full object-cover object-center"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-32">
          <div className="animate-fadeInUp">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight tracking-wide whitespace-nowrap">
              QUALIDADE E EXPERIÊNCIA
            </h1>
            <div>
              <button
                onClick={openAgendamento}
                className="botao-ousado inline-block text-white font-bold py-4 px-12 uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                AGENDE SEU HORÁRIO
              </button>
              <AgendamentoModal isOpen={isAgendamentoOpen} onClose={closeAgendamento} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">NOSSOS SERVIÇOS</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Mais de uma década de experiência com tradições e tendências.
              </p>
              <p className="text-gray-600 leading-relaxed mb-12">
                Oferecemos uma experiência completa com produtos de qualidade e técnicas modernas para todos os estilos ✨
              </p>
              <a
                href="#galeria"
                className="botao-ousado mx-auto lg:mx-0 text-white font-bold py-4 px-12 uppercase tracking-wider transition-all duration-300 transform hover:scale-105 block w-max"
              >
                VER GALERIA
              </a>
            </div>

            <section className="relative">
              <div className="space-y-6 max-w-xl mx-auto relative z-10">
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8">
                      <img src="/assets/maquina.png" alt="Tesoura" className="w-full h-10" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">CORTE</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">35,00</span>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8">
                      <img src="/assets/navalha.png" alt="Tesoura" className="w-full h-10" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">BARBA</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">25,00</span>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8">
                      <img src="/assets/tesoura.png" alt="Tesoura" className="w-full h-10" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">CABELO E BARBA</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">60,00</span>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8">
                      <img src="/assets/barber.png" alt="Tesoura" className="w-full h-10" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">SOMBRANCELHA</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">15,00</span>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8">
                      <img src="/assets/pincel.png" alt="Tesoura" className="w-full h-8" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">PEZINHO</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">10,00</span>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 w-[600px] h-auto">
                <img
                  src="/assets/logooriginal.jpeg"
                  alt="Logo"
                  className="object-contain"
                  width={600}
                  height={600}
                />
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contato" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 mt-8 text-gray-900">NOSSA UNIDADE</h2>
            <p className="text-xl text-gray-600">Localização privilegiada no coração da cidade 🏙️📌</p>
          </div>

          <div className="grid gap-12 items-center text-center lg:text-left lg:grid-cols-2">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  <span className="text-blue-600 text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-lg">Endereço</p>
                    <p className="text-gray-600">
                      Av. 28 de Março, N° 560 - Parque Avenida Pelinca, Campos dos Goytacazes - RJ, 28020-740. Ao Lado do Shopping
                    </p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  <span className="text-blue-600 text-2xl">🕐</span>
                  <div>
                    <p className="font-semibold text-lg">Horário de Funcionamento</p>
                    <p className="text-gray-600">Seg-Sex: 9h às 20h | Sáb: 9h às 17h</p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  <span className="text-blue-600 text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-lg">Telefone</p>
                    <p className="text-gray-600">(22) 99736-4126</p>
                  </div>
                </div>
              </div>

              <button
                onClick={openAgendamento}
                className="botao-ousado inline-block text-white font-bold py-4 px-12 uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                AGENDAR PELO WHATSAPP
              </button>
              <AgendamentoModal isOpen={isAgendamentoOpen} onClose={closeAgendamento} />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <img
                src="/assets/foto-unidade-1.jpeg"
                alt="Interior da Unidade"
                className="w-full h-64 object-cover object-[center_58%] shadow-lg"
                width={400}
                height={192}
              />
              <img
                src="/assets/foto-unidade-2.jpeg"
                alt="Ambiente da Barbearia"
                className="w-full h-64 object-cover object-[center_60%] shadow-lg"
                width={400}
                height={192}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">GALERIA DE CORTES</h2>
          <p className="text-center mb-6 text-gray-600 text-xl">✂️✨ Alguns dos nossos trabalhos recentes ✨✂️</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {['/assets/corte1.png', '/assets/corte2.jpeg', '/assets/corte3.png', '/assets/corte4.png', '/assets/corte5.png', '/assets/corte6.png', '/assets/corte7.png', '/assets/corte8.png'].map((src, i) => (
              <div key={i} className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Galeria ${i + 1}`}
                  className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
}
