/*
 * @Author: eversle everslevivo@gmail.com
 * @Date: 2024-01-09 10:51:42
 * @LastEditors: eversle everslevivo@gmail.com
 * @LastEditTime: 2024-01-09 16:13:34
 * @FilePath: \vue-project\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: eversle everslevivo@gmail.com
 * @Date: 2024-01-09 10:51:42
 * @LastEditors: eversle everslevivo@gmail.com
 * @LastEditTime: 2024-01-09 16:10:02
 * @FilePath: \vue-project\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import {ipConfig} from './ipConfig'

const defaultConfig = {
    timeout: 5 * 1000,
    baseURL:'/api'  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！
  };
  const instance = axios.create(Object.assign({}, defaultConfig));

instance.interceptors.request.use((config)=>{
    if (config.headers['baseUrl']) {
        config.baseURL = ipConfig[config.headers['baseUrl']]()
       
      }
})


instance.interceptors.response.use()

export default instance