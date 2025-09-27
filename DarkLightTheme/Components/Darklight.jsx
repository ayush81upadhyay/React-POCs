import {useState, useEffect, Fragment} from 'react'
import './Darklight.css'

const Darklight = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
            document.body.classList.remove("white");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("white");
        }
    }, [isDark]);

    const themeHandler = () => {
        setIsDark(prev => !prev);
    }

    return(
        <Fragment>
            <h1>Hello</h1>
            <button onClick={themeHandler}>Theme Changer</button>
        </Fragment>
    )
}

export default Darklight;