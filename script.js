const keyboardTypingSoundEl = document.getElementById("keyboard-typing-audio");
const bgmSoundEl = document.getElementById("bgm-audio");
const fullScreenTextContainerEl = document.getElementById('full-screen-text-container');

keyboardTypingSoundEl.load();
keyboardTypingSoundEl.loop = true;
keyboardTypingSoundEl.volume = 1;
keyboardTypingSoundEl.playbackRate = 2;

bgmSoundEl.load();
bgmSoundEl.loop = true;
bgmSoundEl.volume = 0.5;


// Show full screen text
async function showFullScreenText({ text, typingSpeed, textSize, boldText }) {
    fullScreenTextContainerEl.style.display = 'flex';

    let fullScreenTextEl = document.createElement('div');
    if (textSize) {
        fullScreenTextEl.style.fontSize = textSize;
    }
    if (boldText) {
        fullScreenTextEl.classList.add('heading');
    } else {
        fullScreenTextEl.classList.add('subheading');
    }

    fullScreenTextContainerEl.appendChild(fullScreenTextEl);

    await typeWriter({
        textEl: fullScreenTextEl,
        text: text,
        typingSpeed: typingSpeed
    });
}

async function hideFullScreenText() {
    fullScreenTextEl.innerHTML = '';
    fullScreenTextEl.style.fontSize = '112px';
    fullScreenTextEl.style.display = 'none';
    fullScreenTextContainerEl.style.display = 'none';
}

// Sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Text Typing Animation
let typingText = '';
let speed = 0;
let charIndex = 0;
let pauseCharacters = ['.', ','];
let specialLength = 2;
async function typeWriter({ textEl, text, typingSpeed }) {
    if (textEl && text && typingSpeed) {
        await keyboardTypingSoundEl.play();
        textEl.style.display = 'block';
    };
    if (text) typingText = text;
    if (typingSpeed) speed = typingSpeed;

    if (charIndex < typingText.length) {
        textEl.textContent = textEl.textContent.substring(0, textEl.textContent.length - specialLength);
        textEl.textContent += typingText.charAt(charIndex);

        if (charIndex != typingText.length - 1) {
            textEl.textContent += '✏️';
        }

        // Pause typing
        if (pauseCharacters.includes(typingText.charAt(charIndex))) {
            await keyboardTypingSoundEl.pause();
            await sleep(250);
            await keyboardTypingSoundEl.play();
        }

        charIndex++;
        await sleep(speed);
        await typeWriter({ textEl });
    } else {
        typingText = '';
        speed = 0;
        charIndex = 0;
        await keyboardTypingSoundEl.pause();
    }
}





document.addEventListener('click', start);
async function start() {
    console.log("Testing sound...");
    keyboardTypingSoundEl.play();
    await sleep(2000);
    keyboardTypingSoundEl.pause();
    await sleep(1000);
    console.log("Starting animation...");
    bgmSoundEl.play();

    await showFullScreenText({
        text: 'Push yourself because no one else is going to do it for you.',
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await showFullScreenText({
        text: '— Unknown',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: 'Don’t watch the clock; do what it does. Keep going.',
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await showFullScreenText({
        text: '— Sam Levenson',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: 'Hard times create strong men. Strong men create good times.',
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await showFullScreenText({
        text: '— G. Michael Hopf',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: 'Start where you are. Use what you have. Do what you can.',
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await showFullScreenText({
        text: '— Arthur Ashe',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: 'Work hard in silence. Let success make the noise.',
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await showFullScreenText({
        text: '— Frank Ocean',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });
}