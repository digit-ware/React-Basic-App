import { useEffect, useState } from "react"

const Counter: React.FC = () => {

    const [count, setCount] = useState(0)

    const onClick = () => {
        setCount(count+1)
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