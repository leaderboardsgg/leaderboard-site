import { AxiosResponse } from 'axios';
import { UserRegister } from '@/types';

interface ApiInstance {
  register(data: UserRegister): Promise<AxiosResponse<any>>;
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $api: ApiInstance;
  }

  interface NuxtAppOptions {
    $api: ApiInstance;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInstance;
  }
}
