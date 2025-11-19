import React, { useState, useRef, useEffect } from 'react';
import { askHistorian } from '../services/geminiService';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: "Greetings. I am the Archives Officer. I have access to the classified files of Operation Overlord. What intelligence do you require regarding the invasion?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const answer = await askHistorian(input);
    
    const aiMsg: Message = { id: Date.now() + 1, text: answer, sender: 'ai' };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto w-full h-[600px] bg-stone-900 rounded-lg border border-stone-700 shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-stone-800 p-4 border-b border-stone-700 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center border border-stone-500">
          <Bot size={20} className="text-amber-500" />
        </div>
        <div>
          <h3 className="text-stone-200 font-serif font-bold">Archives Officer</h3>
          <p className="text-xs text-amber-600 font-mono uppercase tracking-wider">Intelligence Bureau • Connected</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#1c1917] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-50 pointer-events-none"></div>
        
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
            <div className={`max-w-[80%] p-4 rounded-lg ${
              msg.sender === 'user' 
                ? 'bg-stone-700 text-stone-100 rounded-tr-none' 
                : 'bg-[#2d2a26] text-stone-300 border border-stone-700 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed font-sans">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start relative z-10">
             <div className="bg-[#2d2a26] p-3 rounded-lg rounded-tl-none border border-stone-700 flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce delay-150"></div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="bg-stone-800 p-4 border-t border-stone-700 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about strategy, dates, or equipment..."
          className="flex-1 bg-stone-900 text-stone-200 border border-stone-600 rounded p-3 focus:outline-none focus:border-amber-600 font-mono text-sm placeholder-stone-600"
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="bg-amber-700 hover:bg-amber-600 text-white p-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;