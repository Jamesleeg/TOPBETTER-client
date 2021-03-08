const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onNewPostSuccess = function(response) {
  $('form').trigger('reset')
  console.log('onNewPostSuccess')
  console.log(response)
  $('#post-message').html('successfully made your post')
}
const onNewPostFailure = function(response) {
  $('form').trigger('reset')
  $('#post-message').html('Error making post')
}

module.exports = {
  onNewPostSuccess,
  onNewPostFailure
}
