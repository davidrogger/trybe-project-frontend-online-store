const PRODUCT_REVIEW_KEY = 'user_review';
const CART_ITEMS_KEY = 'cart';

// Lógica reaproveitada do projeto TrybeTunes, arquivo favoriteSongsAPI.js
if (!JSON.parse(localStorage.getItem(PRODUCT_REVIEW_KEY))) {
  localStorage.setItem(PRODUCT_REVIEW_KEY, JSON.stringify([]));
}

if (!JSON.parse(localStorage.getItem(CART_ITEMS_KEY))) {
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify([]));
}

export const readProductReview = () => JSON.parse(localStorage
  .getItem(PRODUCT_REVIEW_KEY));

const saveProductReview = (productReview) => localStorage
  .setItem(PRODUCT_REVIEW_KEY, JSON.stringify(productReview));

export const addReview = (review) => {
  const reviewHistoric = readProductReview();
  saveProductReview([...reviewHistoric, review]);
};

export const readCartInStorage = () => JSON.parse(localStorage.getItem(CART_ITEMS_KEY));

export const addCartInStorage = (cartItems) => {
  const prevCart = readCartInStorage();
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify([...prevCart, cartItems]));
};
