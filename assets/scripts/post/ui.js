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
const onIndexSuccess = function (responseData) {

  const posts = responseData
  console.log(responseData)


  let postsHtml = ''

  posts.forEach(post => {

    postsHtml += `
  <p>ID: ${post._id}</p>
     <h4>Created: ${post.createdAt}</h4>
     <h4>Sport: ${post.sport}</h4>
     <h4>Title: ${post.title}</h4>
     <h4>Body: ${post.body}</h4>
     <form class='post-update-dynamic' data-id=${post._id}>
     <input type='text' name='post[sport]' placeholder='Enter Sport Here' required>
     <input type='text' name='post[title]' placeholder='Enter Title Here' required>
     <input type='text' name='post[body]' placeholder='Enter Body Here' required>
     <button type='submit'>Update Post</button>
     </form>
     <button class='post-delete-dynamic' data-id=${post._id}>
     Delete Post
     </button>

   `
  })

  $('#posts-display').html(postsHtml)

  $('#posts-display').show()
}

const onIndexFailure = function () {
console.log('failedindex')
}
const onUpdateSuccess = function (responseData) {

  $('#post-message').html('You successfully updated the book')


  $('#post-display').html('posts have changed! Click "Get All Post" again to see all the posts.')


  $('#post-message').addClass('success')


  setTimeout(() => {
    $('#post-message').html('')
    $('#post-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
  $('#posts-display').hide()
}
const onError = function (err) {

  console.error(err)

  $('#error-message').html('Something went wrong, please try again.')

  $('#error-message').addClass('failure')


  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}
module.exports = {
  onNewPostSuccess,
  onNewPostFailure,
  onIndexSuccess,
  onIndexFailure,
  onError,
  onUpdateSuccess
}
