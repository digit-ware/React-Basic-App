import React, { useContext } from 'react';
import { AppContext } from '../../contexts/appContext';
import './HelloWorld.css';


const HelloWorld: React.FC = () => {

    const context = useContext(AppContext)


    return (
        <>
            <div className="Hello-Panel">Hello World</div>
            <div>App Counter is {context.counter}</div>
        </>
    )
}

export default HelloWorld