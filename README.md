# React Query (TanStack Query) Tutorial

A comprehensive tutorial project demonstrating the power and flexibility of TanStack React Query (formerly known as React Query) with Next.js 13+ App Router.

## 🚀 Features

- **Basic React Query Implementation**
  - Automatic caching and state management
  - Loading and error states handling
  - Optimized data fetching

- **Advanced Query Patterns**
  - Infinite scrolling with `useInfiniteQuery`
  - Debounced search functionality
  - Optimistic updates
  - Mutations with proper error handling

- **Modern Tech Stack**
  - Next.js 13+ with App Router
  - TypeScript for type safety
  - Tailwind CSS for styling
  - Shadcn UI components
  - React Query DevTools integration

## 📚 Tutorial Sections

1. **Problems with useEffect**
   - Demonstrates common issues with traditional data fetching
   - Shows race conditions and state management problems
   - Provides solutions using React Query

2. **Basic React Query**
   - Simple data fetching implementation
   - Automatic caching and refetching
   - Loading and error states

3. **Debounced Search**
   - Optimized search functionality
   - Automatic request deduplication
   - Cached search results

4. **Infinite Queries**
   - Pagination with cursor-based loading
   - Infinite scrolling implementation
   - Optimistic updates for better UX

5. **Mutations**
   - Create, update, and delete operations
   - Cache invalidation strategies
   - Error handling and rollbacks

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-query-tutorial.git
   cd react-query-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🔧 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── basic-react-query/ # Basic React Query examples
│   ├── infinite-query/    # Infinite scrolling examples
│   ├── problems-with-use-effect/ # useEffect comparison
│   └── search-query/      # Search functionality
├── components/            # Reusable components
├── hooks/                # Custom hooks
├── lib/                  # Utility functions
└── providers/            # Context providers
```

## 📖 Learning Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Query DevTools](https://tanstack.com/query/latest/docs/react/devtools)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TanStack Query](https://tanstack.com/query) team for the amazing library
- [Next.js](https://nextjs.org) team for the framework
- [Coding in Flow](https://www.youtube.com/c/codinginflow) for the tutorial inspiration
