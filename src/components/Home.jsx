import React, { useState } from "react";
import "../style/Home.css"; // Import the CSS file for styling
import { products } from "../assets/data";

const filterDailyBestSells = ["Featured", "Popular", "New added"];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(0);

  const filteredProducts =
    activeFilter === 0
      ? products.filter((item) => item.productHighlight === "Featured")
      : products.filter(
          (item) => item.productHighlight === filterDailyBestSells[activeFilter]
        );

  return (
    <>
      <section className="banner">
        <img src="./images/banner/Banner.png" alt="" className="banner_img" />
        <div className="banner_btn">
          <button>
            <img src="./images/icon/Arrow-right.svg" alt="" />
            <span>Order Now</span>
          </button>
        </div>
      </section>
      <section className="popular_categories">
        <div className="popular_categories_title">
          <span>CUSTOMER FAVORITES</span>
          <h2>Popular Categories</h2>
        </div>
        <div className="popular_categories_list">
          <div className="popular_categories_item">
            <div className="img_wapper">
              <img src="./images/product/food1.png" alt="" />
            </div>

            <h3>Main Dish</h3>
            <span>86 dishes</span>
          </div>
          <div className="popular_categories_item">
            <div className="img_wapper">
              <img src="./images/product/food2.png" alt="" />
            </div>
            <h3>Break Fast</h3>
            <span>12 break fast</span>
          </div>
          <div className="popular_categories_item">
            <div className="img_wapper">
              <img src="./images/product/food3.png" alt="" />
            </div>
            <h3>Dessert</h3>
            <span>48 dessert</span>
          </div>
          <div className="popular_categories_item">
            <div className="img_wapper">
              <img src="./images/product/food4.png" alt="" />
            </div>
            <h3>Browse All</h3>
            <span>255 items</span>
          </div>
          <div className="popular_categories_item">
            <div className="img_wapper">
              <img src="./images/product/food5.png" alt="" />
            </div>
            <h3>Breakfast Food</h3>
            <span>205 items</span>
          </div>
        </div>
      </section>
      <section className="daily_best_sells">
        <div className="daily_best_sells_title">
          <h2>Daily Best Sells</h2>
          <div className="daily_best_sells_filter">
            <ul>
              {filterDailyBestSells.map((item, index) => (
                <li
                  key={index}
                  className={activeFilter === index ? "active" : ""}
                  onClick={() => setActiveFilter(index)}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="daily_best_sells_list">
          <div className="daily_best_sells_banner">
            <img src="./images/banner/banner2.png" alt="" />
            <div className="daily_best_sells_banner-btn">
              <button>
                <span>Shop Now</span>
                <img src="./images/icon/Arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
          {filteredProducts.map((products) => (
            <div className="daily_best_sells_item" key={products.id}>
              <img src={products.productImage} alt="" />
              <h3>{products.productName}</h3>
              <div className="daily_best_sells_item-rating">
                {[...Array(products.productRating)].map((_, index) => (
                  <img src="./images/icon/star.svg" alt="" key={index} />
                ))}
              </div>
              <span className="daily_best_sells_item_price">
                ${products.productPrice}
              </span>
              <p>
                Sold: {products.productSell}/{products.productQuantity}
              </p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
