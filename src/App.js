import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser.js";
import EditUser from "./components/EditUser.js";
import UserList from "./components/UserList.js";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
