function calculateGrade(rightNumber, totalNumber) {
    let percentGrade = Math.round(rightNumber/totalNumber*100);
    // Will round percentage because the grade system include only integers
    let grade;
    // Let's check if input is correct. Right answers number can't be more than total number of questions.
    if (percentGrade > 100) {
        return 'Something wrong with input.';
    } else {
        switch (true) {
            // will check statement for every case, that's why "true" here
            case percentGrade >= 50 && percentGrade < 60:
                grade = 'E';
                break;
            case percentGrade >= 60 && percentGrade < 70:
                grade = 'D';
                break;
            case percentGrade >= 70 && percentGrade < 80:
                grade = 'C';
                break;
            case percentGrade >= 80 && percentGrade < 90:
                grade = 'B';
                break;
            case percentGrade >= 90 && percentGrade <= 100:
                grade = 'A';
                break;
            default:
                grade = 'F';
        }
    }
    // Use back quotes for a template string
    return `You got a ${grade} (${percentGrade}%)!`;
}
// Test of function
console.log(calculateGrade(60, 100));