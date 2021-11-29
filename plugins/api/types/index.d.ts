import { AxiosResponse } from 'axios';
import { UserRegister } from '@/types';

interface ApiInstance {
  register<T>(data: UserRegister): Promise<AxiosResponse<T>>;
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
