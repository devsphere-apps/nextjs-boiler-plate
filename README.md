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

## License

MIT
