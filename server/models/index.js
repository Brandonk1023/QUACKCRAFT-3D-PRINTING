// require User
// require Filament

/* require File
NOTE: Can we rename "file" to something more... or less like "file"? Like pattern or recipe, but not those. This is just for the backend coding. so, "printableFile" or "Printable"<-- is that acceptable?
*/

const User = require('./User.js');
const Filament = require('./Filament.js');
const Printable = require('./Printable.js');

module.exports = { User, Filament, Printable };
