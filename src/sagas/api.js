import axios from 'axios'

const API_ROOT = 'http://newsapi.org/v2/'

axios.defaults.baseURL = API_ROOT
axios.defaults.headers.common['X-Api-Key'] = '3e6dd9e853c24fbc953733b9b5a093e3'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const getResponseData = response => response.data

const Articles = {
  getTopHeadlines: (params = { country: 'us' }) => axios.get('/top-headlines', { params }).then(getResponseData),
  getAll: (params) => axios.get('/everything', { params }).then(getResponseData)
}

export {
  Articles
}