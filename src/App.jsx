import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "../components/Form"

const App = () => {
  const navLinks = [
    { name: "Form", path: "/Form" },
  ];

  return (
    <BrowserRouter>
      <div className="bg-[url(https://i.pinimg.com/1200x/02/52/e2/0252e2b21925c190bdf8bb5a423f6661.jpg)] bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col w-full items-center">
        <div className='lg:flex'>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
        <Routes>
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
//     <div>
// <Form />
//     </div>
  );
};
export default App;