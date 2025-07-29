// Make sure 'globals.css' exists in the same directory as this file.
// If it is located elsewhere, update the path accordingly.
// Update the path below if your CSS file is not in the same directory as App.tsx
import { Routes, Route } from "react-router-dom";
import './globals.css';


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public route*/}
        <Route path="/sign-in" element={<SigninForm />} />
        {/* private route */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
};


export default App;