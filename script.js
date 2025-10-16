function checkAnswers() {
  const answers = {
    q1:"b", q2:"a", q3:"b", q4:"c", q5:"b",
    q6:"a", q7:"b", q8:"a", q9:"a", q10:"a",
    q11:"c", q12:"a", q13:"b", q14:"c", q15:"b",
    q16:"a", q17:"a", q18:"b", q19:"b", q20:"b"
  };

  let correctCount = 0;
  let feedback = ""; // აქ მოვაწერთ კომენტარს

  for(let q in answers) {
    const sel = document.querySelector(`input[name="${q}"]:checked`);
    if(sel) {
      if(sel.value === answers[q]) {
        correctCount++;
      } else {
        feedback += `<p>${q}: არასწორი! სწორია: ${answers[q]}</p>`;
      }
    } else {
      feedback += `<p>${q}: არ აირჩიეთ პასუხი! სწორია: ${answers[q]}</p>`;
    }
  }

  // დაფაროს quiz
  document.getElementById("quiz-box").style.display = "none";

  // აჩვენოს შედეგი
  const resultDiv = document.getElementById("sedegi");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `<h3>შენი ქულაა: ${correctCount}/20</h3>${feedback}`;
}
