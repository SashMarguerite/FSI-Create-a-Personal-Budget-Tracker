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

 for (let i = 0; i < weeklyExpenseQuestions.length; i++) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
weeklyExpenses = weeklyExpenses + answer
    
 }

for (let i = 0; i < monthlyExpenses.length; i++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[0]))
monthlyExpenses = monthlyExpenses + answer
    
}

for (let i = 0; i < annualExpenses.length; i++) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[0]))
annualExpenses = annualExpenses + answer
    
}