```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: '$city', avgAge: { $avg: '$age' } } },
  { $sort: { avgAge: -1 } },
  { $limit: 1 }
]);
```