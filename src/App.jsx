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
import { createContext, useState } from "react";
import ScrollToTop from "./features/reservations/ScrollToTop";
import Login from "./pages/Login";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export const NavigationContext = createContext();
export const LogedContext = createContext();

function App() {
  const [burgerActive, setBurgerActive] = useState(false); //header, navigation, home
  const [loged, setLoged] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <LogedContext.Provider
        value={{
          loged,
          setLoged,
        }}
      >
        <NavigationContext.Provider
          value={{
            burgerActive,
            setBurgerActive,
          }}
        >
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="/login" element={<Login />} />
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
        </NavigationContext.Provider>
      </LogedContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
