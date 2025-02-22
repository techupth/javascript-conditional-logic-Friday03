function calculateStudentGrade(score) {
  let grade;
  score >= 90
  ?(grade = "A")
  : score >= 80 && score < 90
  ?(grade = "B")
  : score >= 70 && score < 80
  ?(grade = "C")
  : score >= 60 && score < 70
  ?(grade = "D")
  :(grade = "F")
  return grade
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
