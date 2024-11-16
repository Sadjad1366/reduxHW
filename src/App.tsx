import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store";
import ProductList from "./components/ProductList";

const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
