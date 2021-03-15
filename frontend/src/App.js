import Container from "@material-ui/core/Container";
import FormBlock from "./Components/FormBlock/FormBlock";
import ChatBlock from "./Components/ChatBlock/ChatBlock";

const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <FormBlock />
        <ChatBlock />
      </Container>
    </>
  );
};

export default App;
