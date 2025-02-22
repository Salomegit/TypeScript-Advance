import Input from "./components/input";
import Button from "./components/Button";
function App() {
  return (
    <>
      <h1>Let's get started!</h1>
      <Input label="Your name" id="name" type="text"/>
      <Input label="Your age" id="age" type="number"/>
      <Input label="Your email" id="email" type="email" />
      <p>

      <Button el='button' type="button"  >New</Button>
      <Button el='anchor' style={{color: 'red'}} >A Link</Button>
      </p>
      <p>
      </p>

    </>
  );
}

export default App;
