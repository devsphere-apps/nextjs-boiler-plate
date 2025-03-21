import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Counter from '../Counter';

// Mock Redux store
const mockStore = configureStore([]);

describe('Counter Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      counter: {
        value: 5,
        status: 'idle',
        error: null,
      },
    });
    
    // Mock the dispatch function
    store.dispatch = jest.fn();
  });

  it('renders the counter with correct value', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.getByText('Counter: 5')).toBeInTheDocument();
  });

  it('dispatches increment action when increment button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText('Increment'));
    
    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'counter/increment' })
    );
  });

  it('dispatches decrement action when decrement button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText('Decrement'));
    
    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'counter/decrement' })
    );
  });

  it('dispatches reset action when reset button is clicked', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByText('Reset'));
    
    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'counter/reset' })
    );
  });

  it('handles increment by amount correctly', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(screen.getByText('Add Amount'));
    
    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({ 
        type: 'counter/incrementByAmount',
        payload: 10
      })
    );
  });
}); 