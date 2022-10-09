import { Book } from "../../types/app"
import OneBook from "./OneBook"

const BookList: React.FC = () => {

    const myList: Array<Book> = [
        {
            title: "book1",
            description: "lorem ipsum 1"
        },
        {
            title: "book2",
            description: "lorem ipsum 1"
        },
        {
            title: "book3",
            description: "lorem ipsum 1"
        },
    ]


    return (
        <ul>
            {myList.map((b => <OneBook />))}
        </ul>
    )

}

export default BookList