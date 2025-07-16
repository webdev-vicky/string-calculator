import React, {useState, useCallback} from 'react';
import './App.css';
import InputBox from "./components/InputBox";

function App() {
    const [numbersInput, setNumbersInput] = useState('');
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState('');

    const add = useCallback((numbers: any): number => {
        if (numbers === '') {
            return 0;
        }
        const numberStrings = numbers.split(',');
        let sum = 0;
        for (const numStr of numberStrings) {
            sum += parseInt(numStr, 10);
        }
        return sum;
    }, []);

    const handleCalculate = () => {
        try {
            setError('');
            setResult(null);
            const calculatedSum = add(numbersInput);
            setResult(calculatedSum);
        } catch (err: any) {
            setError(err.message);
        }
    };


    return (
        // Tailwind CSS classes for responsive layout and styling
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-inter">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="mb-4">
         <InputBox value={numbersInput} onChange={setNumbersInput}/>
        </div>
            <button
                onClick={handleCalculate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105 shadow-md"
            >
                Calculate Sum
            </button>
            {result !== null && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md shadow-inner text-center font-semibold text-lg">
                    <span className="text-green-900">Result: {result}</span>
                </div>
            )}

            {error && (
                <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-md shadow-inner text-center font-semibold text-lg">
                    Error: <span className="text-red-900">{error}</span>
                </div>
            )}
        <div className="mt-8 text-gray-600 text-sm text-center">
            <p className="font-semibold mb-2">Examples:</p>
            <ul className="list-disc list-inside text-left mx-auto max-w-xs">
                <li>"" returns 0</li>
                <li>"1" returns 1</li>
                <li>"1,5" returns 6</li>
                <li>"1\n2,3" returns 6</li>
                <li>"//;\n1;2" returns 3</li>
                <li>"1,-2,3" throws "Negative numbers not allowed: -2"</li>
            </ul>
        </div>
        </div>
    </div>
  );
}

export default App;
