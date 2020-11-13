import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {


  const history = useHistory();

  const routeToShop = () => {
    console.log(history, "HISTORY");
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://gimmedelicious.com/wp-content/uploads/2014/03/Cauliflower-Crust-Pizza-1-500x500.jpg"
        alt=""
      />
      <button onClick={routeToShop} className="pizza-button">
        Order Pizza
      </button>

      <div className='gallery-header'>
          <h2> Order All The Pizza</h2>
          <div>
          <img
          src='https://image.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-260nw-1060535249.jpg'/>
          <p>Diagonal Pizza</p>
          </div>
          <div>
          <img
          src='https://image.shutterstock.com/image-photo/concept-promotional-flyer-poster-restaurants-260nw-1060535249.jpg'/>
          <p>Diagonal Pizza</p>
          </div>
          
      </div>
    </div>
  );
}