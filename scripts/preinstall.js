/* eslint-disable no-console */
/**
 * Do NOT allow using `npm` as package manager.
 */
if (process.env.npm_execpath.indexOf('yarn') === -1) {
  console.error('You must use Yarn in this project:');
  console.error('  $ yarn install');
  console.error('');
  process.exit(1);
}
