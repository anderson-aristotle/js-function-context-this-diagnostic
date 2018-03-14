'use strict'

// Question 1

const num1 = 1
const num2 = 2

const add = function (num1, num2) {
  num1 = num1 + num2
  return num1
}

add()

// Question 1:  What is the return value of `add();`?
const answer1 = null // replace null with your response

// Question 2

const person = {
  firstName: 'Ben',
  lastName: 'Adamski',
  fullName: function () {
    // Complete function here
  }
}

// Question 2:  Complete the `fullName` function
// Use `this` so that `person.fullName()` returns a combination of `firstName`
// and `lastName`

// Question 3

const person1 = {
  firstName: 'Ben',
  lastName: 'Adamski',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}

const person2 = {
  firstName: 'Santa',
  lastName: 'Clause'
}

// Question 3:  Invoke the `fullName()` method so it returns `person1`'s fullname
const answer3 = null // replace null with your response

// Question 4

const alderaan = { name: 'Alderaan' }
const deathStar = {
  fire: function () {
    return this.name
  }
}

// Question 4: Write the code that would set the `deathStar`'s `fire` method
// in the context of `alderaan` but does not invoke the method,
// so that we could call answer4() // Alderaan
const answer4 = null  // replace null with your response

module.exports = {
  answer1,
  person,
  answer3,
  answer4
}
