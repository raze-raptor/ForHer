document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('.yes-no button[onclick="answer(\'Yes\')"]');
    const noButton = document.querySelector('.yes-no button[onclick="answer(\'No\')"]');

    yesButton.addEventListener('click', () => {
        showEmbed();
    });

    noButton.addEventListener('click', () => {
        randomPosition();
    });
});

function showEmbed() {
    // Show an embed here, or perform any action you want when Yes is clicked
    alert('You said Yes! Congratulations!');
}

function randomPosition() {
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function showMessage() {
    document.getElementById('message').style.display = 'block';
}