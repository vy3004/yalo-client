import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import Register from "./pages/Register";
import RePassword from "./pages/RePassword";
import AppProvider from "./context/AppProvider";
import InfoUserModal from "./components/Modals/InfoUserModal";
import UpdateInfoUserModal from "./components/Modals/UpdateInfoUserModal";
import AddUserModal from "./components/Modals/AddUserModal";
import AddGroupModal from "./components/Modals/AddGroupModal";
import LogoutModal from "./components/Modals/LogoutModal";
import LogoutChatRoomModal from "./components/Modals/LogoutChatRoomModal";
import DeleteChatHistoryModal from "./components/Modals/DeleteChatHistoryModal";
import AddMemberModal from "./components/Modals/AddMemberModal";
import RenameGroupModal from "./components/Modals/RenameGroupModal";
import InfoGroupModal from "./components/Modals/InfoGroupModal";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<RePassword />} path="/repassword" />
          <Route element={<ChatRoom />} path="/" />
        </Routes>
        <LogoutModal />
        <LogoutChatRoomModal />
        <InfoUserModal />
        <InfoGroupModal />
        <UpdateInfoUserModal />
        <AddUserModal />
        <AddGroupModal />
        <AddMemberModal />
        <RenameGroupModal />
        <DeleteChatHistoryModal />
      </AppProvider>
    </Router>
  );
}

export default App;
