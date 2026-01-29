# React Suspense + use() + ErrorBoundary (TypeScript)

the project uses the "use" hook to read promises, Suspense to wait for data processing, ErrorBoundary to catch errors.
two different promises are passed: resolve and reject.
if Promise pending → React shows <Suspense fallback>
if Promise rejected → React passes the error to <ErrorBoundary fallback>
if Promise resolved → React renders the text

# Технології

- React (19 / experimental)
- TypeScript
- Vite
- Suspense
- Error Boundary (`react-error-boundary`)


# Структура проєкту

src/
├── components/
│ ├── MessageComponent/
│ │ ├── Message.tsx
│ │ ├── MessageProps.ts
│ │ ├── fetchMessage.ts
│ │
│ ├── messages/
│ │ ├── ErrorMassage.tsx
│ │ └── Loading.tsx
│
├── App.tsx
├── main.tsx

# Запуск проєкту
  Клонувати проект:
  

  Встановити залежності:

    npm install

  Запустити dev-сервер:

    npm run dev

  Відкрити в браузері:

    http://localhost:5173`