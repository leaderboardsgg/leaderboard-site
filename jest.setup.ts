import '@testing-library/jest-dom';
import path from 'path';
import { sync } from 'glob';
import uniq from 'lodash/uniq';
import upperFirst from 'lodash/upperFirst';
import Vue from 'vue';

/* Globally register all the available components in the base & core directories
 * so that they can be found by jest without any complications.
 *
 * Solution is based on the following example:
 * https://github.com/nuxt/components/issues/58#issuecomment-709961688
 */
const globalComponentPaths = [
  './components/**/base/**/*.vue',
  './components/**/core/**/*.vue',
];

for (const globalComponentPath of globalComponentPaths) {
  // glob returns an array of filenames matching the current globalComponentPath pattern
  for (const file of sync(path.join(__dirname, globalComponentPath))) {
    const componentRoutes = buildComponentRoutes(file);
    const nuxtName = uniq(componentRoutes).join('');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const requiredFile = require(file);

    Vue.component(nuxtName, requiredFile.default ?? { ...requiredFile });
  }
}

function buildComponentRoutes(file: string) {
  const componentRoutes = file.split('/components/')[1]?.split('/');
  if (!componentRoutes) {
    throw new Error('Error: componentRoutes in jest.setup.ts not defined.');
  }

  const routeValue = componentRoutes[componentRoutes.length - 1];
  if (!routeValue) {
    throw new Error('Error: routeValue in jest.setup.ts not defined.');
  }

  // remove .vue from the last element
  componentRoutes[componentRoutes.length - 1] = routeValue.replace('.vue', '');
  componentRoutes[0] = upperFirst(componentRoutes[0]);

  return componentRoutes;
}

global.Vue = Vue as any;
