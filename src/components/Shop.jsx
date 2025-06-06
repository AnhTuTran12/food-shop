import React, { useState } from "react";
import "../style/Shop.css";
import { category, products } from "../assets/data";
import { Range } from "react-range";
import ProductDetail from "./Product-detail";

const MIN = 0;
const MAX = 5000;
const filterSortOption = ["All", "Featured", "Popular", "New added"];

const Shop = () => {
  const [price, setPrice] = useState([0, 5000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("All");
  const [filterCateogy, setFilterCategory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  let sortedProducts = [...products];

  if (filterCateogy.length > 0) {
    sortedProducts = sortedProducts.filter((item) =>
      filterCateogy.includes(item.productCategory_id)
    );
  }

  if (price) {
    sortedProducts = sortedProducts.filter(
      (item) => item.productPrice >= price[0] && item.productPrice <= price[1]
    );
  }

  if (sortOption != filterSortOption[0]) {
    sortedProducts = sortedProducts.filter(
      (item) => item.productHighlight === sortOption
    );
  }

  const productsPerPage = 9;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  return (
    <>
      <section className="shop">
        <div className="shop_container">
          <div className="shop_left">
            <div className="shop_filter_category shop_filter">
              <h3>Product Category</h3>
              <ul className="shop_filter_nav">
                {category.map((item, index) => (
                  <li key={index}>
                    <label htmlFor={item.id} className="checkbox_label">
                      <input
                        type="checkbox"
                        name=""
                        id={item.id}
                        checked={filterCateogy.includes(item.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilterCategory([...filterCateogy, item.id]);
                          } else {
                            setFilterCategory(
                              filterCateogy.filter((id) => id !== item.id)
                            );
                          }
                        }}
                      />
                      <span>{item.categoryName}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shop_filter_price shop_filter">
              <h3>Filter By Price</h3>
              <div className="custom_range">
                <Range
                  step={1}
                  min={MIN}
                  max={MAX}
                  values={price}
                  onChange={setPrice}
                  renderTrack={({ props, children }) => {
                    const { key, ...rest } = props;
                    const { min, max } = props;
                    const left = ((price[0] - MIN) / (MAX - MIN)) * 100;
                    const right = ((price[1] - MIN) / (MAX - MIN)) * 100;
                    return (
                      <div key={key} {...rest} className="custom_range_track">
                        <div
                          className="custom_range_track_selected"
                          style={{
                            left: `${left}%`,
                            width: `${right - left}%`,
                          }}
                        />
                        {children}
                      </div>
                    );
                  }}
                  renderThumb={({ props }) => {
                    const { key, ...rest } = props;
                    return (
                      <div
                        key={key}
                        {...rest}
                        className="custom_range_thumb"
                      ></div>
                    );
                  }}
                ></Range>
                <div className="custom_range_value">
                  <span>Price:</span>
                  <b>
                    {price[0]} - {price[1]}
                  </b>
                </div>
              </div>
              <div className="shop_filter_price_btn">
                <button onClick={() => setPrice([0, 5000])}>Reset</button>
              </div>
            </div>
            <div className="shop_filter_weight shop_filter">
              <h3>Weight</h3>
              <ul className="shop_filter_nav">
                <li>
                  <label className="checkbox_label">
                    <input type="checkbox" name="" id="" disabled />
                    <span>2kg Pack</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox_label">
                    <input type="checkbox" name="" id="" disabled />
                    <span>20kg Pack</span>
                  </label>
                </li>
                <li>
                  <label className="checkbox_label">
                    <input type="checkbox" name="" id="" disabled />
                    <span>30kg Pack</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop_right">
            <div className="shop_list">
              <div className="shop_list_sort">
                <div>
                  <span>Sort by: </span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="shop_sort_select"
                  >
                    {filterSortOption.map((option, index) => (
                      <option value={option} key={index}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {selectedProduct ? (
                <ProductDetail
                  product={selectedProduct}
                  category={category}
                  onBack={() => setSelectedProduct(null)}
                />
              ) : (
                <>
                  <div className="shop_list_container">
                    {currentProducts.length > 0 ? (
                      currentProducts.map((product, index) => (
                        <div
                          className="shop_item"
                          key={index}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <img
                            src={product.productImage}
                            alt=""
                            className="product_image"
                          />
                          <div className="product_category">
                            {category[product.productCategory_id].categoryName}
                          </div>
                          <div className="product_rating">
                            {[...Array(product.productRating)].map(
                              (_, index) => (
                                <img
                                  src="/images/icon/star.svg"
                                  alt=""
                                  key={index}
                                />
                              )
                            )}
                            <span>{product.productRating}</span>
                          </div>
                          <p className="product_name">{product.productName}</p>
                          <p className="product_price">
                            ${product.productPrice}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="notification_shop">No item</div>
                    )}
                  </div>
                  <div className="pagination">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    >
                      Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
