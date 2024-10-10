import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Erro');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full text-right p-2 mb-4 text-2xl border border-gray-300 rounded-lg"
        />
        <div className="grid grid-cols-4 gap-2">
          <button onClick={clearInput} className="col-span-2 bg-red-500 text-white p-4 rounded-lg">AC</button>
          <button onClick={() => handleClick('/')} className="bg-gray-300 p-4 rounded-lg">/</button>
          <button onClick={() => handleClick('*')} className="bg-gray-300 p-4 rounded-lg">*</button>
          <button onClick={() => handleClick('7')} className="bg-gray-200 p-4 rounded-lg">7</button>
          <button onClick={() => handleClick('8')} className="bg-gray-200 p-4 rounded-lg">8</button>
          <button onClick={() => handleClick('9')} className="bg-gray-200 p-4 rounded-lg">9</button>
          <button onClick={() => handleClick('-')} className="bg-gray-300 p-4 rounded-lg">-</button>
          <button onClick={() => handleClick('4')} className="bg-gray-200 p-4 rounded-lg">4</button>
          <button onClick={() => handleClick('5')} className="bg-gray-200 p-4 rounded-lg">5</button>
          <button onClick={() => handleClick('6')} className="bg-gray-200 p-4 rounded-lg">6</button>
          <button onClick={() => handleClick('+')} className="bg-gray-300 p-4 rounded-lg">+</button>
          <button onClick={() => handleClick('1')} className="bg-gray-200 p-4 rounded-lg">1</button>
          <button onClick={() => handleClick('2')} className="bg-gray-200 p-4 rounded-lg">2</button>
          <button onClick={() => handleClick('3')} className="bg-gray-200 p-4 rounded-lg">3</button>
          <button onClick={calculate} className="row-span-2 bg-blue-500 text-white p-4 rounded-lg">=</button>
          <button onClick={() => handleClick('0')} className="col-span-2 bg-gray-200 p-4 rounded-lg">0</button>
          <button onClick={() => handleClick('.')} className="bg-gray-300 p-4 rounded-lg">.</button>
        </div>
      </div>
    </div>
  );
}
