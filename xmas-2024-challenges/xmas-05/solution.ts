import { pageOrderingRules, updateArray } from './inputs.ts';

// Test Data Example
/* const pageOrderingRules: string[] = [
  '47|53',
  '97|13',
  '97|61',
  '97|47',
  '75|29',
  '61|13',
  '75|53',
  '29|13',
  '97|29',
  '53|29',
  '61|53',
  '97|53',
  '61|29',
  '47|13',
  '75|47',
  '97|75',
  '47|61',
  '75|61',
  '47|29',
  '75|13',
  '53|13',
]; */

//const updateArray: string[] = ['75,47,61,53,29', '97,61,53,29,13', '75,29,13', '75,97,47,61,53', '61,13,29', '97,13,75,29,47'];
let finalAnswer = 0;

for (let i = 0; i < updateArray.length; i++) {
  const passingUpdateArray: boolean[] = [];
  const updateArrayValues = updateArray[i].split(',');

  for (let x = 0; x < updateArrayValues.length; x++) {
    let matchFound = false;

    pageOrderingRules.forEach((rule) => {
      const ruleArray = rule.split('|');
      const num1 = parseInt(ruleArray[0]);
      const num2 = parseInt(ruleArray[1]);

      if (num1 === parseInt(updateArrayValues[x]) && num2 === parseInt(updateArrayValues[x + 1])) {
        matchFound = true;
      }
    });

    if (matchFound) {
      passingUpdateArray.push(true);
    }
  }

  if (passingUpdateArray.length === updateArrayValues.length - 1) {
    console.log('*******************************');
    console.log(`Passing Update Array:`, updateArrayValues);
    finalAnswer = finalAnswer + parseInt(updateArrayValues[Math.round((updateArrayValues.length - 1) / 2)]);
    console.log('*******************************');
  }
}

console.log('*******************************');
console.log(`Final Answer:`, finalAnswer);
console.log('*******************************');
