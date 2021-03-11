const store = require('./../store')
$('#sign-out').hide()
const signUpSuccess = function (response) {

  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')

  setTimeout(() => {
    $('#error-message').text('')
  }, 5000)
}
const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  store.user = response.user

  $('#error-message').text('Thank you for signing in')
  $('#sign-in').trigger('reset')
  $('.change-password-section').show()
  $('.auth-hide').hide()
  $('#sign-in').hide()
  $('#sign-out').show()

  setTimeout(() => {
    $('#error-message').text('')
  }, 5000)
}
const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, try again')
}
const signOutSuccess = function (response) {
  $('#error-message').text('Signed out successfully')

  $('form').trigger('reset')

  setTimeout(() => {
    $('#error-message').text('')
  }, 5000)

  $('#sign-out').hide()

  $('.change-password-section').hide()
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
  $('.auth-hide').show()
}

const signOutFailure = function (response) {
  $('#error-message').text('Error on sign out')

  setTimeout(() => {
    $('#error-message').text('')
  }, 5000)

  // console.log('signOutFailure ran')
}

const changePasswordSuccess = function (response) {
  $('#error-message').text('Password changed')
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#error-message').text('')
  }, 5000)
}

const changePasswordFailure = function (response) {
  $('#error-message').text('Failed to change password')
  setTimeout(() => {
    $('#error-message').text('')
  }, 5000)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
