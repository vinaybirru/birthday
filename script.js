// =====================================================
// PREMIUM BIRTHDAY SURPRISE FOR CHIKI
// =====================================================


// =====================================================
// ELEMENTS
// =====================================================

const giftPage =
    document.getElementById("giftPage");

const countdownPage =
    document.getElementById("countdownPage");

const surprisePage =
    document.getElementById("surprisePage");

const giftImage =
    document.getElementById("giftImage");

const countNumber =
    document.getElementById("countNumber");

const typingText =
    document.getElementById("typingText");

const music =
    document.getElementById("music");

const photoButton =
    document.getElementById("photoButton");

const letterViewer =
    document.getElementById("letterViewer");

const closeLetter =
    document.getElementById("closeLetter");


// =====================================================
// STATE
// =====================================================

let started = false;

let effectsStarted = false;


// =====================================================
// PAGE SWITCH
// =====================================================

function showPage(page) {

    document.querySelectorAll(".page").forEach((item) => {

        item.classList.remove("active");

    });

    page.classList.add("active");
}


// =====================================================
// GIFT CLICK
// =====================================================

giftImage.addEventListener("click", openGift);

giftImage.addEventListener("touchstart", openGift);


function openGift(event) {

    event.preventDefault();

    if (started) return;

    started = true;


    // Gift opening animation

    giftImage.style.animation = "none";

    giftImage.style.transition =
        "transform 1s ease, opacity 1s ease";

    giftImage.style.transform =
        "scale(1.8) rotate(20deg)";

    giftImage.style.opacity = "0";


    // Hide gift page

    setTimeout(() => {

        showPage(countdownPage);

        startCountdown();

    }, 900);

}


// =====================================================
// COUNTDOWN
// 3 → 2 → 1 → BLAST
// =====================================================

function startCountdown() {

    const numbers = [
        "3",
        "2",
        "1"
    ];

    let index = 0;


    countNumber.textContent =
        numbers[index];

    animateCountdown();


    const timer =
        setInterval(() => {

            index++;


            if (index < numbers.length) {

                countNumber.textContent =
                    numbers[index];

                animateCountdown();

            } else {

                clearInterval(timer);

                createBlast();


                // Small delay after blast

                setTimeout(() => {

                    showPage(surprisePage);

                    startBirthdayExperience();

                }, 700);

            }

        }, 1000);

}


// =====================================================
// COUNTDOWN ANIMATION
// =====================================================

function animateCountdown() {

    countNumber.animate(

        [
            {
                transform: "scale(.2)",
                opacity: 0
            },

            {
                transform: "scale(1.35)",
                opacity: 1
            },

            {
                transform: "scale(1)",
                opacity: 1
            }
        ],

        {
            duration: 750,
            easing: "ease-out"
        }

    );

}


// =====================================================
// BLAST
// =====================================================

function createBlast() {

    const blast =
        document.createElement("div");

    blast.className = "blast";

    blast.innerHTML = "💥";


    document.body.appendChild(blast);


    blast.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) scale(.1)",
                opacity: 0
            },

            {
                transform:
                    "translate(-50%, -50%) scale(2)",
                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -50%) scale(5)",
                opacity: 0
            }
        ],

        {
            duration: 1000,
            easing: "ease-out"
        }

    );


    // Extra spark particles

    for (let i = 0; i < 35; i++) {

        createBlastParticle();

    }


    setTimeout(() => {

        blast.remove();

    }, 1000);

}


// =====================================================
// BLAST PARTICLES
// =====================================================

function createBlastParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "blastParticle";

    particle.innerHTML =
        ["✨", "⭐", "💖", "🌟"][
            Math.floor(Math.random() * 4)
        ];


    particle.style.left = "50%";
    particle.style.top = "50%";


    const angle =
        Math.random() * Math.PI * 2;

    const distance =
        100 + Math.random() * 250;


    document.body.appendChild(particle);


    particle.animate(

        [
            {
                transform:
                    "translate(-50%, -50%) scale(.2)",
                opacity: 1
            },

            {
                transform:
                    `translate(
                        calc(-50% + ${Math.cos(angle) * distance}px),
                        calc(-50% + ${Math.sin(angle) * distance}px)
                    )
                    scale(1.2)`,

                opacity: 0
            }
        ],

        {
            duration: 1000,
            easing: "ease-out"
        }

    );


    setTimeout(() => {

        particle.remove();

    }, 1000);

}


// =====================================================
// START BIRTHDAY EXPERIENCE
// =====================================================

function startBirthdayExperience() {

    // Reset message

    typingText.textContent = "";


    // Start music

    music.currentTime = 0;

    music.play().catch(() => {

        console.log(
            "Browser blocked autoplay. Music will start after user interaction."
        );

    });


    // Birthday typing

    startTyping();


    // Start celebration

    createFloatingObjects();


    // Initial fireworks

    setTimeout(() => {

        createFirework();

    }, 200);


    setTimeout(() => {

        createFirework();

    }, 800);


    setTimeout(() => {

        createFirework();

    }, 1500);


    // =================================================
    // LITTLE IMAGE AFTER 3 SECONDS
    // =================================================

    setTimeout(() => {

        photoButton.classList.add("show");

    }, 3000);

}


// =====================================================
// BIRTHDAY MESSAGE
// =====================================================

const message =
``;


