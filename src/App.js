// App.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "test",
  currency: "USD",
  intent: "capture",
};

export default function App() {
    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    );
}