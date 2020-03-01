import axios from 'axios'

const API_ROOT = 'https://conduit.productionready.io/api'

axios.defaults.baseURL = API_ROOT
axios.defaults.headers.common['Authorization'] = '3e6dd9e853c24fbc953733b9b5a093e3'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const getResponseData = response => response.data

const News = {
  getTopHeadlines: (params = { country: 'us' }) => axios.get('/top-headlines', { params }).then(getResponseData)
}

export {
  News
}