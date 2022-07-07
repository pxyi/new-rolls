import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';


export const baseUrl = {
    adam: import.meta.env.VUE_APP_ADAM_API,
    slime: import.meta.env.VUE_APP_SLIME_API,
    platform: import.meta.env.VUE_APP_PLATFORM_API,
    kylin: import.meta.env.VUE_APP_KYLIN_API,
    goblin: import.meta.env.VUE_APP_GOBLIN_API
};

const createService = data => {
    const requestURL = baseUrl[data.requestURL];
    const service = axios.create({
        baseURL: requestURL,
        timeout: 10000
    });

    service.interceptors.request.use(
      (config) => {
        if (store.token) {
          config.headers.Authorization = 'Bearer ' + store.token;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    service.interceptors.response.use(
        response => {
          if (response.config.noCallback) {
            return response.data;
          }
          if (response.status === 200 && response.data.code === '0') {
            return response.data.data;
          } else {
            const message = response.data.message;
            Message({
              message: message,
              type: 'error',
              duration: 5 * 1000
            });
            return Promise.resolve(response.data);
          }
        },
        error => {
          return Promise.resolve(error);
        }
    );
    return service(data);
};

export default createService;
