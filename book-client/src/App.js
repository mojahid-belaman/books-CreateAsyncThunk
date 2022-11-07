import AddForm from "./components/AddForm";
import BookList from "./components/BookList";
import Container from "./components/Container";
import Header from "./components/Header";
import "./input.css";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <AddForm />
        <BookList />
      </Container>
    </>
  );
};

export default App;
