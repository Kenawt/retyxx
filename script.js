let noCount = 0;
const body = document.body;

// Function for Yes Button
function replyYes() {
    body.innerHTML = `
        <div class="container">
            <h1>RAAAAAH THANK YOU BABY! 🥰</h1>
            <p>MWAH MWAH MWAH! Thank you baby I mean girl I mean my GIRLFRIEND HEHEHE❤️</p>
            <img src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif" width="200px">
        </div>
    `;
}

// Function for No Button
function replyNo() {
    noCount++;

    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");

    // Progressive "Yes" button text changes
    const yesMessages = [
        "Yes! 🥰",
        "Are you sure-- I kish😘",
        "Think again AAA 🤭",
        "you didn't mean that- 🥺",
        ";-; PLEEEEASE?? 💖",
        "Yes :3"
    ];

    // Update Yes button text based on how many times "No" is clicked
    if (noCount < yesMessages.length) {
        yesButton.innerText = yesMessages[noCount];
    }

    // Move No button randomly for first 4 clicks
    if (noCount < 5) {
        yesButton.style.transform = `scale(${1 + noCount * 0.3})`;
        noButton.style.position = "absolute";
        noButton.style.top = Math.random() * 80 + "vh";
        noButton.style.left = Math.random() * 80 + "vw";
    } else {
        // Hide No button with fade-out effect
        noButton.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-in-out";
        noButton.style.opacity = "0";
        noButton.style.transform = "scale(0.5)"; // Shrinks before disappearing

        setTimeout(() => {
            noButton.style.display = "none";
        }, 800);

        // Make Yes button huge and cover the screen
        yesButton.classList.add("grow");
        yesButton.innerText = yesMessages[yesMessages.length - 1]; // Final text

        spawnHearts();
    }
}


// Floating Hearts Effect (Randomized Timing)
function spawnHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.className = "heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
            document.body.appendChild(heart);
        }, i * (200 + Math.random() * 200));
    }
}
