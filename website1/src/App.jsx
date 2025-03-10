import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");
  return (
    <>
      <div className="count" style={{ margin: " 10px 30px" }}>
        <h1>count app</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>

      <hr />

      <div style={{marginTop: "50px"}}>
        <div className="text" style={{width: "40%", marginLeft:" 20px", textAlign: " justify"}}>
          {text && (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
              nobis, expedita, beatae exercitationem quibusdam doloribus
              deleniti assumenda repudiandae illo magnam quidem voluptate
              numquam tenetur facere laborum esse eius officia! Rem.
            </p>
          )}
        </div>
        <div className="btn"style={{marginLeft: "20px"}}>
          <button style={{ margin: "5px", padding: " 10px 20px"}}
            onClick={() => setText(true)}>
            ON
          </button>
          <button style={{ margin: "5px", padding: " 10px 20px"}}
            onClick={() => setText(false)}>
            OFF
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
