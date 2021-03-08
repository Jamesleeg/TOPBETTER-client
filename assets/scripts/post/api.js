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
module.exports = {
  newPost,
  updatePost
}
