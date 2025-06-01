
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BalanceCounter from '@/components/BalanceCounter';
import Quiz from '@/components/Quiz';
import CountdownTimer from '@/components/CountdownTimer';

// Declare global utmify function
declare global {
  interface Window {
    utmify: (event: string) => void;
  }
}

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'intro' | 'quiz' | 'offer'>('intro');
  const [balance, setBalance] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Track pageview when component mounts
  useEffect(() => {
    if (typeof window.utmify === 'function') {
      window.utmify('pageview');
    }
  }, []);

  const addToBalance = () => {
    setIsAnimating(true);
    setBalance(prev => prev + 12.85);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const startQuiz = () => {
    setCurrentSection('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completeQuiz = () => {
    setCurrentSection('offer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePurchase = () => {
    // Track initiatecheckout event
    if (typeof window.utmify === 'function') {
      window.utmify('initiatecheckout');
    }
    window.open('https://www.ggcheckout.com/checkout/v2/d69NaLrbZoJDFs3GeUCX', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-rounded">
      <BalanceCounter balance={balance} isAnimating={isAnimating} />
      
      {currentSection === 'intro' && (
        <>
          {/* Hero Section */}
          <section className="relative py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-cursive text-hot-pink mb-6 animate-slide-up">
                Recheios Sem Fogo
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
                Aprenda a fazer os recheios mais vendidos do Brasil<br />
                <span className="text-hot-pink">SEM precisar ligar o fogão ou forno!</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 border-2 border-hot-pink">
                  <div className="text-4xl mb-4">🔥❌</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Zero Fogão</h3>
                  <p className="text-gray-600">Receitas testadas sem usar fogo ou forno</p>
                </Card>
                <Card className="p-6 border-2 border-hot-pink">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Super Rápido</h3>
                  <p className="text-gray-600">Recheios prontos em até 5 minutos</p>
                </Card>
                <Card className="p-6 border-2 border-hot-pink">
                  <div className="text-4xl mb-4">🧁</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Lucrativo</h3>
                  <p className="text-gray-600">Receitas aprovadas e que vendem muito</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Game Introduction */}
          <section className="py-8 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                🧁 Perguntas Especiais para Você!
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Responda <span className="font-bold text-hot-pink">6 perguntinhas rápidas</span> em apenas <span className="font-bold text-hot-pink">30 segundos</span> e 
                desbloqueie uma oferta especial!
              </p>
              
              <Card className="p-8 border-2 border-hot-pink shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Como funciona:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">❓</div>
                    <h4 className="font-bold text-lg mb-2">1. Responda</h4>
                    <p className="text-gray-600">6 perguntas sobre confeitaria</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🧁</div>
                    <h4 className="font-bold text-lg mb-2">2. Acumule</h4>
                    <p className="text-gray-600">Desconto surpresa a cada resposta</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎉</div>
                    <h4 className="font-bold text-lg mb-2">3. Desbloqueie</h4>
                    <p className="text-gray-600">Oferta especial final</p>
                  </div>
                </div>
              </Card>
              
              <Button 
                onClick={startQuiz}
                className="bg-neon-green hover:bg-green-500 text-black font-bold text-xl px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-pink"
              >
                🧁 COMEÇAR PERGUNTAS AGORA!
              </Button>
            </div>
          </section>
        </>
      )}

      {currentSection === 'quiz' && (
        <section className="py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🧁 Perguntas dos Recheios Sem Fogo
            </h1>
            <p className="text-xl text-gray-600">
              Responda e acumule desconto a cada pergunta!
            </p>
          </div>
          <Quiz onAnswer={addToBalance} onComplete={completeQuiz} />
        </section>
      )}

      {currentSection === 'offer' && (
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              🎉 PARABÉNS!
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              Você desbloqueou R$ 77,10 de desconto!
            </p>
            
            <Card className="p-8 border-4 border-hot-pink shadow-xl mb-8">
              <div className="text-center">
                <div className="text-lg text-gray-600 mb-2 line-through">De R$ 97,00</div>
                <div className="text-5xl font-bold text-neon-green mb-4">
                  Por apenas R$ 19,90
                </div>
                <div className="bg-hot-pink text-white px-4 py-2 rounded-full inline-block font-bold">
                  Economia de R$ 77,10!
                </div>
              </div>
            </Card>

            <Button 
              onClick={handlePurchase}
              className="bg-neon-green hover:bg-green-500 text-black font-bold text-2xl px-16 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-pink mb-8"
            >
              🔓 QUERO DESBLOQUEAR AGORA MEUS RECHEIOS SEM FOGO
            </Button>

            <CountdownTimer />

            <div className="mt-12">
              <img 
                src="https://i.imgur.com/3NxGui4.png" 
                alt="Depoimento da Carla Mendes"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-8"
              />
            </div>

            <div className="mt-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/xVJ3unlES_c"
                title="Depoimento Final da Aluna"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>

            <Button 
              onClick={handlePurchase}
              className="bg-neon-green hover:bg-green-500 text-black font-bold text-xl px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-pink"
            >
              🧁 GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
