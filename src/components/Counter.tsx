'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { 
  increment, 
  decrement, 
  reset, 
  incrementByAmount, 
  fetchRandomValue,
  saveCounterValue 
} from '@/lib/redux/features/counterSlice';
import { useState } from 'react';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const status = useAppSelector((state) => state.counter.status);
  const error = useAppSelector((state) => state.counter.error);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(1);
  
  const isLoading = status === 'loading';

  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      
      {isLoading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          disabled={isLoading}
        >
          Decrement
        </button>
        
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          disabled={isLoading}
        >
          Increment
        </button>
        
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          disabled={isLoading}
        >
          Reset
        </button>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          className="border p-2 w-24 rounded"
          disabled={isLoading}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          disabled={isLoading}
        >
          Add Amount
        </button>
      </div>
      
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => dispatch(fetchRandomValue())}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
          disabled={isLoading}
        >
          Get Random Value
        </button>
        
        <button
          onClick={() => dispatch(saveCounterValue(count))}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
          disabled={isLoading}
        >
          Save Value
        </button>
      </div>
    </div>
  );
} 