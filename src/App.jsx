import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      user: input,
      ai: generateAIResponse(input),
    };
    setResponses([newMessage, ...responses]);
    setInput("");
  };

  const generateAIResponse = (text) => {
    const t = text.toLowerCase();

    if (t.includes("устал") || t.includes("нет сил") || t.includes("грустно") || t.includes("плохо")) {
      return "Похоже, тебе нужно немного отдохнуть. Попробуй сделать паузу и отключиться на 10 минут.";
    }

    if (t.includes("тревожно") || t.includes("паника") || t.includes("нервничаю")) {
      return "Сделай дыхательное упражнение: вдох — 4 сек, выдох — 6 сек, 5 раз.";
    }

    if (t.includes("злюсь") || t.includes("раздражает") || t.includes("бесит")) {
      return "Остановись на минуту и сделай глубокий вдох. Иногда просто нужно выговориться.";
    }

    if (t.includes("ничего не хочется") || t.includes("апатия") || t.includes("бессмысленно")) {
      return "Попробуй переключиться на что-то приятное: музыку, чай или короткую прогулку.";
    }

    if (t.includes("не спал") || t.includes("не выспался") || t.includes("плохо спал")) {
      return "Сон — ключ к восстановлению. Если можешь, устрой короткий дневной отдых.";
    }

    if (t.includes("радостно") || t.includes("отлично") || t.includes("круто") || t.includes("супер")) {
      return "Здорово, что у тебя хорошее настроение! Зафиксируй это чувство.";
    }

    const generalTips = [
      "Сделай короткую прогулку без телефона.",
      "Включи спокойную музыку и посиди в тишине 5 минут.",
      "Запиши 3 вещи, за которые ты благодарен сегодня.",
      "Сконцентрируйся на дыхании в течение 1 минуты.",
    ];
    return generalTips[Math.floor(Math.random() * generalTips.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-white p-6 flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-2">NeuroFit</h1>
        <p className="text-gray-600 text-lg">Твой AI-коуч для здоровья и настроения</p>
      </header>

      <main className="max-w-xl w-full bg-white p-8 rounded-3xl shadow-2xl">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Как ты себя чувствуешь?"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-purple-400 transition"
          />
          <button
            onClick={handleSend}
            className="mt-4 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 shadow-md transition duration-300"
          >
            Получить рекомендацию
          </button>
        </div>

        <div className="space-y-4">
          {responses.map((res, index) => (
            <div key={index} className="bg-purple-50 p-5 rounded-2xl shadow-inner">
              <p className="text-sm text-gray-500 mb-1">Ты:</p>
              <p className="mb-2">{res.user}</p>
              <p className="text-sm text-purple-700 font-semibold mb-1">NeuroFit:</p>
              <p>{res.ai}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center mt-16 text-sm text-gray-400">
        NeuroFit © 2025
      </footer>
    </div>
  );
}

export default App;
