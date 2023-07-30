let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const titleContainer = document.getElementById("titleContainer");
    const quizContainer = document.getElementById("quizContainer");
    titleContainer.style.display = "none";
    quizContainer.style.display = "block";

    const questionElement = document.getElementById("question");
    questionElement.textContent = questions[currentQuestion].question;

    const answerElement = document.getElementById("answer");
    answerElement.value = ""; // Mengosongkan jawaban pada pertanyaan berikutnya
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        updateScore(); // Memperbarui tampilan skor
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Skor: " + score;
    scoreElement.classList.add("pop"); // Tambahkan class pop untuk efek animasi
}

function showScore() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = "Permainan Selesai! Skor Anda: " + score + " dari " + questions.length;

    const answerElement = document.getElementById("answer");
    answerElement.style.display = "none";

    const button = document.querySelector("button");
    button.style.display = "none";
}

function startQuiz() {
    const name = document.getElementById("name").value.trim();
    const className = document.getElementById("class").value.trim();

    if (name === "" || className === "") {
        alert("Silakan masukkan Nama dan Kelas Anda!");
    } else {
        // Simpan Nama dan Kelas di localStorage untuk halaman pertanyaan
        localStorage.setItem("name", name);
        localStorage.setItem("class", className);

        showQuestion();
        updateScore(); // Memperbarui tampilan skor awal
    }
}

// Animasi fade-in
function animateFadeIn(element) {
    element.style.opacity = 0;
    let op = 0.1; // Mulai dari 0.1 (10%)
    const timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 30); // 30ms untuk setiap iterasi animasi
}

// Animasi pop
function animatePop(element) {
    element.style.transform = "scale(1)";
    let scale = 1.2;
    const timer = setInterval(function () {
        if (scale <= 1) {
            clearInterval(timer);
        }
        element.style.transform = `scale(${scale})`;
        scale -= 0.1;
    }, 30); // 30ms untuk setiap iterasi animasi
}
