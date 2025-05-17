import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      <Header/>
      {/* <h2>Hooks</h2>
      <Hero />
      <Footer/> */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
