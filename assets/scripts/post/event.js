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
const onDynamicDestroyPost = function () {

  const deleteButton = event.target

  const id = $(deleteButton).data('id')
  console.log('id is:', id)


  api.destroy(id)


    .then(ui.onDestroySuccess)


    .catch(ui.onError)
}


const onDynamicUpdatePost = function () {

  event.preventDefault()


  const formData = getFormFields(event.target)
  const updateForm = event.target


  const id = $(updateForm).data('id')
  console.log('formData is:', formData)


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
