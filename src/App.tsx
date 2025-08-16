import React, { useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  status: string;
}

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [status, setStatus] = useState("Active");

  // Table data
  const [data, setData] = useState<User[]>([
    // { id: 1, name: "Alice", email: "alice@example.com", password: "123", age: 25, status: "Active" },
    // { id: 2, name: "Bob", email: "bob@example.com", password: "456", age: 30, status: "Inactive" },
  ]);

  const columns: { key: keyof User; header: string }[] = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "age", header: "Age" },
    { key: "status", header: "Status" },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleAddEntry = () => {
    if (!name || !email || !password || !age) {
      alert("Please fill all fields!");
      return;
    }

    const newEntry: User = {
      id: data.length + 1,
      name,
      email,
      password,
      age: Number(age),
      status,
    };

    setData([...data, newEntry]);

    // reset form
    setName("");
    setEmail("");
    setPassword("");
    setAge("");
    setStatus("Active");
  };

  return (
    <div className="app-container">
      {/* ✅ Toggle bar */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌞 Light" : "🌙 Dark"}
      </div>

      <h2>Sign In</h2>

      <InputField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        helperText="Full name as per ID"
        clearable
      />

      <InputField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        helperText="We never share your email."
        clearable
      />

      <InputField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        type="password"
        passwordToggle
      />

      {/* Age Input */}
      <InputField
        label="Age"
        value={age?.toString()}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter age"
      />

      {/* Status Dropdown */}
      <div className="input-group">
        <label>Status</label>
        <select
          className="select-input"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
<br></br>
      {/* Add Entry Button */}
      <button className="add-btn" onClick={handleAddEntry}>
        ➕ Add Entry
      </button>

      <h2>DataTable</h2>
      <DataTable data={data} columns={columns} selectable />
    </div>
  );
}

export default App;
