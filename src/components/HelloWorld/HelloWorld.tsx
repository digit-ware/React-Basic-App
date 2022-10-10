import React, { useContext } from 'react';
import { AppContext } from '../../contexts/appContext';


const HelloWorld: React.FC = () => {

    const context = useContext(AppContext)


    return (
        <>
            <div>Hello World</div>
            <div>App Counter is {context.counter}</div>
        </>
    )
}

export default HelloWorld