const api = require('./api')
 // the dom after an API request
const ui = require('./ui')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onPost = function (event) {
  console.log(event)
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.newPost(data)
    .then(ui.onNewPostSuccess)
    .catch(ui.onNewPostFailure)


}
module.exports = {
  onPost
}
