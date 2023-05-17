import {Button} from "ui/index";
import {useSayHello} from "ui/hooks";

export function App() {

    useSayHello();

  return (
    <div>
        <Button />
        <h1>Widget One</h1>
    </div>
  );
}

export default App;
