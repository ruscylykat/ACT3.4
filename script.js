
var name = prompt("Insert your name")
var idNumber = prompt("insert your LRN")

document.getElementById("name").textContent=name
document.getElementById("lrn").textContent=idNumber

let quiz = document.getElementById("quiz-score");
let totalQuiz = document.getElementById("total-quiz-score");
let longTest = document.getElementById("longtest-score");
let totalLongTest = document.getElementById("total-longtest-score");
let overllWW = document.getElementById("writtenworks")


let performanceTask = document.getElementById("pt-score");
let totalPerformanceTask = document.getElementById("total-pt-score");
let recitation = document.getElementById("reci-score");
let totalRecitation = document.getElementById("reci-score");
let attendance = document.getElementById("atte-score");
let totalAttendance = document.getElementById("total-atte-score");
let overallPT = document.getElementById("performancetask")


let exams = document.getElementById("exam-score");
let totalExams = document.getElementById("total-exam-score");
let gradingExams = document.getElementById("quarterexams")

let showGrades = document.getElementById("display-grades")

//button
let allGrades = document.getElementById("overall-grades");




allGrades.addEventListener("click", () =>{
    // written work
    const quizValue = quiz.value / totalQuiz.value;
    const longTestValue = longTest.value / totalLongTest.value;
    const allWritten = quizValue + longTestValue;
    const multiplyAllWW = parseInt(allWritten * 25) / 2

    overllWW.textContent = multiplyAllWW + "%"

    //performance Task
    const performanceValue = performanceTask.value / totalPerformanceTask.value;
    const recitationValue = recitation.value / totalRecitation.value;
    const attendanceValue = attendance.value / totalAttendance.value;
    const allperformance = performanceValue + recitationValue + attendanceValue;
    const multiplyAllPT = (allperformance * 50) / 3;
  
    overallPT.textContent = multiplyAllPT.toFixed(2) + "%";
  
    //examination
    console.log(exams.value)
    console.log(totalExams.value)
    const examsValue = exams.value / totalExams.value;
    const multiplyExam = parseInt(examsValue * 25);

    gradingExams.textContent = multiplyExam + "%";

    const sum = multiplyAllWW+ multiplyAllPT + multiplyExam;

    showGrades.textContent = sum.toFixed(2) + "%";

})
