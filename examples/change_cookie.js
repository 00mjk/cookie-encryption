'use strict';
/**
 * @file change cookie example
 * @module cookie-encryption
 * @package cookie-encryption
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var cookiee = require('../index.min.js'); // use
    // require('cookie-encryption')
    var app = require('express')();
    var cookie = require('cookie-parser');
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

var vault = cookiee('ciao');

// express routing
app.use(cookie('foo')); // using only for parsing header cookie
app.get('/', function(req, res) {

    var o = 'write: ' + vault.write(req, 'ciao');
    o += '<br>';
    // vault.cookie = 'new'; // change cookie
    o += 'write: ' + vault.write(req, 'pippo', 'new', 'base64');
    res.send(o);
});
app.get('/r', function(req, res) {

    var o = 'read: ' + vault.read(req);
    o += '<br>';
    o += 'read: ' + vault.read(req, 'new', 'base64');
    res.send(o);
});
// server starting
app.listen(3000);
console.log('starting "hello world" on port 3000');
