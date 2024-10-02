import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <div
          className="hero min-h-screen mb-8"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-3">
          {products.map((i, index) => {
            return (
              <div key={index} className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img src={i.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{i.title}</h2>
                  <p>{i.description}</p>
                  <div className="card-actions justify-end">
                    <p>{i.price}</p>
                    <div className="badge badge-outline">{i.category}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
