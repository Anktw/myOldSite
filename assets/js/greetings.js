const greetings = ["Full Stack", "OpenSource", "DevOps", "Next.js", "Javasript", "Node.js", "Blockchain", "AI"];
let currentIndex = 0;
const greetingElement = document.getElementById('greetings');

function changeGreeting() {
    greetingElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % greetings.length;
        greetingElement.textContent = greetings[currentIndex];
        greetingElement.style.opacity = 1;
    }, 1000); 
}
setInterval(changeGreeting, 3000);
