import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <PlanLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/invite" element={<PhoneConfirmation />} />
      </Routes>
    </PlanLayout>
  )
}

export default App;
