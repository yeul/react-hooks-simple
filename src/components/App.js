import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
      <div>
        <button
          className="ui red basic button"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="ui pink basic button"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};

export default App;
