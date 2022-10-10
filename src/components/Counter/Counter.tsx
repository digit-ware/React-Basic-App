import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../contexts/appContext"

const Counter: React.FC = () => {

    const [count, setCount] = useState(0)
    const context = useContext(AppContext)

    const onClick = () => {
        setCount(count+1)
        context.setCounter(count+2)
    }

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });

 

    return (
        <div onClick={onClick}>Counter is {count}</div>
    )

}

export default  Counter