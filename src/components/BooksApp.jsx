import { BookList } from "./Books";
import { favouriteBooks } from "./Books";

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </>
  );
}
