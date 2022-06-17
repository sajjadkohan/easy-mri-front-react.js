import React,{useState} from 'react';
import styles from './styles/Filter.module.css';

// MUI
import { Select , MenuItem } from '@material-ui/core';

const Filter = () => {

    const [drop,setDrop] = useState(false);
    // const [liDrop,setLiDrop] = useState("همه");
    const [age , setAge] = useState("");

    const dropHandler = event => {
        if (drop) {
            setDrop(false);
        } else {setDrop(true)}
}

    // const dropLiHandler = event => {
    //         setLiDrop(event.target.textContent)
    // }

    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
        <div>
            <div className={styles.filter}>
                {/* <div className={styles.textRight}>
                
                </div>
                <div className={styles.dropDown} onClick={dropHandler}>
                    <span>{liDrop}</span>
                    <ul className={drop ? styles.dropUl : styles.dropUlN}>
                        <li onClick={dropLiHandler}>MRI اخرین </li>
                        <li onClick={dropLiHandler}>MRI اولین </li>
                        <li onClick={dropLiHandler}>همه</li>
                    </ul>
                </div> */}
                <h4 className={styles.filterH2}> :نمایش بر اساس </h4>
                
                <Select className={styles.mi} value={age} onChange={handleChange}>
                    
            <MenuItem value={1}>همه</MenuItem>
            <MenuItem value={2}>MRI اخرین</MenuItem>
            <MenuItem value={3}>MRI اولین</MenuItem>

                </Select>

            </div>
        </div>
    );
};

export default Filter;