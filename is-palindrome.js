const reverse = require('string-rev');

module.exports = (str) =>{
    if(typeof str !== 'string'){
        throw TypeError(`expects a string got ` + (typeof str));
    }
    return reverse(str) === str;
}