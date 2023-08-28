import React, { useState } from "react";

const options = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];

const optionsValues = options.map(({ value, label }) => {
  return <option value={value}> {label} </option>;
});

export const App = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleFirstname = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFirstName(value);
  };

  const handleMiddlename = (e) => {
    const value = e.target.value;
    setMiddleName(value);
  };

  const handleLastname = (e) => {
    const value = e.target.value;
    setLastName(value);
  };

  const handleEmailAddress = (e) => {
    const value = e.target.value;
    setEmailAddress(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>All Student Details</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="label" style={{ fontWeight: "bold" }}>
          {" "}
          First Name:{" "}
        </label>
        <br />
        <input
          type="text"
          name="first name"
          placeholder="Enter First name"
          style={{ marginTop: "7px", marginBottom: "7px" }}
          value={firstName}
          onChange={handleFirstname}
        />
        <br />
        <label htmlFor="label" style={{ fontWeight: "bold" }}>
          {" "}
          Middle Name:{" "}
        </label>
        <br />
        <input
          type="text"
          name="middle name"
          placeholder="Enter Middle name"
          style={{ marginTop: "7px", marginBottom: "7px" }}
          value={middleName}
          onChange={handleMiddlename}
        />
        <br />
        <label htmlFor="label" style={{ fontWeight: "bold" }}>
          {" "}
          Last Name:{" "}
        </label>
        <br />
        <input
          type="text"
          name="last name"
          placeholder="Enter Last name"
          style={{ marginTop: "7px", marginBottom: "7px" }}
          value={lastName}
          onChange={handleLastname}
        />
        <br />
        <label htmlFor="label" style={{ fontWeight: "bold" }}>
          {" "}
          Email Address:{" "}
        </label>
        <br />
        <input
          type="email"
          name="email address"
          placeholder="Enter Email Address"
          style={{ marginTop: "7px", marginBottom: "7px" }}
          value={emailAddress}
          onChange={handleEmailAddress}
        />
        <br />
        <label htmlFor="Phone" style={{ fontWeight: "bold" }}>
          {" "}
          Phone Number:{" "}
        </label>
        <br />
        <input
          type="tel"
          name="tel num"
          placeholder="Enter Phone Number"
          style={{ marginTop: "7px", marginBottom: "7px" }}
        />
        <br />
        <label htmlFor="DateOfBirth" style={{ fontWeight: "bold" }}>
          {" "}
          Date of Birth:{" "}
        </label>
        <br />
        <input
          type="date"
          name="DOB"
          placeholder="Enter D-O-B"
          style={{ marginTop: "7px", marginBottom: "7px" }}
        />
        <br />
        <label htmlFor="FavCol" style={{ fontWeight: "bold" }}>
          {" "}
          Favourite Color:{" "}
        </label>
        <br />
        <input
          type="color"
          id="color"
          name="color"
          style={{ marginTop: "7px", marginBottom: "7px" }}
        />
        <br />
        <label htmlFor="Weight" style={{ fontWeight: "bold" }}>
          {" "}
          Weight:{" "}
        </label>
        <br />
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="Enter Weight in Kg"
          style={{ marginTop: "7px", marginBottom: "7px" }}
        />
        <br />
        <label htmlFor="Country" style={{ fontWeight: "bold" }}>
          {" "}
          Country:{" "}
        </label>
        <br />
        <select style={{ marginTop: "7px", marginBottom: "7px" }}>
          {optionsValues}
        </select>
        <br />
        <label htmlFor="Gender" style={{ fontWeight: "bold" }}>
          {" "}
          Gender
        </label>
        <br />
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          style={{ marginTop: "7px", marginBottom: "7px" }}

          // checked={gender === 'Female'}
        />
        <label htmlFor="female">Female</label>
        <br />
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          style={{ marginTop: "7px", marginBottom: "7px" }}

          // checked={gender === 'Female'}
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          id="other"
          name="gender"
          value="Other"
          style={{ marginTop: "7px", marginBottom: "7px" }}

          // checked={gender === 'Female'}
        />
        <label htmlFor="male">Other</label>
        <br />
        <label htmlFor="selectSkills" style={{ fontWeight: "bold" }}>
          Select your skills
        </label>
        <br />
        <input
          type="checkbox"
          id="html"
          name="html"
          style={{ marginTop: "7px", marginBottom: "7px" }}
        />
        <label htmlFor="html">HTML</label>
        <br />
        <input
          type="checkbox"
          id="css"
          name="css"
          style={{ marginTop: "7px", marginBottom: "7px" }}
        />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="checkbox"
          id="javascript"
          name="javascript"
          style={{ marginTop: "7px", marginBottom: "7px" }}
        />
        <label htmlFor="javascript">JavaScript</label>
        <br />
        <label htmlFor="bio" style={{ fontWeight: "bold" }}>
          Bio
        </label>{" "}
        <br />
        <textarea
          id="bio"
          name="bio"
          //   value={bio}
          //   onChange={this.handleChange}
          cols="120"
          rows="10"
          placeholder="Write about yourself ..."
        />
        <div>
          <input type="file" name="file" />
        </div>
        <br />
        <button
          type="submit"
          style={{
            border: "none",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#61dbfb",
            padding: "15px 63px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
