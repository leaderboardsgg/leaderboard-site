import { Plugin } from '@nuxt/types';
import { UserRegister } from '@/types';

const apiPlugin: Plugin = ({ $axios, $config }, inject) => {
  const api = $axios.create({
    baseURL: `${$config.backendBaseUrl}/api/v1`,
  });

  inject('api', {
    register(data: UserRegister) {
      return api.post('/register', data);
    },
  });
};

export default apiPlugin;
