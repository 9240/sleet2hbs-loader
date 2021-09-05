const sleet = require('sleet')
const sleetHandlebars = require('sleet-handlebars')
const fs = require('fs')
module.exports = function loader(source, map, meta) {
  const content = fs.readFileSync(this.resource, 'utf8');
  const handleContent = sleet.compile(content, {filename: this.resource, sleetHandlebars})
  return handleContent.content;
};