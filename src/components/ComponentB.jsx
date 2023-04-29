import { useState } from 'react'
import myStyle from './ComponentB.module.css'
const ComponentB = () => {
    const [value, setValue] = useState('');

    const handleChangeInput = (e) => {
        setValue(e.target.value);
    }
    console.log(value)
    return (
        <div className={myStyle.box}>ComponentB
            <input type="text" value={value} onChange={handleChangeInput} />
        </div>
    )
}

export default ComponentB