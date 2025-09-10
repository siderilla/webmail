document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.getElementById("menu-button");
	const navbar = document.querySelector(".navbar");
	const overlay = document.getElementById("overlay");
	const searchInput = document.getElementById("search-input");
	const searchButton = document.getElementById("search-button");

	menuButton.addEventListener("click", () => {
		navbar.classList.toggle("active");
		overlay.classList.toggle("active");
	});

	overlay.addEventListener("click", () => {
		navbar.classList.remove("active");
		overlay.classList.remove("active");
	});

	searchButton.addEventListener("click", (e) => {
		if (window.innerWidth <= 768) { // se la finestra è grande meno o uguale a 768px
			if (!searchInput.classList.contains("active")) {
				// se searchInput NON è active (cioè non è visibile)
				e.preventDefault(); // previene comportamento di default (che sarebbe button type SUBMIT)
				searchInput.classList.add("active"); // a questo punto puoi renderla active
				searchInput.focus(); // mantengo il cursore dentro l'input
			} else {
				console.log("Searching for: ", searchInput.value);
				searchForm.submit(); // finto invio
			}
		}
	});

});