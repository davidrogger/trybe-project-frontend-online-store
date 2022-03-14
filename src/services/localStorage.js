const PRODUCT_REVIEW_KEY = 'user_review';

// Lógica reaproveitada do projeto TrybeTunes, arquivo favoriteSongsAPI.js
if (!JSON.parse(localStorage.getItem(PRODUCT_REVIEW_KEY))) {
  localStorage.setItem(PRODUCT_REVIEW_KEY, JSON.stringify([]));
}

export const readProductReview = () => JSON.parse(localStorage
  .getItem(PRODUCT_REVIEW_KEY));

const saveProductReview = (productReview) => localStorage
  .setItem(PRODUCT_REVIEW_KEY, JSON.stringify(productReview));

export const addReview = (review) => {
  const reviewHistoric = readProductReview();
  saveProductReview([...reviewHistoric, review]);
};
