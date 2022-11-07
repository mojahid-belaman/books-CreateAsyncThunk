import AddForm from "./components/AddForm";
import BookContainer from "./components/BookContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import "./input.css";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </>
  );
};

export default App;
