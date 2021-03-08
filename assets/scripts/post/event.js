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
const onIndexPost = function () {
  event.preventDefault()
  api.getPosts()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
  }
  const onHideIndexPost = function () {
    event.preventDefault()
  $('#posts-display').hide()
    }
    // Handle clicking the dynamic destroy buttons
const onDynamicDestroyPost = function (event) {
  // event.target is the delete button that was clicked on
  const deleteButton = event.target
console.log('deleted')
  // Extract the id from the delete button that was clicked on's data-id attribute
  const id = $(deleteButton).data('id')

  // make API call for deleting one book with the data we grabbed from the form
  api.destroy(id)

    // if the API call is successful then invoke the onDetroySuccess function
    .then(ui.onDestroySuccess)

    // if the API call fails then run our onError function
    .catch(ui.onError)
}


const onDynamicUpdatePost = function (event) {

  event.preventDefault()


  const updateForm = event.target


  const id = $(updateForm).data('id')

  const formData = getFormFields(event.target)


  api.updatePost(id, formData)


    .then(ui.onUpdateSuccess)


    .catch(ui.onError)
}
module.exports = {
  onPost,
  onIndexPost,
  onHideIndexPost,
  onDynamicUpdatePost,
  onDynamicDestroyPost
}
