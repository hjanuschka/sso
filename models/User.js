
// Create new comment in your database and return its id
exports.create = function(user, text, cb) {
  db.users.insert(user, (doc, err) => {
      cb(doc._id)
  });
}

// Get a particular comment
exports.get = function(id, cb) {
  cb(null, {id:id, text: 'Very nice example'})
}

// Get all comments
exports.all = function(cb) {
  cb(null, [])
}

// Get all comments by a particular user
exports.allByUser = function(user, cb) {
  cb(null, [])
}