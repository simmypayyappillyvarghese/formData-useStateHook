import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    age: ""
  });
  const [isDataSubmit, setIsDataSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsDataSubmit(true);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="fullname">FullName: </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <label htmlFor="age">AGE: </label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {isDataSubmit ? (
        <>
          <p>Request Sent to DB with below request data</p>
          <ul>
            {Object.keys(formData).map((key, index) => (
              <li key={index}>
                {key}:{formData[key]}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
