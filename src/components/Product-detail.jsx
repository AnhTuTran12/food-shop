import React, { useState } from "react";

import "../style/Product-detail.css";

const ProductDetail = ({ product, category, onBack }) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="product_detail">
      <button onClick={onBack}>Back</button>
      <div className="product_detail_container">
        <div className="product_image">
          <img src={product.productImage} alt="" />
          <div className="product_album">
            {product.productAlbum.map((item, index) => (
              <img src={item} alt="" key={index} />
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
              <span className="product_value">{product.productSpeciality}</span>
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
    </div>
  );
};

export default ProductDetail;
