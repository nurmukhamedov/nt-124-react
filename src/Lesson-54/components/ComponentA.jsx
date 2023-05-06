import React from 'react';
import { useContext } from 'react';
import { MyContext } from './ExampleContext';
const ComponentA = () => {
    const { handleCount } = useContext(MyContext);

    return (
        <div>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}

export default ComponentA;