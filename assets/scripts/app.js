'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// Import the book events file. `bookEvents` is the object
// exported by `module.exports`
// use require without a reference to ensure a file is bundled
// require('./example')
// Whatever we put inside this callback function will be run whenever
// the document has finished loading (document.onload)
const authEvents = require('./auth/event')
 const postEvents = require('./post/event')
$(() => {

  $('.change-password-section').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#textsub').on('submit', postEvents.onPost)
$('#posts-index').on('click', postEvents.onIndexPost)
$('#hide-posts-index').on('click', postEvents.onHideIndexPost)
$('.dyn-update').on('submit', postEvents.onDynamicUpdatePost)
$('.posts-delete-dynamic').on('click', postEvents.onDynamicDestroyPost)
//   ('#sign-in').show()
// })
})
