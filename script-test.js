const button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
  let result = 0;

  const a1 = document.getElementById("q1").value;
  if (a1 === "4") {
    result++;
  }

  const a2 = document.getElementById("q2").value;
  if (a2 === "4") {
    result++;
  }

  const a3 = document.getElementById("q3").value;
  if (a3 === "0") {
    result++;
  }

  const a4 = document.getElementById("q4").value;
  if (a4 === "1") {
    result++;
  }

  const a5 = document.getElementById("q5").value;
  if (a5 === "6") {
    result++;
  }

  const a6 = document.getElementById("q6").value;
  if (a6 === "3") {
    result++;
  }

  const a7 = document.getElementById("q7").value;
  if (a7 === "8") {
    result++;
  }

  const a8 = document.getElementById("q8").value;
  if (a8 === "2") {
    result++;
  }

  const a9 = document.getElementById("q9").value;
  if (a9 === "-2") {
    result++;
  }

  const a10 = document.getElementById("q10").value;
  if (a10 === "1") {
    result++;
  }

  alert("Кількість правильних відповідей " + result);
}
