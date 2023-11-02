import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className='counter'>
            <h2>Счетчик</h2>
            <h1>{count}</h1>
            <div>
                <button className='minus' onClick={() => setCount(count - 1)}> - 1 </button>
                <button className='plus' onClick={() => setCount(count + 1)}> + 1 </button>
            </div>
        </div>
    );
}

export default Counter;