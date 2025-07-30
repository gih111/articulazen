import React, { useState } from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface QuizProps {
  onComplete: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      title: "❓ Pergunta 1",
      question: "Qual dessas dores ou incômodos você sente com mais frequência no seu dia a dia?",
      subtitle: "(selecione todas que se aplicam)",
      type: "multiple",
      options: [
        "Dor no joelho ao andar ou subir escadas",
        "Dor nas costas ao se abaixar ou levantar",
        "Rigidez ao acordar (principalmente nas mãos ou pernas)",
        "Inchaço nas articulações",
        "Sensação de peso ou travamento nas juntas",
        "Nenhuma dessas"
      ]
    },
    {
      id: 2,
      title: "❓ Pergunta 2",
      question: "Há quanto tempo esse problema tem te incomodado?",
      type: "single",
      options: [
        "Menos de 3 meses",
        "Entre 3 e 12 meses",
        "Há mais de 1 ano",
        "Já faz tanto tempo que nem sei mais…"
      ]
    },
    {
      id: 3,
      title: "❓ Pergunta 3",
      question: "Como isso tem impactado sua qualidade de vida?",
      subtitle: "(selecione todas que se aplicam)",
      type: "multiple",
      options: [
        "Já deixei de fazer atividades simples, como caminhar no parque",
        "Preciso de remédios quase todos os dias",
        "Evito sair de casa por medo da dor",
        "Fico dependente da ajuda de outras pessoas",
        "Tenho dificuldade até para dormir por causa do desconforto"
      ]
    },
    {
      id: 4,
      title: "❓ Pergunta 4",
      question: "Você já tentou alguma dessas soluções?",
      type: "single",
      options: [
        "Remédios anti-inflamatórios",
        "Pomadas ou emplastros",
        "Fisioterapia ou RPG",
        "Massagens ou terapias alternativas",
        "Nenhuma delas",
        "Já tentei de tudo, e nada resolveu completamente"
      ]
    },
    {
      id: 5,
      title: "❓ Pergunta 5",
      question: "Se existisse um protocolo natural, testado por milhares de brasileiros, que alivia dores articulares sem remédios caros... você toparia conhecer?",
      type: "single",
      options: [
        "Sim, quero saber mais",
        "Tenho dúvidas, mas estou curioso",
        "Depende do que for",
        "Não"
      ]
    }
  ];

  const handleOptionSelect = (option: string) => {
    const questionId = currentQuestion;
    const currentAnswers = answers[questionId] || [];
    
    if (questions[currentQuestion].type === 'multiple') {
      if (currentAnswers.includes(option)) {
        setAnswers({
          ...answers,
          [questionId]: currentAnswers.filter(a => a !== option)
        });
      } else {
        setAnswers({
          ...answers,
          [questionId]: [...currentAnswers, option]
        });
      }
    } else {
      setAnswers({
        ...answers,
        [questionId]: [option]
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const canProceed = () => {
    const currentAnswers = answers[currentQuestion] || [];
    return currentAnswers.length > 0;
  };

  const isSelected = (option: string) => {
    const currentAnswers = answers[currentQuestion] || [];
    return currentAnswers.includes(option);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
              ✅ Analisando suas respostas...
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Parece que você está exatamente no perfil das pessoas que mais se beneficiaram com esse protocolo natural.
            </p>
            <p className="text-base text-orange-600 font-semibold mb-8">
              👉 Clique no botão abaixo para entender como funciona o método que já transformou a vida de milhares de brasileiros com dores articulares crônicas.
            </p>
          </div>
          
          <button
            onClick={onComplete}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-all transform hover:scale-105 shadow-lg"
          >
            🟩 Quero saber como funciona o protocolo
            <ChevronRight className="w-5 h-5 ml-2 inline-block" />
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">
            👉 Antes de continuar, queremos entender melhor o seu caso.
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Responda essas 5 perguntas rápidas. Ao final, vamos te mostrar o caminho para uma vida com menos dores e mais liberdade.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-orange-600">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm text-gray-500">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-orange-800 mb-2">
            {currentQ.title}
          </h2>
          <p className="text-lg text-gray-800 mb-2">
            {currentQ.question}
          </p>
          {currentQ.subtitle && (
            <p className="text-sm text-orange-600 font-semibold">
              {currentQ.subtitle}
            </p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                isSelected(option)
                  ? 'border-orange-600 bg-orange-50 text-orange-800'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-25'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  isSelected(option)
                    ? 'border-orange-600 bg-orange-600'
                    : 'border-gray-300'
                }`}>
                  {isSelected(option) && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-sm md:text-base">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`w-full py-4 px-8 rounded-lg font-bold text-lg transition-all ${
            canProceed()
              ? 'bg-orange-600 hover:bg-orange-700 text-white transform hover:scale-105 shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentQuestion < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
          <ChevronRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};