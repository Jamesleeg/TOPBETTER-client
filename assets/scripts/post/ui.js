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
  // extract the books from the response's data into a variable
  const posts = responseData
  console.log(responseData)
  // $('#game-message').text(games)
  // log the information we get back from the API so we know how we can
  // interact with it.

  let postsHtml = ''
  // loop over heach book in the books array
  posts.forEach(post => {
  // for each book, add the html for that individual book to booksHtml
    // when adding the delte button we add a data-id attribute,the the id
    // of the button we want to delete
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
     <button class=dyn-update>Update Post</button>
     </form>
     <button class='posts-delete-dynamic' data-id=${post._id}>
     Delete Post
     </button>

   `
  })
  // select the #books-display element and set its html to be all the books
  $('#posts-display').html(postsHtml)
  // setTimeout(() => {
  //   $('#posts-display').text('')
  // }, 10000)
  $('#posts-display').show()
}

const onIndexFailure = function () {
console.log('failedindex')
}
const onUpdateSuccess = function (responseData) {

  $('#post-message').html('You successfully updated the book')


  $('#post-display').html('posts have changed! Click "Get All Books" again to see all the posts.')


  $('#post-message').addClass('success')


  setTimeout(() => {
    $('#post-message').html('')
    $('#post-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
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
