import { createRoot } from "react-dom/client";
import App from "./app"
import "./app.css"
import { Provider } from "react-redux";
import store from "./state";

const root = createRoot(document.getElementById('app') as Element)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);