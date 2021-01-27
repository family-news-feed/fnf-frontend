module.exports = {
  '**/*.(t|j)sx?': ['eslint'], // eslint all js, jsx, ts, tsx
  '*': ['prettier --ignore-unknown --check'], // prettier all files
};
