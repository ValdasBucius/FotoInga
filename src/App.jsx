import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Galery from "./pages/Galery";
import WrongPage from "./ui/WrongPage";
import Prices from "./pages/Prices";
import Birthdays from "./pages/Birthdays";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="galery" element={<Galery />} />
            <Route path="galery/birthdays" element={<Birthdays />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="prices" element={<Prices />} />
            <Route path="*" element={<WrongPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
