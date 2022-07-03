import request from 'superagent'

export function getAllCollections() {
  return request
    .get('/v1/collections')
    .then((res) => res.body)
    .catch((err) => {
      console.error(err)
    })
}
export function getAllStamps() {
  return request
    .get('/v1/stamps')
    .then((res) => res.body)
    .catch((err) => {
      console.error(err)
    })
}
export function postCollections(col) {
  return request
    .post('/v1/collections/add')
    .send(col)
    .then((res) => {
      // console.log('postapi: ', res.body, col)
      return res.body
    })
}
