let togglebutton = document.getElementById("myToggle");

let basicPrice = document.getElementById("basic-price");
let professionalPrice = document.getElementById("professional-price");
let masterPrice = document.getElementById("master-price");

let subscriptionPeriod = "Annually";
function onClick() {
	if (subscriptionPeriod === "Annually") {
		subscriptionPeriod = "Monthly";
		basicPrice.innerHTML = "<section class='dollar'>$</section>19.99";

		professionalPrice.innerHTML = "<section class='dollar'>$</section>	24.99";

		masterPrice.innerHTML = "<section class='dollar'>$</section>39.99";
	} else {
		subscriptionPeriod = "Annually";
		basicPrice.innerHTML = "<section class='dollar'>$</section>199.99";
		professionalPrice.innerHTML = "<section class='dollar'>$</section>249.99";
		masterPrice.innerHTML = "<section class='dollar'>$</section>399.99";
	}
}

togglebutton.addEventListener("click", onClick);
// togglebutton.onclick();
