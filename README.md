# Next.js Boilerplate with Redux Toolkit

A modern, production-ready Next.js boilerplate with Redux Toolkit for state management, TypeScript for type safety, and Tailwind CSS for styling.

## Features

- ⚡ [Next.js](https://nextjs.org) 14 with App Router
- 🔄 [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- 📝 [TypeScript](https://www.typescriptlang.org/) for type checking
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 🧹 [ESLint](https://eslint.org/) for code linting
- 🔍 Organized folder structure
- ⚙️ Example Counter component
- 🌐 Responsive design

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages
│   ├── components/     # React components
│   ├── lib/            # Utility libraries
│   │   └── redux/      # Redux store setup
│   │       ├── features/   # Redux slices
│   │       ├── hooks.ts    # Redux hooks
│   │       ├── provider.tsx # Redux provider
│   │       └── store.ts    # Redux store configuration
```

## State Management

This boilerplate uses Redux Toolkit for state management. The Redux store is configured in `src/lib/redux/store.ts` and the provider is set up in `src/lib/redux/provider.tsx`.

Example usage:

```tsx
// In a component
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { increment } from '@/lib/redux/features/counterSlice';

function MyComponent() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

## Adding New Redux Slices

1. Create a new slice file in `src/lib/redux/features/`
2. Add the new reducer to the store in `src/lib/redux/store.ts`

## Customization

Feel free to modify this boilerplate to fit your needs. Here are some common customizations:

- Update the metadata in `src/app/layout.tsx`
- Add new pages in the `src/app` directory
- Create new components in `src/components`
- Add new Redux slices in `src/lib/redux/features`

## Learn More

To learn more about the technologies used in this boilerplate:

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/introduction/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Testing

This boilerplate includes both unit testing with Jest and end-to-end testing with Playwright using a BDD approach.

### Unit Testing

Unit tests are written using Jest and React Testing Library:

```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage
```

### End-to-End Testing with BDD Approach

This boilerplate implements end-to-end testing using Playwright with a Behavior-Driven Development (BDD) approach. The implementation is straightforward and maintainable:

1. **Feature files**: Human-readable `.feature` files written in Gherkin syntax that describe application behavior
2. **Step definitions**: Organized step implementations that map directly to Gherkin steps, implemented with Playwright

To run the end-to-end tests:

```bash
# Run all E2E tests headlessly
npm run test:e2e

# Run tests with UI for debugging
npm run test:e2e:ui
```

#### BDD Testing Structure

Our BDD implementation follows this pattern:

1. **Feature files** (`src/tests/e2e/features/`) describe the expected behaviors
2. **Step definition files** (`src/tests/e2e/step-definitions/`) implement the steps

This approach maintains the readability and structure of BDD testing while avoiding the complexity of integrating Cucumber directly with Playwright.

#### Example Feature (in Gherkin syntax):

```gherkin
Feature: Counter Functionality
  As a user
  I want to use the counter functionality
  So that I can increment and decrement a counter value

  Scenario: Increment the counter
    Given I am on the home page
    When I click the "Increment" button
    Then the counter value should be "1"
```

#### Corresponding Test Implementation:

```typescript
test('Scenario: Increment the counter', async ({ page }) => {
  // Given I am on the home page (handled by beforeEach)
  
  // When I click the "Increment" button
  await CounterSteps.whenIClickTheButton(page, 'Increment');
  
  // Then the counter value should be "1"
  await CounterSteps.thenTheCounterValueShouldBe(page, '1');
});
```

This approach makes tests readable, maintainable, and aligned with business requirements.

## License

MIT
