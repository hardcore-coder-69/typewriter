const keyboardTypingSoundEl = document.getElementById("keyboard-typing-audio");
const fullScreenTextContainerEl = document.getElementById('full-screen-text-container');

keyboardTypingSoundEl.load();
keyboardTypingSoundEl.loop = true;
keyboardTypingSoundEl.volume = 1;


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

    // await showFullScreenText({
    //     text: 'You don’t need more time, you need more focus.',
    //     typingSpeed: 100,
    //     textSize: '42px',
    //     boldText: true
    // });

    // await showFullScreenText({
    //     text: 'Most people aren’t short on hours, they’re short on priorities. Attention is the new currency.',
    //     typingSpeed: 100,
    //     textSize: '38px',
    //     boldText: false
    // });

    // await showFullScreenText({
    //     text: 'Discipline is doing it even when no one’s watching.',
    //     typingSpeed: 100,
    //     textSize: '42px',
    //     boldText: true
    // });

    // await showFullScreenText({
    //     text: 'Motivation fades. What stays is your ability to show up anyway.',
    //     typingSpeed: 100,
    //     textSize: '38px',
    //     boldText: false
    // });

    // await showFullScreenText({
    //     text: 'If you can’t be consistent, don’t expect results.',
    //     typingSpeed: 100,
    //     textSize: '42px',
    //     boldText: true
    // });

    // await showFullScreenText({
    //     text: 'Success doesn’t come from intensity. It comes from showing up again and again.',
    //     typingSpeed: 100,
    //     textSize: '38px',
    //     boldText: false
    // });


    await showFullScreenText({
        text: "Why You Shouldn't Multitask",
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await showFullScreenText({
        text: `You think you're saving time by multitasking — replying to emails, switching tabs, checking messages.
But your brain doesn't actually do tasks at the same time. It switches focus — and that switch costs time.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await showFullScreenText({
        text: `🕑 According to neuroscience, every switch wastes about 23 minutes to fully regain focus.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await showFullScreenText({
        text: `🧪 Multitasking lowers your IQ temporarily more than smoking marijuana does.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await showFullScreenText({
        text: `📉 It kills productivity, increases mistakes, and even shrinks your brain’s gray matter.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await showFullScreenText({
        text: "Real productivity?",
        typingSpeed: 100,
        textSize: '42px',
        boldText: true
    });

    await showFullScreenText({
        text: `Do one thing at a time, with full attention.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });

    await showFullScreenText({
        text: `It's faster, smarter, and way less stressful.`,
        typingSpeed: 100,
        textSize: '38px',
        boldText: false
    });
}