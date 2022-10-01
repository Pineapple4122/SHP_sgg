import Axios from 'axios'
import nprocess from 'nprogress'
import 'nprogress/nprogress.css'

const requests = Axios.create({
   baseURL: '/api',
   timeout: 5000
})

requests.interceptors.request.use((config) => {
   nprocess.start()
   return config
})
requests.interceptors.response.use((res) => {
   nprocess.done()
   return res.data
},() => {

})

export default requests