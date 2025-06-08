import React, { use, useState } from "react";
import "../style/Home.css"; // Import the CSS file for styling
import { products } from "../assets/data";
import { useNavigate } from "react-router-dom";

const filterDailyBestSells = ["Featured", "Popular", "New added"];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [activeButton, setActiveButton] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);

  const navigate = useNavigate();

  const filteredProducts =
    activeFilter === 0
      ? products.filter((item) => item.productHighlight === "Featured")
      : products.filter(
          (item) => item.productHighlight === filterDailyBestSells[activeFilter]
        );

  const slideShowCount = 3;

  const prevSlide = () => {
    setSlideIndex((prev) =>
      prev === 0 ? products.length - slideShowCount : prev - 1
    );
    setActiveButton("left");
  };

  const nextSlide = () => {
    setSlideIndex((prev) =>
      prev === products.length - slideShowCount ? 0 : prev + 1
    );
    setActiveButton("right");
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      exist.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

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
        <div
          className={
            "daily_best_sells_list" +
            (filteredProducts.length >= 4 ? "" : " grid-flex")
          }
        >
          <div className="daily_best_sells_banner">
            <img src="./images/banner/banner2.png" alt="" />
            <div className="daily_best_sells_banner-btn">
              <button>
                <span>Shop Now</span>
                <img src="./images/icon/Arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
          {filteredProducts.slice(0, 4).map((product) => (
            <div
              className={"daily_best_sells_item"}
              key={product.id}
              onClick={() => navigate(`/shop/${product.id}`)}
            >
              <img src={product.productImage} alt="" />
              <h3 className="product_name">{product.productName}</h3>
              <div className="product_rating">
                {[...Array(product.productRating)].map((_, index) => (
                  <img src="./images/icon/star.svg" alt="" key={index} />
                ))}
              </div>
              <span className="product_price">${product.productPrice}</span>
              <p>
                Sold: {product.productSell}/{product.productQuantity}
              </p>
              <button
                className="product_btn_buy"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="special_dishes">
        <div className="special_dishes_title">
          <span>Special Dishes</span>
          <div className="special_dishes_title-btn">
            <h2>Standout Dishes From Our Menu</h2>
            <div className="special_dishes-btn">
              <button
                className={activeButton === "left" ? "active" : ""}
                onClick={prevSlide}
              >
                <img
                  src="./images/icon/Left.svg"
                  alt=""
                  className="left_icon"
                />
              </button>
              <button
                className={activeButton === "right" ? "active" : ""}
                onClick={nextSlide}
              >
                <img
                  src="./images/icon/Left.svg"
                  alt=""
                  className="right_icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="special_dishes_list ">
          {products
            .slice(slideIndex, slideIndex + slideShowCount)
            .map((product) => (
              <div
                className="special_dishes_item"
                key={product.id}
                onClick={() => navigate(`/shop/${product.id}`)}
              >
                <div className="wishlist_icon">
                  <div></div>
                </div>
                <div className="img_wapper">
                  <img src={product.productImage} alt="" />
                </div>
                <h3>{product.productName}</h3>
                <span>{product.productDescription}</span>
              </div>
            ))}
        </div>
      </section>
      <section className="deals">
        <div className="deals_title">
          <h2>Deals Of The Day</h2>
        </div>
        <div className="deals_list">
          {products.slice(4, 8).map((product) => (
            <div
              className="deals_item"
              key={product.id}
              onClick={() => navigate(`/shop/${product.id}`)}
            >
              <img
                src={product.productImage}
                alt=""
                className="product_image"
              />
              <div className="deals_item_container">
                <h3 className="product_name">{product.productName}</h3>
                <div className="product_rating">
                  {[...Array(product.productRating)].map((_, index) => (
                    <img src="./images/icon/star.svg" alt="" key={index} />
                  ))}
                  <span>({product.productRating})</span>
                </div>
                <div className="deals_btn">
                  <span className="product_price">${product.productPrice}</span>
                  <button>
                    <img src="./images/icon/Cart.svg" alt="" />
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      Add
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="faq">
        <div className="faq_left">
          <img src="./images/banner/banner3.png" alt="" />
        </div>
        <div className="faq_right">
          <h2>Why People Choose Us?</h2>
          <div className="faq_list">
            <div className="faq_item">
              <div className="faq_item_icon">
                <img src="./images/icon/Shipper.svg" alt="" />
              </div>
              <div className="faq_item_text">
                <h3>Convenient and Reliable</h3>
                <p>
                  Whether you dine in, take out, order delivery, our service is
                  convenient, fast, and reliable, making mealtime hassle-free.
                </p>
              </div>
            </div>
            <div className="faq_item">
              <div className="faq_item_icon">
                <img src="./images/icon/Menu.svg" alt="" />
              </div>
              <div className="faq_item_text">
                <h3>Variety of Options</h3>
                <p>
                  From hearty meals to light snacks, we offer a wide range of
                  options to suit every taste and craving.
                </p>
              </div>
            </div>
            <div className="faq_item">
              <div className="faq_item_icon">
                <img src="./images/icon/Burger.svg" alt="" />
              </div>
              <div className="faq_item_text">
                <h3>Eat Burger</h3>
                <p>
                  Our burgers are grilled to perfection, with juicy patties and
                  flavorful toppings that make every bite a delicious
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="essential_promo">
        <div className="essential_promo_content">
          <h2>Stay home & get your daily needs from our shop</h2>
          <div className="essential_promo_inp">
            <input type="text" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
        <img src="./images/banner/banner4.png" alt="" />
      </section>
      <section className="ancillary_services">
        <div className="ancillary_services_list">
          <div className="ancillary_services_item">
            <img src="./images/icon/Deal.svg" alt="" />
            <div className="ancillary_services_item_text">
              <h3>Best prices & offers</h3>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className="ancillary_services_item">
            <img src="./images/icon/Cooperation.svg" alt="" />
            <div className="ancillary_services_item_text">
              <h3>Free delivery</h3>
              <p>24/7 amazing services</p>
            </div>
          </div>
          <div className="ancillary_services_item">
            <img src="./images/icon/Memo-money.svg" alt="" />
            <div className="ancillary_services_item_text">
              <h3>Great daily deal</h3>
              <p>When you sign up</p>
            </div>
          </div>
          <div className="ancillary_services_item">
            <img src="./images/icon/Diverse.svg" alt="" />
            <div className="ancillary_services_item_text">
              <h3>Wide assortment</h3>
              <p>Mega Discounts</p>
            </div>
          </div>
          <div className="ancillary_services_item">
            <img src="./images/icon/Return-product.svg" alt="" />
            <div className="ancillary_services_item_text">
              <h3>Easy returns</h3>
              <p>Within 30 days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
