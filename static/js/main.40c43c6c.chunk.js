(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/carshop2.a24a6cd0.png"},31:function(e,t,a){e.exports=a.p+"static/media/search2.4bab11ab.png"},32:function(e,t,a){e.exports=a(57)},37:function(e,t,a){},39:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),i=a.n(c),o=(a(37),a(16)),u=a(1),s=a(2),l=a(4),d=a(3),p=a(13),m=a(5),v=a(6),f=a.n(v),h=a(11),g=(a(39),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.productDetails,a=e.addToCart,r=t.thumbnail,c=t.title,i=t.price,o=t.id,u=t.shipping.free_shipping;return n.a.createElement("li",{"data-testid":"product",className:"product-item"},n.a.createElement("img",{src:r,alt:c}),u&&n.a.createElement("span",{className:"free-shipping-container","data-testid":"free-shipping"},"Frete Gr\xe1tis"),n.a.createElement("div",{className:"product-card-info"},n.a.createElement("h3",null,c),n.a.createElement(p.b,{to:"/productdetails/".concat(o),"data-testid":"product-detail-link"},n.a.createElement("p",null,"Detalhes"))),n.a.createElement("span",null,"R$ ".concat(i)),n.a.createElement("button",{"data-testid":"product-add-to-cart",type:"button",onClick:function(){return a(t)}},"Adicionar ao Carrinho"))}}]),a}(r.Component)),b=(a(48),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.products,r=t.addToCart,c=0===a.length,i=n.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria.");return n.a.createElement("div",{className:"search-container"},c?i:(e=a,n.a.createElement("ul",null,e.map((function(e){return n.a.createElement(g,{addToCart:r,key:e.id,productDetails:e})})))))}}]),a}(r.Component));function E(){return(E=Object(h.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.mercadolibre.com/sites/MLB/categories",e.next=3,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return O.apply(this,arguments)}function O(){return(O=Object(h.a)(f.a.mark((function e(t,a){var r,n,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t?"category=".concat(t):"q=".concat(a),t&&a&&(r="category=".concat(t,"&q=").concat(a)),n="https://api.mercadolibre.com/sites/MLB/search?".concat(r),e.next=5,fetch(n);case 5:return c=e.sent,i=c.json(),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(f.a.mark((function e(t){var a,r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.mercadolibre.com/items/".concat(t),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(f.a.mark((function e(t){var a,r,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.mercadolibre.com/items/".concat(t,"/description"),e.next=3,fetch(a);case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.plain_text);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(49);var N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={categories:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){return E.apply(this,arguments)})().then((function(t){return e.setState({categories:t})}))}},{key:"render",value:function(){var e=this.props,t=e.handleCategoryClick,a=e.categoryFilter,r=this.state.categories;return n.a.createElement("div",{className:"category-container"},n.a.createElement("span",null,"Categorias"),n.a.createElement("div",{className:"category-options"},r.map((function(e){return n.a.createElement("button",{className:a===e.id?"selected-category-btn":"default-category-btn",type:"button",key:e.id,"data-testid":"category",onClick:function(){return t(e.id)}},e.name)}))))}}]),a}(r.Component),S=(a(50),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"horizontal-bar"}," ")}}]),a}(r.Component)),I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).pageLoading=function(t){e.setState({loadingSearch:t})},e.applyCategoryFilter=function(t,a){return t===a?(e.setState({categoryFilter:void 0}),!1):(e.setState({categoryFilter:a}),!0)},e.searchHandler=function(){var t=Object(h.a)(f.a.mark((function t(a){var r,n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state.categoryFilter,n=500,e.pageLoading(!0),!e.applyCategoryFilter(r,a)){t.next=11;break}return n=0,t.next=7,y(a);case 7:c=t.sent,e.setState({products:c.results}),t.next=12;break;case 11:e.setState({products:[]});case 12:setTimeout((function(){return e.pageLoading(!1)}),n);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target;e.setState({searchInput:a.value})},e.inputFilter=Object(h.a)(f.a.mark((function t(){var a,r,n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.searchInput,n=a.categoryFilter,e.pageLoading(!0),t.next=4,y(n,r);case 4:c=t.sent,e.setState({products:c.results}),e.pageLoading(!1);case 7:case"end":return t.stop()}}),t)}))),e.state={loadingSearch:!1,searchInput:"",products:[],categoryFilter:void 0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.loadingSearch,a=e.products,r=e.categoryFilter,c=this.props.addToCart;return t?n.a.createElement(S,null):n.a.createElement("div",{className:"home-container"},n.a.createElement(N,{handleCategoryClick:this.searchHandler,categoryFilter:r}),n.a.createElement("div",{className:"side-container"},n.a.createElement("div",{className:"search-input-container"},n.a.createElement("input",{type:"text",onChange:this.handleChange,placeholder:"Digite aqui","data-testid":"query-input"}),n.a.createElement("button",{type:"submit","data-testid":"query-button",onClick:this.inputFilter},"Pesquisar")),n.a.createElement(b,{products:a,addToCart:c})))}}]),a}(r.Component),x=a(30),D=a.n(x),F=a(31),R=a.n(F),Q=(a(51),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.productCartQt;return n.a.createElement("header",{className:"header-container"},n.a.createElement("h1",null,"GP30 Online Storage"),n.a.createElement("div",{className:"header-nav"},n.a.createElement(p.b,{to:"/"},n.a.createElement("img",{src:R.a,alt:"img-search"})),n.a.createElement(p.b,{to:"/cart","data-testid":"shopping-cart-button"},n.a.createElement("img",{src:D.a,alt:"img-carshop"})),n.a.createElement("div",{"data-testid":"shopping-cart-size"},e)))}}]),a}(r.Component)),T=a(58),L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.price,r=e.thumbnail,c=e.productQt,i=e.index,o=e.handleQuantity,u=e.availableQt,s=e.order,l=void 0!==s&&s,d=e.cart,p=void 0!==d&&d,m=e.removeProduct;return n.a.createElement("li",{className:"cartProductList-container"},n.a.createElement("div",{className:"cartProduct-img-title-container"},n.a.createElement("img",{src:r,alt:t}),n.a.createElement("p",{"data-testid":"shopping-cart-product-name"},t)),n.a.createElement("div",{className:"quantity-container"},l?n.a.createElement("span",null,c):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button","data-testid":"product-decrease-quantity",onClick:function(){return o(i,"decrease",u)},disabled:1===c},"-"),n.a.createElement("span",{"data-testid":"shopping-cart-product-quantity"},c),n.a.createElement("button",{type:"button","data-testid":"product-increase-quantity",onClick:function(){return o(i,"increase")},disabled:c===u},"+"))),n.a.createElement("span",{className:"product-price"},"R$: ".concat((a*c).toFixed(2))),p&&n.a.createElement(T.a,{className:"cart-remove-btn",size:25,color:"red",onClick:function(){return m(i)}}))}}]),a}(r.Component);JSON.parse(localStorage.getItem("user_review"))||localStorage.setItem("user_review",JSON.stringify([])),JSON.parse(localStorage.getItem("cart"))||localStorage.setItem("cart",JSON.stringify([]));var P=function(){return JSON.parse(localStorage.getItem("user_review"))},M=function(e){var t,a=P();t=[].concat(Object(o.a)(a),[e]),localStorage.setItem("user_review",JSON.stringify(t))},q=function(){return JSON.parse(localStorage.getItem("cart"))},J=function(e){localStorage.setItem("cart",JSON.stringify(e))},V=(a(52),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).cartItensList=function(t){return n.a.createElement("div",{className:"checkout-resume-container"},n.a.createElement("ol",{className:"product-cart-list"},t.map((function(t,a){var r=t.productData,c=t.productQt;return n.a.createElement(L,{key:r.id,title:r.title,thumbnail:r.thumbnail,price:r.price,availableQt:r.available_quantity,productQt:c,index:a,handleQuantity:e.handleQuantity,removeProduct:e.removeProduct,cart:!0})}))),n.a.createElement("div",{className:"checkout-container"},n.a.createElement("div",{className:"total-container"},n.a.createElement("h2",null,"Total:"),n.a.createElement("span",null,"R$: ".concat(e.getTotalCart(t)))),n.a.createElement("button",{className:"checkout-btn default-button-hover default-click-button-effect",type:"button",onClick:function(){return e.checkout(t)}},"Finalizar Compra")))},e.loading=function(t){e.setState({reloadCart:t})},e.removeProduct=function(t){var a=e.props.cartWeight,r=q().filter((function(e,a){return a!==t}));J(r),e.setState({cartItems:r}),a()},e.saveNewOrder=function(e,t){localStorage.setItem("orders",JSON.stringify([].concat(Object(o.a)(e),[t])))},e.checkout=function(t){var a=e.props,r=a.history,n=a.cartWeight,c=e.getTotalCart(t),i=e.getNewId(),o={id:i,products:t,total:c},u=e.getOrderHistory();0===u.length&&localStorage.setItem("orders","[]"),e.saveNewOrder(u,o),localStorage.setItem("cart","[]"),n(),r.push("/order/".concat(i))},e.handleQuantity=function(t,a){var r=e.state.cartItems,n=e.props.cartWeight,c=r[t].productQt;"increase"===a&&(r[t].productQt=c+1),"decrease"===a&&(r[t].productQt=c-1),J(r),e.setState({cartItems:r}),n()},e.state={cartItems:[],reloadCart:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=q();this.setState({cartItems:e})}},{key:"getTotalCart",value:function(e){return e.reduce((function(e,t){var a=t.productData;return e+Number(a.price)}),0).toFixed(2)}},{key:"getNewId",value:function(){return Date.now().toString(36).toUpperCase()}},{key:"getOrderHistory",value:function(){return JSON.parse(localStorage.getItem("orders")||"[]")}},{key:"render",value:function(){var e=this.state,t=e.reloadCart,a=e.cartItems,r=n.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"),c=0===a.length;return t?n.a.createElement(S,null):n.a.createElement("div",{className:"cart-itens-container"},c?r:this.cartItensList(a))}}]),a}(r.Component)),W=a(12),B=a(21),_=a(17),U=a(59),$=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.ratingValues,a=e.productRating,r=e.reviewUpdated;return n.a.createElement("div",null,t.map((function(e){return n.a.createElement(U.a,{key:e,"data-testid":"".concat(e,"-rating"),weight:e<=a?"fill":"regular",onClick:function(){return r({target:{name:"productRating",value:e}})}})})))}}]),a}(r.Component),z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).checkForms=function(e){var t=["email","review"].every((function(t){return e[t].length>=1})),a=e.productRating>0;return t&&a},e.cleanInputForms=function(){e.setState((function(e){return{reviews:{email:"",productRating:0,review:"",productId:e.reviews.productId,isFilled:!1}}}))},e.submitBtn=function(){var t=Object(h.a)(f.a.mark((function t(a,r){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.reloadingReview,a.preventDefault(),M(r),e.cleanInputForms(),t.next=6,n();case 6:e.scrollToBottom();case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.reviewUpdated=function(t){var a=t.target,r=a.name,n=a.value;e.setState((function(t){var a;return{reviews:Object(W.a)(Object(W.a)({},t.reviews),{},(a={},Object(_.a)(a,r,n),Object(_.a)(a,"isFilled",e.checkForms(Object(W.a)(Object(W.a)({},t.reviews),{},Object(_.a)({},r,n)))),a))}}))},e.state={reviews:{email:"",productRating:0,review:"",productId:"",isFilled:!1}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.id;this.setState((function(t){return{reviews:Object(W.a)(Object(W.a)({},t.reviews),{},{productId:e})}}))}},{key:"scrollToBottom",value:function(){window.scrollTo(0,document.body.scrollHeight)}},{key:"render",value:function(){var e=this,t=this.state.reviews,a=this.props.ratingValues;return n.a.createElement("div",{className:"forms-review-container default-shadown-card"},n.a.createElement("h3",null,"Deixe sua avalia\xe7\xe3o!"),n.a.createElement("form",null,n.a.createElement("label",{className:"email-input",htmlFor:"email-input"},"E-mail:",n.a.createElement("input",{"data-testid":"product-detail-email",type:"email",name:"email",id:"email-input",placeholder:"digite seu e-mail",value:t.email,required:!0,onChange:this.reviewUpdated})),n.a.createElement($,{ratingValues:a,productRating:t.productRating,reviewUpdated:this.reviewUpdated}),n.a.createElement("div",{className:"form-review-msg"},n.a.createElement("textarea",{"data-testid":"product-detail-evaluation",name:"review",value:t.review,onChange:this.reviewUpdated}),n.a.createElement("button",{className:" default-button-hover default-click-button-effect default-button-disable",onClick:function(a){return e.submitBtn(a,t)},"data-testid":"submit-review-btn",type:"submit",disabled:!t.isFilled},"Enviar sua avalia\xe7\xe3o"))))}}]),a}(r.Component),H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.rating,a=e.ratingValues;return n.a.createElement("div",null,a.map((function(e){return n.a.createElement(U.a,{key:e,weight:e<=t?"fill":"regular"})})))}}]),a}(r.Component),G=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.review,a=t.email,r=t.productRating,c=t.review,i=e.ratingValues;return n.a.createElement("div",{className:"product-review default-shadown-card"},n.a.createElement("div",{className:"review-left-side"},n.a.createElement("p",null,a)),n.a.createElement("div",{className:"review-right-side"},n.a.createElement("div",{className:"rating-container"},n.a.createElement(H,{rating:r,ratingValues:i})),n.a.createElement("p",null,c)))}}]),a}(r.Component),A=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).storageReviews=function(){var e=P();r.setState({reviewsList:e})},r.allReviews=function(e){e.map((function(e,t){return n.a.createElement(G,{key:t,review:e})}))},r.state={reviewsList:[]},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.storageReviews()}},{key:"render",value:function(){var e=this.state.reviewsList,t=this.props,a=t.productId,r=t.ratingValues;return n.a.createElement("div",{className:"review-history-container"},e.filter((function(e){return e.productId===a})).map((function(e,t){return n.a.createElement(G,{key:t,review:e,ratingValues:r})})))}}]),a}(r.Component),K=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={picture:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.pictures,t=Object(B.a)(e,1)[0];this.setState({picture:t.url})}},{key:"setMainPicture",value:function(e){this.setState({picture:e})}},{key:"render",value:function(){var e=this,t=this.props.pictures,a=this.state.picture;return n.a.createElement("div",{className:"pictures-container"},n.a.createElement("div",{className:"mini-pictures"},t.filter((function(e,t){return t<5})).map((function(t){var a=t.id,r=t.url;return n.a.createElement("img",{key:a,src:r,alt:r,onMouseEnter:function(){return e.setMainPicture(r)}})}))),n.a.createElement("div",{className:"main-picture"},n.a.createElement("img",{src:a,alt:""})))}}]),a}(r.Component),X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.addItem;return n.a.createElement("div",{className:"product-detail-card"},n.a.createElement("div",{className:"top-container"},n.a.createElement(K,{pictures:t.pictures}),n.a.createElement("div",{className:"info-container"},n.a.createElement("h2",null,t.title),n.a.createElement("div",{className:"product-delivery-info"},"Envio: Frete ".concat(t.shipping.free_shipping?"Gr\xe1tis":"Pago")),n.a.createElement("div",{className:"product-price"},"R$: ".concat(t.price)),n.a.createElement("button",{type:"button",onClick:function(){return a(t)}},"Adicionar ao carrinho"))),n.a.createElement("div",{className:"product-description"},n.a.createElement("h3",null,"Descri\xe7\xe3o:"),n.a.createElement("p",null,t.description.length>0?t.description:"Produto sem descri\xe7\xe3o")))}}]),a}(r.Component),Y=(a(53),a(54),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).renderProductDetails=Object(h.a)(f.a.mark((function e(){var t,a,n,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.props.match.params.id,e.t0=Promise,e.next=4,j(t);case 4:return e.t1=e.sent,e.next=7,k(t);case 7:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=11,e.t0.all.call(e.t0,e.t3);case 11:a=e.sent,n=Object(B.a)(a,2),c=n[0],i=n[1],r.setState({productDetail:Object(W.a)(Object(W.a)({},c),{},{description:i}),productDetailLoading:!1,productId:t,reloadReviewDisplay:!0});case 16:case"end":return e.stop()}}),e)}))),r.reloadingReview=function(){r.setState({reloadReviewDisplay:!1},(function(){return r.setState({reloadReviewDisplay:!0})}))},r.state={productDetail:{},productDetailLoading:!0,productId:"",ratingValues:[1,2,3,4,5]},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.renderProductDetails()}},{key:"render",value:function(){var e=this.state,t=e.productDetail,a=e.productDetailLoading,r=e.productId,c=e.reloadReviewDisplay,i=e.ratingValues,o=this.props.addToCart;return a?n.a.createElement(S,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"product-detail-container"},n.a.createElement(X,{product:t,addItem:o})),n.a.createElement("div",{className:"review-container"},n.a.createElement(z,{id:r,reloadingReview:this.reloadingReview,ratingValues:i}),c?n.a.createElement(A,{productId:r,ratingValues:i}):n.a.createElement("p",null,"Carregando")))}}]),a}(r.Component)),Z=(a(55),a(56),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.order;return n.a.createElement("div",{className:"order-display default-shadown-card "},n.a.createElement("h2",null,"N\xba Pedido: ".concat(e.id)),n.a.createElement("ol",null,e.products.map((function(e){var t=e.productData,a=e.productQt;return n.a.createElement(L,Object.assign({key:t.id},t,{productQt:a,order:!0}))}))),n.a.createElement("footer",null,n.a.createElement("h2",null,"Total:"),n.a.createElement("span",null,"R$: ".concat(e.total))))}}]),a}(r.Component)),ee=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={loadingPage:!0,order:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match.params.id,a=e.history,r=this.getOrderData(t);if(!r)return a.push("/pagenotfound");this.setState({order:r}),this.fakeLoading()}},{key:"getOrderData",value:function(e){return JSON.parse(localStorage.getItem("orders")).find((function(t){return t.id===e}))}},{key:"fakeLoading",value:function(){setTimeout(this.setState({loadingPage:!1}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.loadingPage,a=e.order;return t?n.a.createElement(S,null):a&&n.a.createElement(Z,{order:a})}}]),a}(r.Component),te=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).cartWeight=function(){var e=q().map((function(e){return e.productQt})).reduce((function(e,t){return e+t}),0);r.setState({productCartQt:e})},r.cartCheck=function(e){var t=q(),a=t.findIndex((function(t){return t.productData.id===e.id}));if(a<0)return[].concat(Object(o.a)(t),[{productData:e,productQt:1}]);var r=t[a].productQt;return t[a].productQt=r+1,t},r.addToCart=function(e){var t=r.cartCheck(e);J(t),r.setState({cartItems:q()}),r.cartWeight()},r.state={cartItems:[],productCartQt:0},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({cartItems:q()}),this.cartWeight()}},{key:"render",value:function(){var e=this,t=this.state,a=t.cartItems,r=t.productCartQt;return n.a.createElement(p.a,{basename:"trybe-project-frontend-online-store"},n.a.createElement(Q,{productCartQt:r}),n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/productdetails/:id",render:function(t){return n.a.createElement(Y,Object.assign({},t,{addToCart:e.addToCart}))}}),n.a.createElement(m.a,{exact:!0,path:"/order/:id",render:function(e){return n.a.createElement(ee,e)}}),n.a.createElement(m.a,{exact:!0,path:"/cart",render:function(t){return n.a.createElement(V,Object.assign({},t,{cartItems:a,cartWeight:e.cartWeight}))}}),n.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(I,Object.assign({},t,{addToCart:e.addToCart}))}})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.40c43c6c.chunk.js.map