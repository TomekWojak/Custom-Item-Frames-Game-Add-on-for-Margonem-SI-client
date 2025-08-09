const bag = document.getElementById("panel");
const lootWindow = document.getElementById("loots");
let panel;
let settings;
let closeBtn;
let url;

const mainWindow = document.getElementById("centerbox");
const palette = document.createElement("button");

palette.classList.add("palette-t");

const handlePanel = () => {
	if (!panel) {
		panel = document.createElement("div");
		settings = document.createElement("div");
		closeBtn = document.createElement("button");
		panel.classList.add("panel-t");
		closeBtn.classList.add("close-t");
		settings.classList.add("settings-t");
		closeBtn.setAttribute("aria-label", "Zamknij panel");
		settings.innerHTML = ` <button class="option-t" data-url="https://i.imgur.com/xQ3sdPv.png">
                <img src="https://i.imgur.com/xQ3sdPv.png" alt="Opcja ramek nr 1">
            </button>
            <button class="option-t" data-url="https://i.imgur.com/0gk9kQi.png">
                <img src="https://i.imgur.com/0gk9kQi.png" alt="Opcja ramek nr 2"></button>
            <button class="option-t" data-url="https://i.imgur.com/wgNdb8e.png">
                <img src="https://i.imgur.com/wgNdb8e.png" alt="Opcja ramek nr 3"></button>
            <button class="option-t" data-url="https://i.imgur.com/NxDcNAf.png">
                <img src="https://i.imgur.com/NxDcNAf.png" alt="Opcja ramek nr 4"></button>`;

		closeBtn.innerHTML = `<svg width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#ffffff8a">
                <path
                    d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
            </svg>`;
		panel.append(settings, closeBtn);
		mainWindow.append(panel);
	}
};

const mutationObserver = new MutationObserver((entries) => {
	entries.forEach((entry) => {
		entry.addedNodes.forEach((node) => {
			if (node.classList?.contains("panel-t")) {
				const allOptions = [...node.getElementsByClassName("option-t")];
				allOptions.forEach((option) =>
					option.addEventListener("click", () => {
						url = option.dataset.url;
						const currentItems = [
							...document.getElementsByClassName("itemHighlighter"),
						];
						currentItems.forEach((item) => {
							item.style.backgroundImage = `url('${url}')`;
							localStorage.setItem("url", url);
						});
					})
				);
				closeBtn.addEventListener("click", showSettings);
			}
		});
	});
});
mutationObserver.observe(mainWindow, { childList: true });

const showSettings = () => {
	panel.classList.toggle("active");
};
palette.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="30" fill="#00000088"><path d="M576 320C576 320.9 576 321.8 576 322.7C575.6 359.2 542.4 384 505.9 384L408 384C381.5 384 360 405.5 360 432C360 435.4 360.4 438.7 361 441.9C363.1 452.1 367.5 461.9 371.8 471.8C377.9 485.6 383.9 499.3 383.9 513.8C383.9 545.6 362.3 574.5 330.5 575.8C327 575.9 323.5 576 319.9 576C178.5 576 63.9 461.4 63.9 320C63.9 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320zM192 352C192 334.3 177.7 320 160 320C142.3 320 128 334.3 128 352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352zM192 256C209.7 256 224 241.7 224 224C224 206.3 209.7 192 192 192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256zM352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160zM448 256C465.7 256 480 241.7 480 224C480 206.3 465.7 192 448 192C430.3 192 416 206.3 416 224C416 241.7 430.3 256 448 256z"/></svg>`;
mainWindow.append(palette);

const watchForNewLoots = new MutationObserver((entries) => {
	const newUrl =
		localStorage.getItem("url") ||
		"https://fobos.margonem.pl/img/it_borders.png?v=1754045873914";
	entries.forEach((entry) => {
		entry.addedNodes.forEach((node) => {
			if (node.classList?.contains("itemHighlighter")) {
				node.style.backgroundImage = `url('${newUrl}')`;
			}
		});
	});
});
watchForNewLoots.observe(bag, { childList: true, subtree: true });
watchForNewLoots.observe(lootWindow, { childList: true, subtree: true });

palette.addEventListener("click", () => {
	handlePanel();
	showSettings();
});
