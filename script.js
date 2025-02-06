let noCount = 0;

function replyYes() {
    document.body.innerHTML = `
        <div class="container">
            <h1>RAAAAAAH YIPPEEE</h1>
            <p>Thank you love MWAH MWAH MWAH</p>
            <img src="https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif" width="200px">
        </div>
    `;
}
function replyNo() {
    noCount++;

    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");

    if (noCount < 5) {
        // Increase Yes button size
        yesButton.style.transform = `scale(${1 + noCount * 0.3})`;

        // Change No button text to be playful
        noButton.innerText = ["Are you sure? ;-;", "Really? T,T", "Think again pls bb", "AAAAAA plEEEEASE", "HEH HEH PLEASE"][noCount - 1];
    } else {
        // Hide the No button and make Yes cover the screen
        noButton.style.display = "none";
        yesButton.style.transform = "scale(10)";
        yesButton.innerText = "YES (IM NOT FORCED TO SAY YES)";
    }
}