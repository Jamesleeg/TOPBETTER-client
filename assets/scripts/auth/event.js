const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  // get data from html form
  const form = event.target
  const data = getFormFields(form)

  // send data to api for sign up
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  console.log('hello we did it')
}

const onSignIn = function (event) {
  // $("#games-index").show()
  // $("#new-game").show()
  event.preventDefault()
  console.log('yeahboy')
  // get data from html form
  const form = event.target
  const data = getFormFields(form)
  // send data to api for sign up
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
    $('#blog-post').show()
    $('#hide-posts-index').show()
    $('#posts-index').show()
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // get data from html form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // send data to api for sign up
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
