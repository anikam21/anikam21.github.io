document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    // Initialize Particles.js
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
                opacity: { value: 0.5, anim: { enable: false } },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });
        console.log(" Particles.js Initialized");
    } else {
        console.error(" Particles.js container not found!");
    }


    // Typing Effect
    const phrases = ["Backend Development", "Cloud Technologies", "DevOps"];
    let index = 0, letterIndex = 0;
    const typingElement = document.getElementById("typing-text");

    function typeEffect() {
        if (!typingElement) {
            console.error(" Typing text element not found!");
            return;
        }
        if (letterIndex === 0) {
            typingElement.textContent = "";
        }
        if (letterIndex < phrases[index].length) {
            typingElement.textContent += phrases[index].charAt(letterIndex);
            letterIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (letterIndex > 0) {
            typingElement.textContent = phrases[index].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            index = (index + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        }
    }

    if (typingElement) {
        typeEffect();
        console.log(" Typing Effect Initialized");
    } else {
        console.error(" Typing text element missing.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")  // Absolute path ensures it works on GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar file not found!");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});

