import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./app/routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
