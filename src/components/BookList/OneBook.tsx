import { Book } from "../../types/app"

interface Props {
    item: Book
  }
  
const OneBook: React.FC<Props> = ({item}) => {

    return (
        <div key={item.id}>Book {`${item.title} - ${item.description}`}</div>
    )


}

export default OneBook