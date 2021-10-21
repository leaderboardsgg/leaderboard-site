import '@testing-library/jest-dom';
import path from 'path';
import glob from 'glob';
import uniq from 'lodash/uniq';
import upperFirst from 'lodash/upperFirst';
import Vue from 'vue';

/* Globally register all the availbale components in the base & core directories
 * so that they can be found by jest without any complications.
 *
 * Solution is based on the following example:
 * https://github.com/nuxt/components/issues/58#issuecomment-709961688
 */
const globalComponentPaths = [
  './components/**/base/**/*.vue',
  './components/**/core/**/*.vue',
];
globalComponentPaths.forEach((globalComponentPath) => {
  // glob returns an array of filenames matching the current globalComponentPath pattern
  glob.sync(path.join(__dirname, globalComponentPath)).forEach((file) => {
    const componentRoutes = file.split('/components/')[1].split('/');
    componentRoutes[componentRoutes.length - 1] = componentRoutes[
      componentRoutes.length - 1
    ].replace('.vue', ''); // remove .vue from the last element
    componentRoutes[0] = upperFirst(componentRoutes[0]);
    const nuxtName = uniq(componentRoutes).join('');
    const requiredFile = require(file);

    if (requiredFile.default) {
      Vue.component(nuxtName, requiredFile.default);
    } else {
      Vue.component(nuxtName, { ...requiredFile });
    }
  });
});

global.Vue = Vue;
