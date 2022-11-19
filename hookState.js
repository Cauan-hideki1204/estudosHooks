import React, { useState } from 'react';

function Example() {
    // count será aonde o valor será armazenado no estado
    // setCount vai ser a função que irá alterar o valor do estado
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


let componentHooks = [];
let currentHookIndex = 0;

// Como o useState funciona internamente
function useState(initialState) {
    let pair = componentHooks[currentHookIndex];

    if (pair) {
        // não é o primeiro render,
        // o par de estado ja existe.
        // Retorna o valor e ja se prepara para o proxima chamado do hook.
        currentHookIndex++;
        return pair;
    }

    // primeiro render,
    // armazena os estados.
    pair = [initialState, setState];

    function setState(nextState) {
        // Atualiza o valor do estado
        pair[0] = nextState;
        updateDOM();
    }

    // Armazena o par ara renderizaçoes futuras
    // prepara para a proxima chamadado do hook.
    componentHooks[currentHookIndex] = pair;
    currentHookIndex++;
    return pair;
}