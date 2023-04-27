import { useState } from 'react'
import './Lesson50.scss';

const Lesson50 = (props) => {

    const [count, setCount] = useState(5);
    const [dark, setDark] = useState(false);

    const handleCount = () => {
        setCount(count + 5);
    }
    const handleMinusCount = () => {
        setCount(count - 3)
    }
    const changeColor = () => {
        setDark(!dark);
        console.log(dark);
    }

    return (
        <div className={`${dark ? 'dark' : 'light'}`}>
            Lesson50
            <h2>
                {
                    count
                }
                <button onClick={handleCount}>increase</button>
                <button onClick={handleMinusCount}>decrease</button>
                <button onClick={changeColor}>{dark ? 'Dark' : 'Light'}</button>
            </h2>
        </div>
    )
}

export default Lesson50