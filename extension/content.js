function hideSoldOut() {
	var products = document.querySelectorAll(
		"#homepage-products .product-grid-item"
	);

	if (products) {
		products.forEach(function(el) {
			var price = el.querySelector(".price");
			if (price.innerHTML.includes("SOLD OUT")) {
				el.classList.add("soldout");
			}
		});
	}
}

document.addEventListener("DOMContentLoaded", hideSoldOut());
window.onscroll = function() {
	hideSoldOut();
};
