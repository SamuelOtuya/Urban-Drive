import { useState } from 'react';

const QuestionBoxWithFAQ = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  
  const toggleFAQ = () => setShowFAQ(!showFAQ);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Input Section */}
      <div className="flex border border-gray-300 rounded-lg p-2 shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Click the plus Button to see Frequently asked questions"
          className="flex-grow p-2 outline-orange-500 rounded-l-lg"
        />
        
         <button
        onClick={toggleFAQ}
        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
      >
        +
      </button>
      </div>

      {/* Plus Button to Toggle FAQ */}
    

      {/* Frequently Asked Questions Section */}
      {showFAQ && (
        <div className="w-full max-w-md mt-4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Frequently Asked Questions</h3>
          <ul className="space-y-2 text-sm">
            <li>Q1: How do I reset my password?</li>
            <li>Q2: How can I contact support?</li>
            <li>Q3: What is the refund policy?</li>
            <li>Q4: How can I update my profile?</li>
            <li>Q5: Where can I view my order history?</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionBoxWithFAQ;
