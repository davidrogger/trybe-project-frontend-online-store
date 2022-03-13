const PRODUCT_REVIEW = 'user_review';

// Lógica reaproveitada do projeto TrybeTunes, arquivo favoriteSongsAPI.js
if (!JSON.parse(localStorage.getItem(PRODUCT_REVIEW))) {
  localStorage.setItem(PRODUCT_REVIEW, JSON.stringify([]));
}
