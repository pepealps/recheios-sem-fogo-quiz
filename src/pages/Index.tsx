
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import BalanceCounter from '@/components/BalanceCounter';
import Quiz from '@/components/Quiz';
import CountdownTimer from '@/components/CountdownTimer';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<'intro' | 'quiz' | 'offer'>('intro');
  const [balance, setBalance] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const testimonials = [
    {
      name: "Maria Silva",
      photo: "/placeholder-woman.jpg",
      testimonial: "Nunca mais queimei recheio! Aprendi receitas incríveis sem usar o fogão.",
      result: "Economizou 3h por dia"
    },
    {
      name: "Ana Costa",
      photo: "/placeholder-woman2.jpg",
      testimonial: "Comecei a vender brigadeiros gourmet sem estresse de cozinhar!",
      result: "Faturou R$ 2.500 no 1º mês"
    },
    {
      name: "Julia Santos",
      photo: "/placeholder-woman3.jpg",
      testimonial: "Finalmente posso fazer doces sem medo de errar. Muito prático!",
      result: "Ganhou confiança total"
    }
  ];

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
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Lucrativo</h3>
                  <p className="text-gray-600">Receitas aprovadas e que vendem muito</p>
                </Card>
              </div>
            </div>
          </section>

          {/* VSL Section */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Veja como funciona o curso 👇
              </h2>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8">
                <div className="aspect-video flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-xl">Vídeo Explicativo do Curso</p>
                    <p className="text-sm opacity-75 mt-2">Clique para assistir</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">✅ O que você vai aprender:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Brigadeiro gourmet sem fogão</li>
                    <li>• Ganache perfeita no micro-ondas</li>
                    <li>• Doce de leite express</li>
                    <li>• Mousses irresistíveis</li>
                    <li>• Recheios para bolos e tortas</li>
                    <li>• Técnicas de finalização</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Ideal para:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Iniciantes na confeitaria</li>
                    <li>• Quem tem medo de cozinhar</li>
                    <li>• Profissionais que querem agilidade</li>
                    <li>• Mães sem tempo para fogão</li>
                    <li>• Quem quer empreender</li>
                    <li>• Doceiras que querem praticidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Game Introduction */}
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                🎮 Quiz Especial para Você!
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Responda <span className="font-bold text-hot-pink">6 perguntinhas rápidas</span> e 
                GANHE desconto de verdade!
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
                    <div className="text-4xl mb-4">💰</div>
                    <h4 className="font-bold text-lg mb-2">2. Ganhe</h4>
                    <p className="text-gray-600">R$ 12,85 por resposta</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎉</div>
                    <h4 className="font-bold text-lg mb-2">3. Desbloqueie</h4>
                    <p className="text-gray-600">Oferta especial final</p>
                  </div>
                </div>
              </Card>
              
              <div className="bg-gradient-to-r from-hot-pink to-pink-500 text-white rounded-lg p-6 mb-8">
                <p className="text-lg font-semibold mb-2">
                  🎯 Cada resposta te dá R$ 12,85 de desconto
                </p>
                <p className="text-2xl font-bold">
                  No final, você desbloqueia o curso por apenas R$ 19,90!
                </p>
              </div>

              <Button 
                onClick={startQuiz}
                className="bg-neon-green hover:bg-green-500 text-black font-bold text-xl px-12 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-pink"
              >
                🎮 COMEÇAR QUIZ AGORA!
              </Button>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                ❤️ O que nossas alunas dizem
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {currentSection === 'quiz' && (
        <section className="py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🎮 Quiz dos Recheios Sem Fogo
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
              className="bg-neon-green hover:bg-green-500 text-black font-bold text-2xl px-16 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-pink mb-8"
            >
              🔓 QUERO DESBLOQUEAR AGORA MEUS RECHEIOS SEM FOGO
            </Button>

            <CountdownTimer />

            <div className="mt-12">
              <TestimonialCard 
                name="Carla Mendes"
                photo="/placeholder-success.jpg"
                testimonial="Melhor investimento que fiz! Não consigo mais viver sem essas receitas práticas."
                result="5 estrelas ⭐⭐⭐⭐⭐"
              />
            </div>

            <div className="mt-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-xl">Depoimento Final da Aluna</p>
                  <p className="text-sm opacity-75 mt-2">Veja o resultado dela</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
