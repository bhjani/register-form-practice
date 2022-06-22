import "./register-user.css";
import React, { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    // alert(JSON.stringify(e.target.value));
  };

  const handleOnChange = (e, reset) => {
    if (reset) {
      setName("");
    } else {
      setName(e.target.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          First Name:
          <br />
          <input
            onChange={handleOnChange}
            placeholder="name"
            className="custom-input"
            required
            type="text"
            name="name"
            maxLength="8"
            value={name}
          />
        </div>
        <div>
          Last Name:
          <br />
          <input className="custom-input" type="text" name="last-name" />
        </div>
        <div>
          Email:
          <br />
          <input className="custom-input" required type="email" name="email" />
        </div>
        <div>
          <label>
            age:
            <input type="number" min="18" max="60" name="age" />
          </label>
        </div>
        <div>
          Gender:
          <br />
          <input type="radio" defaultChecked value="male" /> male
          <input type="radio" value="female" /> female
          <input type="radio" value="other" /> other
        </div>
        <div>
          Birth Date:
          <br />
          <input type="date" name="birth-date" />
        </div>
        <div>
          Security Questions:
          <br />
          <select className="custom-input" name="security-que">
            <option value="First school name?">First school name?</option>
            <option value="First pat name?">First pat name?</option>
            <option value="Favourite movie name?">Favourite movie name?</option>
          </select>
          <br />
          <textarea className="custom-input" name="ans" />
        </div>
        <div>
          <input type="submit" value="Register" />
          <input
            type="reset"
            value="Reset"
            onChange={handleOnChange.bind(this, true)}
          />
        </div>
      </form>
    </>
  );
}

export default UserForm;
