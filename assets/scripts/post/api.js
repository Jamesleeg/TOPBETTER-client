const config = require('./../config')
const store = require('./../store')

const newPost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data

   }
  )


}
const updatePost = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/posts/' + req.params.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
const getPosts = function () {

  console.log('posts')
  return $.ajax({
    url: `${config.apiUrl}/posts`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ` + store.user.token
    }
  })
}
const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,
    method: 'DELETE'
  })
}
module.exports = {
  newPost,
  updatePost,
  getPosts,
  destroy
}
