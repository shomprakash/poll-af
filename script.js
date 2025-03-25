const canvas = document.getElementById("heatmap");
const ctx = canvas.getContext("2d");
const moods = { happy: "green", neutral: "yellow", angry: "red" };
let moodData = [];

// Random virtual location generator
function getRandomPoint() {
    return { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
}

// Handle mood selection
document.querySelectorAll(".mood").forEach(button => {
    button.addEventListener("click", () => {
        const mood = button.dataset.mood;
        const point = getRandomPoint();
        moodData.push({ ...point, color: moods[mood] });
        drawHeatmap();
    });
});

// Draw the heatmap
function drawHeatmap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moodData.forEach(({ x, y, color }) => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Resize canvas dynamically
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = 350;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
