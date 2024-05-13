import Navbar from "./components/Navbar";
import Example from "./components/Example";
import useGlobalContext from "./hooks/useGlobalContext";
import Heros from "./components/Heros";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Services from "./components/Services";
import Contact from "./components/Contact";
// import Register from "./components/Register";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Logout from "./components/Logout";
import RequireAuth from "./components/RequireAuth";
import BlogCards from "./components/BlogCards";
import DetailPage from "./components/DetailPage";

function App() {
  const { mode, token } = useGlobalContext();
  console.log(mode);
  return (
    <main
      className={`font-poppins bg-bkg text-content min-h-screen`}
      data-theme={mode}
    >
      <section className="container mx-auto">
        <BrowserRouter>
          {token && <Navbar />}
          <Routes>
            {/* public routes */}

            <Route exact path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route element={<RequireAuth />}>
              <Route exact path="/" element={<Heros />} />
              <Route path="/about" element={<Example />} />
              <Route exact path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/cards" element={<BlogCards />} />
              <Route path="/detail" element={<DetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
