const handlePanel = (centerbox) => {
	const panel = document.createElement("div");
	const settings = document.createElement("div");
	const closeBtn = document.createElement("button");
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
	centerbox.append(panel);
};
