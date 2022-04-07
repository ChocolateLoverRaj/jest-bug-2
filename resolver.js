module.exports = (file, options) => {
  if (['never', 'fs'].includes(file)) console.log(file)
  return options.defaultResolver(file, options)
}
