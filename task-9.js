//TODO: у нас є масив об'єктів, який містить інформацію про студентів, зокрема їх оцінки з різних предметів. Необхідно обчислити середній бал кожного студента і вивести його на екран.

const students = [
  { name: "Alex", gradeMath: 5, gradeEnglish: 3, gradeСhemistry: 2 },
  { name: "Masha", gradeMath: 4, gradeEnglish: 2, gradeСhemistry: 1 },
  { name: "Ivan", gradeMath: 2, gradeEnglish: 2, gradeСhemistry: 5 },
  { name: "Oleg", gradeMath: 5, gradeEnglish: 5, gradeСhemistry: 4 },
];

function calculateStudentsGPA(students) {
  return students.map((student) => {
    const sumGrades =
      student.gradeMath + student.gradeEnglish + student.gradeСhemistry;
    const averageGrade = sumGrades / 3;
    return {
      name: student.name,
      averageGrade: averageGrade.toFixed(2),
    };
  });
}

console.table(calculateStudentsGPA(students));
