let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
/*window.prompt(weeklyExpenseQuestions[0])*/

/*let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer) */

/*let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
let numberAnswer = parseFloat(stringAnswer)
console.log(numberAnswer)*/

 for (let index = 0; index < weeklyExpenseQuestions.length; index++) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
weeklyExpenses = weeklyExpenses + answer
    
 }

for (let index = 0; index < monthlyExpenseQuestions.length; index++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[0]))
monthlyExpenses = monthlyExpenses + answer
    
}

for (let index = 0; index < annualExpenseQuestions.length; index++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[0]))
annualExpenses = annualExpenses + answer
    
}