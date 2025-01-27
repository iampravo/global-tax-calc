import React, { useState } from 'react';
import { toast } from 'sonner';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumberClick = (number: string) => {
    if (shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  };

  const handleOperationClick = (op: string) => {
    const currentValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setPreviousValue(result);
      setDisplay(result.toString());
    }
    
    setOperation(op);
    setShouldResetDisplay(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        if (b === 0) {
          toast.error("Cannot divide by zero!");
          return 0;
        }
        return a / b;
      default:
        return b;
    }
  };

  const handleEquals = () => {
    if (previousValue === null || operation === null) return;
    
    const currentValue = parseFloat(display);
    const result = calculate(previousValue, currentValue, operation);
    
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(false);
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-[#22252D] p-6 rounded-3xl shadow-2xl w-full max-w-xs">
        <div className="mb-4 p-4 text-right">
          <div className="text-4xl font-bold text-white overflow-hidden">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="function-button">
            AC
          </button>
          <button onClick={() => setDisplay((prev) => (parseFloat(prev) * -1).toString())} className="function-button">
            +/-
          </button>
          <button onClick={() => setDisplay((prev) => (parseFloat(prev) / 100).toString())} className="function-button">
            %
          </button>
          <button onClick={() => handleOperationClick('÷')} className="operation-button">
            ÷
          </button>

          {[7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())} className="number-button">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperationClick('×')} className="operation-button">
            ×
          </button>

          {[4, 5, 6].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())} className="number-button">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperationClick('-')} className="operation-button">
            -
          </button>

          {[1, 2, 3].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString())} className="number-button">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperationClick('+')} className="operation-button">
            +
          </button>

          <button onClick={() => handleNumberClick('0')} className="number-button col-span-2">
            0
          </button>
          <button onClick={handleDecimal} className="number-button">
            .
          </button>
          <button onClick={handleEquals} className="operation-button">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;