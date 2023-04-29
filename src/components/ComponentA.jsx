import { useRef } from 'react';
import styles from './ComponentA.module.css';

const ComponentA = () => {
    const inputRef = useRef(null);

    const handleChangeInput = () => {
        inputRef.current.focus();
        console.log(inputRef)
        console.log(inputRef.current.value)
    }

    return (
        <div className={styles.box}>
            <label>Name:
                <input type="text" ref={inputRef} />
                <button onClick={handleChangeInput}>Get data</button>

            </label>
        </div>
    )
}

export default ComponentA