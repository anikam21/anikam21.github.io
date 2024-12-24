particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["Python Developent", "Web Development", "Machine Learning", "Cloud Engineering"];    const dynamicText = document.querySelector(".dynamic-text");    let i = 0, j = 0;
    let isDeleting = false;
    const typingEffect = document.querySelector(".typing-effect");

    function type() {
        let current = phrases[i];
        if (isDeleting) {
            typingEffect.textContent = current.substring(0, j--);
            if (j < 0) {
                isDeleting = false;
                i = (i + 1) % phrases.length;
            }
        } else {
            typingEffect.textContent = current.substring(0, j++);
            if (j > current.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});


document.querySelectorAll('.skill-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

// Get references to the roadmap and the #about section
const roadmapContainer = document.querySelector(".roadmap-container");
const aboutSection = document.querySelector("#about");

// Function to show the roadmap
function showRoadmap() {
    roadmapContainer.style.display = "block"; // Show the roadmap
    const path = roadmapContainer.querySelector("path");
    path.style.animation = "dash 2s linear forwards"; // Trigger the animation
}

// Intersection Observer to monitor when #about is in view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                showRoadmap(); // Start the roadmap animation when #about is in view
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
);

// Observe the #about section
observer.observe(aboutSection);

