# React Notes

## Tailwind Configuration

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
```

```sh

npx tailwindcss -i ./src/index.css -o ./src/dist/output.css --watch

```

## Zod Notes

Everything in zod is required unless you make it optional

```javascript
import z from "zod";

const schema = z
  .object({
    username: z.string({
      required_error: "username is required",
      invalid_type_error: "username must be a string",
    }),
    name: z.string().optional(),
    age: z.number(),
    isAlive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
      street: z.string(),
    }),
    password1: z
      .string({})
      .min(6, "Password must be at least 6 charaters long"),
    password2: z.string({}),
  })
  .refine(
    (data) => {
      console.log(data);
      return data.password1 === data.password2;
    },
    {
      message: "Passwords do not match",
    }
  );

const payload = {
  name: "john",
  age: 30,
  isAlive: true,
  hobbies: ["coding", "reading"],
  address: {
    street: "123 Main St",
  },
};

const result = schema.parse(payload);
console.log(JSON.stringify(result, null, true));
```

## Tanstack Notes

### installation

```sh
npm install @tanstack/react-query @tanstack/react-query-devtools

```

### edit the .eslintrc.cjs file

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended", //new
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@tanstack/query"], //new
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
```

### services folder

1. api.jsx -> axiosInstance
2. queries -> react-query queries

### what does the queries functions/hooks return

```javascript
import { useProducts } from "./queries";

const products = useProducts();

const {
  data,
  isError,
  status,
  fetchStatus,
  isPending,
  isSuccess,
  isInitialLoading,
  isLoading,
  dataUpdatedAt,
  error,
  errorUpdatedAt,
  failureCount,
  failureReason,
  errorUpdateCount,
  isFetched,
  isFetchedAfterMount,
  isFetching,
  isRefetching,
  isLoadingError,
  isPaused,
  isPlaceholderData,
  isRefetchError,
  isStale,
} = products;
```

### setup react-query

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import "./dist/output.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </GlobalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
```

### CRUD Operations using react-query

```javascript
//fetching data

import axios from "axios";
import { useQuery, useQueries } from "@tanstack/react-query";

const retrievePosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const useProducts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: retrievePosts,
  });
};

const DisplayPosts = () => {
  const { data: posts, error, isLoading } = useProducts();

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
```

```javascript

```

```javascript

```

```javascript

```


