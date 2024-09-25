import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import { useState } from "react";
import Edit from "./pages/Edit";

function App() {
  // logic
  const [churead, setChuread] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [editedItem, setEditedItem] = useState(null);

  const handlePost = (churead) => {
    // 매개변수, parameter
    setChuread(churead);
  };

  // view
  return (
    <div className="bg-churead-black h-full text-white overflow-auto">
      <div className="max-w-[572px] mx-auto h-full">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  churead={churead}
                  editedItem={editedItem}
                  onEdit={(data) => setEditItem(data)}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/post" element={<Post onPost={handlePost} />} />
            <Route
              path="/edit"
              element={
                <Edit
                  editItem={editItem}
                  onEdited={(data) => setEditedItem(data)}
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
