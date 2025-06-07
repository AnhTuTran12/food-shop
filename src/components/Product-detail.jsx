import React, { useEffect, useState } from "react";

import "../style/Product-detail.css";

const ProductDetail = ({
  product,
  category,
  onBack,
  products,
  setSelectedProduct,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.productImage);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) =>
      prev < product.productQuantity - product.productSell
        ? prev + 1
        : product.productQuantity - product.productSell
    );
  };

  const filterProduct = products.filter(
    (item) => item.productHighlight === "Popular" && item.id !== product.id
  );

  useEffect(() => {
    setQuantity(1);
    setMainImage(product.productImage);
  }, [product]);

  return (
    <>
      <div className="product_detail">
        <button onClick={onBack} className="btn_back">
          {"<"} Back
        </button>
        <div className="product_detail_container">
          <div className="product_image">
            <img src={mainImage} alt="" className="main_image_product" />
            <div
              className="product_album"
              onMouseLeave={() => setMainImage(product.productImage)}
            >
              {product.productAlbum.map((item, index) => (
                <img
                  src={item}
                  alt=""
                  key={index}
                  onMouseEnter={() => setMainImage(item)}
                />
              ))}
            </div>
          </div>
          <div className="product_detail_content">
            <h3 className="product_name">{product.productName}</h3>
            <div className="product_rating">
              {[...Array(product.productRating)].map((_, index) => (
                <img src="/images/icon/star.svg" alt="" key={index} />
              ))}
            </div>
            <div className="product_detail_list_infor">
              <div className="product_brand product_detail_item_infor ">
                <p className="product_label">
                  Brand <span>:</span>
                </p>
                <span className="product_value">{product.productBrand}</span>
              </div>
              <div className="product_flavour product_detail_item_infor">
                <p className="product_label">
                  Flavour <span>:</span>
                </p>
                <span className="product_value">{product.productFlavour}</span>
              </div>
              <div className="product_diet_type product_detail_item_infor">
                <p className="product_label">
                  Diet Type <span>:</span>
                </p>
                <span className="product_value">{product.productDietType}</span>
              </div>
              <div className="product_weight product_detail_item_infor">
                <p className="product_label">
                  Weight <span>:</span>
                </p>
                <span className="product_value">{product.productWeight}</span>
              </div>
              <div className="product_speciality product_detail_item_infor">
                <p className="product_label">
                  Speciality <span>:</span>
                </p>
                <span className="product_value">
                  {product.productSpeciality}
                </span>
              </div>
              <div className="product_info product_detail_item_infor">
                <p className="product_label">
                  Info <span>:</span>
                </p>
                <span className="product_value">{product.productInfo}</span>
              </div>
              <div className="product_items product_detail_item_infor">
                <p className="product_label">
                  items <span>:</span>
                </p>
                <span className="product_value">
                  {product.productQuantity - product.productSell}
                </span>
              </div>
            </div>
            <p className="product_price">${product.productPrice}</p>
            <div className="product_size">
              <p className="product_label">Size/Weight :</p>
              <p></p>
            </div>
            <div className="product_toggle">
              <div className="product_quantity_select">
                <input
                  type="number"
                  name=""
                  id=""
                  min={1}
                  max={product.productQuantity - product.productSell}
                  value={quantity}
                  onChange={(e) => {
                    let val = Number(e.target.value);
                    if (val < 1) val = 1;
                    if (val > product.productQuantity - product.productSell)
                      val = product.productQuantity - product.productSell;
                    setQuantity(val);
                  }}
                />
                <div className="product_quantity_select-btn">
                  <button
                    onClick={handleIncrease}
                    disabled={
                      quantity >= product.productQuantity - product.productSell
                    }
                  >
                    +
                  </button>
                  <button onClick={handleDecrease} disabled={quantity <= 1}>
                    -
                  </button>
                </div>
              </div>
              <div className="product_btn_buy"> Add To Cart</div>
              <div className="wishlist_icon">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="product_description">
          <h3>Description</h3>
          <p>{product.productDescription}</p>
        </div>
      </div>
      <div className="popular_product">
        <div className="popular_product_title">
          <h3>Popular Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et viverra maecenas accumsan
            lacus vel facilisis.
          </p>
        </div>
        <div className="popular_product_list">
          {filterProduct.slice(0, 4).map((item, index) => (
            <div
              className="shop_item"
              key={index}
              onClick={() => setSelectedProduct(item)}
            >
              <img src={item.productImage} alt="" className="product_image" />
              <div className="product_category">
                {category[item.productCategory_id].categoryName}
              </div>
              <div className="product_rating">
                {[...Array(item.productRating)].map((_, index) => (
                  <img src="/images/icon/star.svg" alt="" key={index} />
                ))}
                <span>{item.productRating}</span>
              </div>
              <p className="product_name">{item.productName}</p>
              <p className="product_price">${item.productPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
