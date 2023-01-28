// There is a JSON file with students. Make a call to the file and get the following data from it:
// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

document.getElementById("btn").addEventListener("click", function () {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  ).then((data) => {
    data.json().then((parsedData) => {
      // TASK 1
      let higherGradeThan3 = parsedData.filter(
        (grade) => grade.averageGrade > 3
      );
      // .map((grade) => grade.averageGrade);
      console.log(higherGradeThan3);

      //   TASK 2
      let femaleStudentsWithAvgGr5 = parsedData
        .filter(
          (student) => student.gender === "Female" && student.averageGrade === 5
        )
        .map(
          (studentName) => `${studentName.firstName} ${studentName.lastName}`
        );
      console.log(femaleStudentsWithAvgGr5);

      //TASK 3
      let maleInSkopjeOver18 = parsedData
        .filter((student) => student.city === "Skopje" && student.age > 18)
        .map(
          (studentName) => `${studentName.firstName} ${studentName.lastName}`
        );
      console.log(maleInSkopjeOver18);

      //TASK 4
      let avgGradesOfFemalesOver24 = parsedData
        .filter((s) => s.gender === "Female" && s.age > 24)
        .map((g) => g.averageGrade);
      console.log(avgGradesOfFemalesOver24);

      //   TASK 5

      //   let maleNamesStartingWithBAndAvgGrade2
      let maleNamesStartingWithBAndAvgGrade2 = parsedData.filter(
        (s) =>
          s.gender === "Male" && s.firstName[0] === "B" && s.averageGrade > 2
      );
      console.log(maleNamesStartingWithBAndAvgGrade2);
    });
  });
});
