'use strict'

// Question 1

const num1 = 1
const num2 = 2

const add = function (num1, num2) {
  num1 = num1 + num2
  return num1
}

add()

// Question 1:  What is the return value of `add()`?
const answer1 = NaN // replace null with your response

// Question 2

const person = {
  firstName: 'Ben',
  lastName: 'Adamski',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
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

// Question 3:  Invoke the `fullName()` method so it returns `person2`'s fullname
const answer3 = person1.fullName.call(person2)

// Question 4

const alderaan = { name: 'Alderaan' }
const deathStar = {
  fire: function () {
    return this.name
  }
}

// Question 4: Write the code that would have the `fire` method on the
// `deathStar` object use the `alderaan` object for context without invoking
// the method, so that we could call answer4() and get 'Alderaan' returned
const answer4 = deathStar.bind(aldrenaan) // replace null with your response

// Resources for all questions
// https://git.generalassemb.ly/ga-wdi-boston/js-objects-this

module.exports = {
  num1,
  num2,
  answer1,
  person,
  person1,
  person2,
  answer3,
  answer4,
  alderaan,
  deathStar
}
