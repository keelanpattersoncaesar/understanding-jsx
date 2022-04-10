import React from "react";
import "./App.css";

function App() {
  const topic = "React";
  const topic2 = "JSX";
  const age = 30;
  const likes = ["Andreaaaaa", "Music", "Candy", "Sushi"];
  const pets = [
    {
      name: "Dolly",
      type: "cat",
      description: "Dolly tells great jokes and loves to be around people!",
      skills: ["fetch", "play dead", "roll over"],
      image:
        "https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg",
    },
    {
      name: "Molly",
      type: "cat",
      description:
        "Molly is a sweet and cuddly cat who loves to stretch a lot!",
      skills: ["play dead", "meow", "purr"],
      image:
        "https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg",
    },
    {
      name: "Molly's Evil Clone",
      type: "cat",
      description: "Molly's Evil Clone is a little copycat cat who loves to stretch a lot!",
      skills: ["getting the real Molly in trouble", "also play dead", "also meow", "also purr"],
      image:
        "https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg",
    },
  ];

  return (
    <div className="App">
      {/* This is how you write a comment! */}
      {/* This is JSX */}
      <h1 id="headingThing">
        {topic} and {topic2} are Awesome!
      </h1>
      <h2>I am {age} years old! </h2>

      {/* trying to map over 'likes' variable */}
      {/* likes.map(like => <h3 key={like}>{likes}</h3>)} */}

      <h2> My likes are: </h2>
      {likes.map((like, i) => (
        <li key={i}>{like}</li>
      ))}
      <h1>Check out these pets!</h1>
      <div className="container">
        <ul>
          {pets.map((pet, i) => (
            <li key={i}>
              <h1>{pet.name}</h1>
              <p>{pet.description}</p>
              <img src={pet.image}
                alt={pet.name}
                width="150px"
                height="150px"/>
              <h3 className="skillsHeading">Skills:</h3>
              <ul className="skills">
                {pet.skills.map((skill, i) => (
                  <li key={i}>
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
