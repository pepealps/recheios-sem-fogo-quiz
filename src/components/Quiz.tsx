
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuizProps {
  onAnswer: () => void;
  onComplete: () => void;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quando você pensa em recheios, o que vem à sua cabeça?",
    options: [
      "Dá muito trabalho, tem que usar fogão 😤",
      "Sempre queimo alguma coisa 😩",
      "Só faço no micro-ondas mesmo"
    ]
  },
  {
    id: 2,
    question: "Você já deixou um recheio talhar no fogo?",
    options: [
      "Várias vezes 😢",
      "Ainda bem que nunca",
      "Nem chego perto do fogão!"
    ]
  },
  {
    id: 3,
    question: "Qual dessas situações mais te irrita na cozinha?",
    options: [
      "Sujar panela de leite condensado 🍯",
      "Queimar o fundo da panela 😡",
      "Ficar mexendo o recheio 30 minutos!"
    ]
  },
  {
    id: 4,
    question: "Se você pudesse fazer um recheio em 5 minutos, sem ligar o fogão, você...",
    options: [
      "Gritava de felicidade! 🎉",
      "Começava a vender hoje mesmo 💰",
      "Me livrava do fogão de uma vez! 🔥"
    ]
  },
  {
    id: 5,
    question: "Você se considera...",
    options: [
      "Iniciante na confeitaria 🌱",
      "Profissional querendo praticidade ⚡",
      "Doceira raiz cansada de ficar no fogão 😴"
    ]
  },
  {
    id: 6,
    question: "Quer ter acesso às receitas mais desejadas do Instagram SEM precisar cozinhar?",
    options: [
      "SIM, quero tudo sem fogo! 🔥❌",
      "Manda essas receitas AGORA! 📱",
      "Só compro se for sem fogão! 💯"
    ]
  }
];

const Quiz = ({ onAnswer, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);

  const playCashRegisterSound = () => {
    // Create audio context for cash register sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a simple cash register "cha-ching" sound
    const createBeep = (frequency: number, duration: number, delay: number = 0) => {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      }, delay);
    };

    // Create the "cha-ching" effect with multiple tones
    createBeep(800, 0.1, 0);
    createBeep(1000, 0.1, 50);
    createBeep(1200, 0.2, 100);
  };

  const handleAnswer = (optionIndex: number) => {
    if (isAnswering) return;
    
    setIsAnswering(true);
    
    // Play cash register sound
    playCashRegisterSound();
    
    onAnswer();

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnswering(false);
      } else {
        onComplete();
      }
    }, 1000);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-700">
            Pergunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-hot-pink font-bold">
            💰 Acumulando desconto...
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-hot-pink to-pink-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Card className="p-8 border-2 border-hot-pink shadow-lg animate-slide-up">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
          {questions[currentQuestion].question}
        </h2>
        
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswering}
              variant="outline"
              className="w-full p-6 text-lg font-semibold border-2 border-hot-pink hover:bg-hot-pink hover:text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            >
              {option}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Quiz;
