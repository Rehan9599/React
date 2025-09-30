import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.contact}</p>
      <p>{props.email}</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      contact="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      contact="+987 654 321"
      email="jack@nowhere.com"
    />
  </div>
);
