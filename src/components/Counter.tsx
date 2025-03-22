'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { increment, decrement } from '@/lib/redux/features/counterSlice';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
} 