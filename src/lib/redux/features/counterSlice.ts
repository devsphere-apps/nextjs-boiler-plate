import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
  error: null,
};

// Async thunks
export const fetchRandomValue = createAsyncThunk(
  'counter/fetchRandomValue',
  async () => {
    const response = await fetch('/api/counter');
    const data = await response.json();
    return data.value;
  }
);

export const saveCounterValue = createAsyncThunk(
  'counter/saveValue',
  async (value: number) => {
    const response = await fetch('/api/counter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    const data = await response.json();
    return data.value;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomValue.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomValue.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchRandomValue.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch random value';
      })
      .addCase(saveCounterValue.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveCounterValue.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(saveCounterValue.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to save value';
      });
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer; 