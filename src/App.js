import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllowNotification from "./pages/AllowNotification";
import CodeConfirm from "./pages/CodeConfirm";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <PlanLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/invite" element={<PhoneConfirmation />} />
        <Route path="/code_confirm" element={<CodeConfirm />} />
        <Route path="/allow_notification" element={<AllowNotification />} />
      </Routes>
    </PlanLayout>
  );
};

export default App;
