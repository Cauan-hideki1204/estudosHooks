import { useMemo, useCallback } from 'react'

const values = [3, 9, 6, 4, 2, 1];

// Isso sempre retornará o mesmo valor, um array ordenado. Depois que a matriz de valores mudar, isso será recalculado.
const memoizedValue = useMemo(() => values.sort(), [values])
console.log('memoizedValue', memoizedValue);
// o retorno será [3, 9, 6, 4, 2, 1] enquanto o array de dependências não mudar

// Isso me dará de volta uma função que pode ser chamada mais tarde. Ele sempre retornará o mesmo resultado, a menos que a matriz de valores seja modificada.
const memoizedFunction = useCallback(() => values.sort(), [values])
console.log('memoizedFunction', memoizedFunction);
// o retorno será () => [3, 9, 6, 4, 2, 1] enquanto o array de dependências não mudar