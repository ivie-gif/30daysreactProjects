// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// export class App extends Component {
//   // declaring initial state
//   state = {
//     firstName: '',
//     lastName: '',
//     country: '',
//     title: '',
//   }
//   handleChange = (e) => {
//     /*
//     we can get the name and value like this: e.target.name, e.target.value
//     but we can also destructure  name and value from e.target
//     const name = e.target.name
//     const value = e.target.value
//     */
//     const { name, value } = e.target
//     // [variablename] to use a variable name as a key in an object
//     // name refers to the name attribute of the input elements
//     this.setState({ [name]: value })
//   }
//   handleSubmit = (e) => {
//     /*
//      e.preventDefault()
//       stops the default behavior of form element
//      specifically refreshing of page
//      */
//     e.preventDefault()

//     /*
//      the is the place where we connect backend api
//      to send the data to the database
//      */

//     // console.log(this.state)
//   }

//   render() {
//     // accessing the state value by destrutcturing the state
//     const { firstName, lastName, title, country } = this.state
//     return (
//       <div className='App'>
//         <h3>Add Student</h3>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <input
//               type='text'
//               name='firstName'
//               placeholder='First Name'
//               value={firstName}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <input
//               type='text'
//               name='lastName'
//               placeholder='Last Name'
//               value={lastName}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <input
//               type='text'
//               name='country'
//               placeholder='Country'
//               value={country}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <input
//               type='text'
//               name='title'
//               placeholder='Title'
//               value={title}
//               onChange={this.handleChange}
//             />
//           </div>

//           <button class='btn btn-success'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

import React, { useState } from "react";
import ReactDOM from "react-dom";

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
