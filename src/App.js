import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [subscription, setSubscription] = useState("");
  const [updates, setUpdates] = useState("");
  const [comment, setCommment] = useState("");
  const [formData, setFormData] = useState(false);

  const interestHandler = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && email && interests && subscription && updates) {
      setFormData(true);
    }
  };

  return (
    <div className="App">
      <h1>Subscription Form</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="fullName">Full Name: </label>
        <br />
        <input
          required
          id="fullName"
          onChange={(event) => setName(event.target.value)}
        />
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <br />
        <input
          required
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br /> <br />
        <label htmlFor="subscription">Subscription Plan: </label>
        <br />
        <select
          required
          id="subscription"
          onChange={(event) => setSubscription(event.target.value)}
        >
          <option value="">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Ultimate">Ultimate</option>
        </select>
        <br /> <br />
        <label htmlFor="interests">Interests: </label> <br />
        <input
          id="interests"
          type="checkbox"
          value="Technology"
          onChange={interestHandler}
        />
        Technology
        <br />
        <input
          id="interests"
          type="checkbox"
          value="Fitness"
          onChange={interestHandler}
        />
        Fitness <br />
        <input
          id="interests"
          type="checkbox"
          value="Cooking"
          onChange={interestHandler}
        />
        Cooking <br /> <br />
        <label htmlFor="updates">Want to receive updates: </label> <br />
        <input
          id="updates"
          type="radio"
          value="Yes"
          name="updates"
          onChange={(event) => setUpdates(event.target.value)}
        />
        Yes <br />
        <input
          id="updates"
          type="radio"
          value="No"
          name="updates"
          onChange={(event) => setUpdates(event.target.value)}
        />
        No
        <br /> <br />
        <label id="comments">Comments: </label>
        <br />
        <textarea
          id="comments"
          onChange={(event) => setCommment(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Subscribe</button>
        <br />
        <br />
      </form>
      <br /> <br />
      {formData && (
        <div>
          <p>Full Name: {name}</p>
          <p>Email: {email}</p>
          <p>Subscription plan: {subscription}</p>
          <p>Interests: {interests.join(", ")}</p>
          <p>Want to receive Updates: {updates}</p>
          <p>Comments: {comment ? `${comment}` : "none"}</p>
        </div>
      )}
    </div>
  );
}
