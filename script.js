document.getElementById('quizForm').onsubmit = function (e) {
    e.preventDefault();
    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let score = 0;

    if (q1 === 'yes') score++;
    if (q2 === 'yes') score++;

    let resultText = '';
    if (score === 0) resultText = "You seem to be doing well. Keep taking care of your mental health!";
    else if (score === 1) resultText = "Consider practicing relaxation exercises or talking to someone you trust.";
    else resultText = "We recommend consulting a mental health professional or helpline.";

    document.getElementById('result').innerText = resultText;
};