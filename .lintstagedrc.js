module.exports = {
  '**/*.{js,ts,tsx}': (/** @type {string[]} */ filenames) => `next lint --fix --file ${filenames.join(' --file ')}`,
  '**/*.{js,ts,tsx,json}': (/** @type {string[]} */ filenames) =>
    `pnpm prettier --check ${filenames.join(' --check ')} --write ${filenames.join(' --write ')}`,
  '**/*.{css,scss}': (/** @type {string[]} */ filenames) => `pnpm stylelint --fix ${filenames.join(' --fix ')}`,
};
