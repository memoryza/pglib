var pgLib = require('./pgLib');
var test = new pgLib.pgLib({});
//test.insert('pg_test', {id: 5, name: 'hello world'});
//test.query('pg_test', {key: '*', where: 'id=4'})
test.delete('pg_test', 4)