import { useState, Fragment, useEffect } from "react";

const TitleUpdator = () => {
    const [title, setTitle] = useState("");
    const changeHandler = (event) => {
        document.title = event.target.value;
        setTitle(event.target.value);
    }

    return(
        <Fragment>
            <h1>This is Title Updator</h1>
            <input type="text" value={title} onChange={changeHandler}/>
        </Fragment>
    )
}

export default TitleUpdator;