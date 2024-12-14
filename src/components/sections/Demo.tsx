import React, { useState } from 'react';
import { Play, MessageSquare } from 'lucide-react';

const Demo = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI response
    setResponse("Hi! I'm Divo.ai. I can help you schedule appointments, answer questions, and manage your customer interactions 24/7. How can I assist you today?");
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Divo.ai in Action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Try our interactive demo to experience the power of AI-driven customer service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Play className="w-5 h-5 text-cyber-blue" />
                <span className="text-sm text-gray-400">Live Demo</span>
              </div>
              {response && (
                <div className="bg-cyber-blue/10 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyber-blue flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-black" />
                    </div>
                    <div className="text-gray-300">{response}</div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 bg-black border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cyber-blue text-black font-medium rounded-lg hover:bg-white transition-all duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;