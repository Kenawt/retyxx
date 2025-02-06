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

    let noButton = document.getElementById("noButton");

    if (noCount < 5) {
        noButton.style.transform = `scale(${1 + noCount * 0.3})`;
        noButton.innerText = noCount === 1 ? "Are you sure? ?" : "Think twice! :3";
    } else {
        noButton.innerText = "Yes and I wasn't forced into this! :D";
        noButton.style.transform = `scale(2)`;
    }
}
