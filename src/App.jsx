import React, { useState } from "react";
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    comments: false,
    candidates: false,
    offers: false,
    pushnotifications: "",
  });

  function changeHandler(event) {
    // console.log(event);
    let { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Complete Data Recieved From Form",formData);
  }

  return (
    <form className="text-center mt-4" onSubmit={submitHandler}>
      <label htmlFor="firstName" className="font-bold">
        First Name :-{" "}
      </label>
      <input
        className="borderClass"
        onChange={changeHandler}
        type="text"
        placeholder="First Name"
        name="firstName"
        id="firstName"
        value={formData.firstName}
      />
      <br />
      <br />
      <label htmlFor="lastName" className="font-bold">
        Last Name :-{" "}
      </label>
      <input
        className="borderClass "
        onChange={changeHandler}
        type="text"
        placeholder="Last Name"
        name="lastName"
        id="lastName"
        value={formData.lastName}
      />
      <br />
      <br />
      <label htmlFor="email" className="font-bold">
        Email :-{" "}
      </label>
      <input
        className="borderClass "
        onChange={changeHandler}
        type="email"
        placeholder="abc@gmail.com"
        name="email"
        id="email"
        value={formData.email}
      />
      <br />
      <br />
      <label className="font-bold" htmlFor="country">
        Country :-{" "}
      </label>
      <select
        onChange={changeHandler}
        className="borderClass"
        value={formData.country}
        name="country"
        id="country"
      >
        <option value="India">India</option>
        <option value="Afganistan">Afganistan</option>
        <option value="Bali">Bali</option>
      </select>
      <br />
      <br />
      <h2 className="font-bold mt-2">Recieve Emails For :- </h2>
      <div className="flex gap-3 justify-center ">
        <label htmlFor="comments">Comments </label>
        <input
          onChange={changeHandler}
          type="checkbox"
          checked={formData.comments}
          name="comments"
          id="comments"
        />
        <label htmlFor="candidates">Candidates </label>
        <input
          onChange={changeHandler}
          type="checkbox"
          checked={formData.candidates}
          name="candidates"
          id="candidates"
        />
        <label htmlFor="offers">Offers</label>
        <input
          onChange={changeHandler}
          type="checkbox"
          name="offers"
          checked={formData.offers}
          id="offers"
        />
      </div>
      <br />
      <br />
      <h2 className="font-bold">Push Notifications For :- </h2>
      <div className="flex justify-center gap-2">
        <label htmlFor="everything">Everything</label>
        <input
          type="radio"
          id="everything"
          name="pushnotifications"
          onChange={changeHandler}
          value="everything"
        />
        <br />
        <label htmlFor="somenotifications">Some Notifications</label>
        <input
          type="radio"
          id="somenotifications"
          name="pushnotifications"
          onChange={changeHandler}
          value="somenotifications"
        />
        <br />
        <label htmlFor="nonotifications">No Notifications</label>
        <input
          type="radio"
          id="nonotifications"
          name="pushnotifications"
          onChange={changeHandler}
          value="nonotifications"
        />
      </div>
      <br /> <br />
      <button type="submit" className="border-2 transition-all duration-300 ease-in-out rounded-md shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-gray-400 text-white font bold hover:bg-gray-600 px-6 py-2">
        Submit
      </button>
    </form>
  );
}

export default App;
