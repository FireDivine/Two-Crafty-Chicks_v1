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
export function getStamp(id) {
  return request
    .get('/v1/stamps/' + id)
    .then((res) => {
      // console.log(res.body[0])
      return res.body[0]
    })
    .catch((err) => {
      console.error(err)
    })
}
export function getAllCatalogs() {
  return request
    .get('/v1/stamps/catalogs')
    .then((res) => {
      // console.log(res.body)
      return res.body
    })
    .catch((err) => {
      console.error(err)
    })
}
export function getAllTypes() {
  return request
    .get('/v1/stamps/types')
    .then((res) => {
      //  console.log(res.body)
      return res.body
    })
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
export function postStamps(stamps) {
  return request
    .post('/v1/stamps/add')
    .send(stamps)
    .then((res) => {
      //console.log('postapi: ', res.body, stamps)
      return res.body
    })
}
export function updateStamp(id, stamp) {
  return request
    .patch('/v1/stamps/update/' + id)
    .send(stamp)
    .then((res) => {
      console.log('api update:', res.body, id, stamp)
      return res.body
    })
}
export function deleteStamp(id) {
  return request.del('/v1/stamps/delete/' + id).then((res) => res.body)
}
