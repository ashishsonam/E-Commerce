import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Fire TV Stick Lite"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61ME1vElBKL._SL1000_.jpg"
            rating={5}
          />
          <Product
            title="OnePlus Nord 5G (Gray Ash, 12GB RAM, 256GB Storage)"
            price={90.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71-8y4L6jKL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg"
            rating={4}
          />
          <Product
            title="OnePlus Bullets Wireless Z in-Ear Bluetooth Earphones with Mic (Black)"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/616bhfyXimL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung 32 Inch UHD Sleek Curved Monitor with Three Side Bezel Less & 1 Billion Colors - LU32R590CWWXXL"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81ncZ64JDCL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
