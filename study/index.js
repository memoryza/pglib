var pgLib = require('./pgLib');
var test = new pgLib.pgLib({});
test.insert('pg_test', {id: 6, name: 'hello world'});
test.query('pg_test', {}, function(data) {
	console.log(data);
});
test.update('pg_test', 6, {name: 'wang'});
test.query('pg_test', {}, function(data) {
	console.log(data);
});
test.query('pg_test', {key: '*', where: 'id=4'})
test.delete('pg_test', 6);
test.query('pg_test', {}, function(data) {
	console.log(data);
});