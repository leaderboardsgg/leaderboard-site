import { Middleware } from '@nuxt/types';

const guest: Middleware = ({ $auth, redirect }) => {
  if ($auth.loggedIn) {
    redirect($auth.options.redirect.home);
  }
};

export default guest;