let textIndex = 0;


function startTyping() {

    typingText.textContent = "";

    textIndex = 0;


    const typing =
        setInterval(() => {

            typingText.textContent +=
                message.charAt(textIndex);

            textIndex++;


            if (
                textIndex >=
                message.length
            ) {

                clearInterval(typing);

            }

        }, 35);

}


// =====================================================
// FLOATING EFFECTS
// =====================================================

function createFloatingObjects() {

    if (effectsStarted) return;

    effectsStarted = true;


    // Balloons

    setInterval(() => {

        createBalloon();

    }, 1400);


    // Hearts

    setInterval(() => {

        createHeart();

    }, 900);


    // Stars

    setInterval(() => {

        createStar();

    }, 550);


    // Fireworks

    setInterval(() => {

        createFirework();

    }, 1800);

}


// =====================================================
// BALLOON
// =====================================================

function createBalloon() {

    const balloon =
        document.createElement("div");

    balloon.className =
        "floatingBalloon";

    balloon.textContent =
        ["🎈", "🎈", "🎈", "🎀"][
            Math.floor(Math.random() * 4)
        ];


    balloon.style.left =
        Math.random() * 100 + "vw";


    balloon.style.fontSize =
        (35 + Math.random() * 35) + "px";


    surprisePage.appendChild(balloon);


    balloon.animate(

        [
            {
                transform:
                    "translateY(0) rotate(-8deg)",
                opacity: 0
            },

            {
                transform:
                    "translateY(-35vh) rotate(8deg)",
                opacity: 1
            },

            {
                transform:
                    "translateY(-120vh) rotate(-8deg)",
                opacity: 0
            }
        ],

        {
            duration: 9000,
            easing: "linear"
        }

    );


    setTimeout(() => {

        balloon.remove();

    }, 9000);

}


// =====================================================
// HEART
// =====================================================

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floatingHeart";

    heart.textContent =
        ["❤️", "💕", "💖", "💗"][
            Math.floor(Math.random() * 4)
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (18 + Math.random() * 22) + "px";


    surprisePage.appendChild(heart);


    heart.animate(

        [
            {
                transform:
                    "translateY(0) scale(.4)",
                opacity: 0
            },

            {
                transform:
                    "translateY(-50vh) scale(1)",
                opacity: 1
            },

            {
                transform:
                    "translateY(-120vh) scale(1.4)",
                opacity: 0
            }
        ],

        {
            duration: 6500,
            easing: "linear"
        }

    );


    setTimeout(() => {

        heart.remove();

    }, 6500);

}


// =====================================================
// STAR
// =====================================================

function createStar() {

    const star =
        document.createElement("div");

    star.className =
        "floatingStar";

    star.textContent =
        ["⭐", "✨", "🌟"][
            Math.floor(Math.random() * 3)
        ];


    star.style.left =
        Math.random() * 100 + "vw";


    star.style.top =
        Math.random() * 85 + "vh";


    surprisePage.appendChild(star);


    star.animate(

        [
            {
                transform: "scale(.1) rotate(0deg)",
                opacity: 0
            },

            {
                transform: "scale(1.3) rotate(180deg)",
                opacity: 1
            },

            {
                transform: "scale(.1) rotate(360deg)",
                opacity: 0
            }
        ],

        {
            duration: 1800,
            easing: "ease-in-out"
        }

    );


    setTimeout(() => {

        star.remove();

    }, 1800);

}


// =====================================================
// FIREWORK
// =====================================================

function createFirework() {

    if (
        !surprisePage.classList.contains("active")
    ) {

        return;

    }


    const x =
        Math.random() *
        window.innerWidth;


    const y =
        80 +
        Math.random() *
        (window.innerHeight * .45);


    const particles = 20;


    for (
        let i = 0;
        i < particles;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "fireworkParticle";


        particle.textContent =
            ["✨", "⭐", "💥", "🌟"][
                Math.floor(Math.random() * 4)
            ];


        particle.style.left =
            x + "px";


        particle.style.top =
            y + "px";


        surprisePage.appendChild(particle);


        const angle =
            (Math.PI * 2 * i) /
            particles;


        const distance =
            60 +
            Math.random() * 100;


        particle.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.2)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        )
                        scale(1.1)`,

                    opacity: 0
                }
            ],

            {
                duration: 1200,
                easing: "ease-out"
            }

        );


        setTimeout(() => {

            particle.remove();

        }, 1200);

    }

}


// =====================================================
// LITTLE IMAGE → OPEN LETTER.JPG
// =====================================================

photoButton.addEventListener(
    "click",
    openLetter
);


photoButton.addEventListener(
    "touchstart",
    openLetter
);


function openLetter(event) {

    if (event) {

        event.preventDefault();

    }


    letterViewer.classList.add("show");

}


// =====================================================
// CLOSE LETTER
// =====================================================

closeLetter.addEventListener(
    "click",
    closeLetterViewer
);


function closeLetterViewer() {

    letterViewer.classList.remove("show");

}


// =====================================================
// TAP OUTSIDE LETTER → CLOSE
// =====================================================

letterViewer.addEventListener(
    "click",
    function(event) {

        if (
            event.target === letterViewer
        ) {

            closeLetterViewer();

        }

    }
);


// =====================================================
// ESCAPE KEY → CLOSE
// =====================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeLetterViewer();

        }

    }
);