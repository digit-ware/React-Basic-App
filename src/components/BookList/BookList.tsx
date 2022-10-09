import { Book } from "../../types/app"
import OneBook from "./OneBook"

const BookList: React.FC = () => {

    const myList: Array<Book> = [
        {
            id: 1,
            title: "book1",
            description: "lorem ipsum 1"
        },
        {
            id: 2,
            title: "book2",
            description: "lorem ipsum 2"
        },
        {
            id: 3,
            title: "book3",
            description: "lorem ipsum 3"
        },
    ]


    return (
        <ul>
            {myList.map((b => <OneBook item={b} />))}
        </ul>
    )

}

export default BookList