Aquí tienes un ejemplo básico de cómo utilizar `useContext`, `useReducer` y `Context.Provider` en Next.js con TypeScript. En este ejemplo, crearemos un contexto para administrar un contador.

1. Primero, crea un archivo llamado `CounterContext.tsx` para definir el contexto:

```tsx
import { createContext, useContext, useReducer, ReactNode } from 'react';

// Define el estado del contexto
interface CounterState {
  count: number;
}

// Acciones disponibles para el reducer
type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

// Función reducer para actualizar el estado
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

// Definir el contexto
interface CounterContextProps {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
}

const CounterContext = createContext<CounterContextProps | undefined>(undefined);

// Proveedor del contexto
interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Función personalizada para usar el contexto
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter debe utilizarse dentro de un CounterProvider');
  }
  return context;
};
```

2. Luego, en tu página o componente, puedes importar y utilizar el contexto:

```tsx
import React from 'react';
import { useCounter, CounterProvider } from '../context/CounterContext';

const CounterPage = () => {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementar</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reiniciar</button>
    </div>
  );
};

export default function Counter() {
  return (
    <CounterProvider>
      <CounterPage />
    </CounterProvider>
  );
}
```

En este ejemplo, creamos un contexto `CounterContext` para administrar el estado del contador y proporcionamos un proveedor `CounterProvider` para envolver la parte de la aplicación que necesita acceder al contexto. Luego, en `CounterPage`, utilizamos la función personalizada `useCounter` para acceder al estado y al despachador del contexto y controlar el contador.