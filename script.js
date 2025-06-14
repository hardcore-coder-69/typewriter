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


async function scrollToTop(px) {
    fullScreenTextContainerEl.style.transition = 'transform 1s linear';
    fullScreenTextContainerEl.style.transform = `translateY(-${px}px)`;
}


async function addImage({ src, style }) {
    const imageEl = document.createElement('img');
    imageEl.classList.add('mini-image');
    imageEl.setAttribute('src', src);
    imageEl.setAttribute('style', style);

    fullScreenTextContainerEl.appendChild(imageEl);
}


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





document.addEventListener('click', startHandler);
let started = false;
function startHandler() {
    if (started) return;
    started = true;
    start();
}

async function start() {
    console.log("Testing sound...");
    keyboardTypingSoundEl.play();
    await sleep(2000);
    keyboardTypingSoundEl.pause();
    await sleep(1000);
    console.log("Starting animation...");
    bgmSoundEl.play();

    await showFullScreenText({
        text: '🔬 Scientific Basis for Time Travel',
        typingSpeed: 100,
        textSize: '48px',
        boldText: true
    });

    await sleep(2000);

    await showFullScreenText({
        text: `Time Dilation (Einstein's Theory of Relativity)`,
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await sleep(2000);

    await addImage({
        src: './assets/lightspeed.jpg',
        style: 'width: 200px; margin-top: 20px; margin-bottom: 20px;'
    });

    await sleep(2000);

    await showFullScreenText({
        text: 'According to Special Relativity, time moves slower for objects moving close to the speed of light. This is called time dilation.',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: `If you travel in a spaceship at near light speed and return to Earth, less time will have passed for you than for those who stayed on Earth. `,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: `This is forward time travel, and it’s proven and experimentally observed (e.g., with GPS satellites).`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(2000);

    await scrollToTop(455);

    await sleep(2000);

    await showFullScreenText({
        text: `General Relativity and Gravitational Time Dilation`,
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await sleep(2000);

    await addImage({
        src: './assets/blackhole.png',
        style: 'width: 400px; margin-top: 20px; margin-bottom: 20px;'
    });

    await sleep(2000);

    await showFullScreenText({
        text: 'In General Relativity, time moves slower in stronger gravitational fields.',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: 'Near a black hole, time passes much slower compared to Earth. This was popularized in the movie Interstellar.',
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(2000);

    await scrollToTop(900);

    await sleep(2000);

    await showFullScreenText({
        text: 'Wormholes',
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await sleep(2000);

    await addImage({
        src: './assets/wormhole.png',
        style: 'width: 400px; margin-top: 20px; margin-bottom: 20px;'
    });

    await sleep(2000);

    await showFullScreenText({
        text: `A wormhole is a hypothetical tunnel through spacetime connecting two distant points.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: `If one end is accelerated and brought back, time might flow differently at each end, theoretically allowing travel between times.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await sleep(1000);

    await showFullScreenText({
        text: `However, wormholes are purely theoretical and unstable (may require “exotic matter” to keep open).`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });
}