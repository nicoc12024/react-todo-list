import "../stylesheets/Form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
    };

    props.onSubmit(newTask);
    setInput("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter new task"
        name="text"
        required
        onChange={handleChange}
        value={input}
      />
      <button type="submit" className="addTask">
        Add
      </button>
    </form>
  );
}
export default Form;
