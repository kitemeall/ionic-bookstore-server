var mongojs = require('mongojs');
var db = mongojs('mongodb://bookstore:bookstore@ds047865.mongolab.com:47865/book-store-app', ['users', 'books']);

// Add a unique index
db.users.ensureIndex({
    email: 1
}, {
    unique: true
});

module.exports = db;
