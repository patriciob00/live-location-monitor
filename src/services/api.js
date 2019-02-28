import Axios from 'axios';

export const Post = ( url, data, params = {} ) => {
  return Axios
    .post(url, data, params )
    .then( data => data)
    .catch( error => { throw error })
}

export const Get = ( url, params = {} ) => {
  return Axios
    .get(url, params)
    .catch( error => { throw error })
}
