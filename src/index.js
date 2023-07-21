// Using Functional Component

// import { useState } from "react";
// import ReactDOM from "react-dom";

// const App = () => {
//   const[image, setImage] = useState("https://th.bing.com/th?id=OIP.T7HyhZlj0rqF4YfdC-WzCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")
//   return (
//     <div className="APP">
//       <h1>30 days of React</h1>
//       <h3>Changing images using state management</h3>
//       <img src={image}/>
//       <div>
//         <button onClick={() => setImage(image == "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg" ? "https://th.bing.com/th?id=OIP.uEiO9QWnzyv11o-hvortzQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" : "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg" )}>Change Images</button>
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);



import { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const[image, setImage] = useState("https://th.bing.com/th?id=OIP.T7HyhZlj0rqF4YfdC-WzCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2")
  
const handleImageChange = () => {
  setImage(image == "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg" ? "https://th.bing.com/th?id=OIP.uEiO9QWnzyv11o-hvortzQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" : "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg"  )
}

  return (
    <div className="APP">
      <h1>30 days of React</h1>
      <h3>Changing images using state management</h3>
      <img src={image}/>
      <div>
        <button onClick={handleImageChange}>Change Images</button>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);