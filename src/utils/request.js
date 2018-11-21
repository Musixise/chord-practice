import axios from 'axios'

axios.defaults.timeout = 5000


export default args => {
  return new Promise((resolve, reject) => {
    axios(args).then(res => {
      resolve(res)
    }).catch(err => reject(err))
  })
}