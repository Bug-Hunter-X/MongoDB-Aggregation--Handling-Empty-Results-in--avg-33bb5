```javascript
// Solution 1: Using a conditional operator
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: {
    _id: '$city',
    avgAge: { $avg: '$age' }
  } },
  { $addFields: {
    avgAge: {
      $cond: {
        if: {
          $eq: ['$avgAge', null]
        },
        then: 0,
        else: '$avgAge'
      }
    }
  } },
  { $sort: { avgAge: -1 } },
  { $limit: 1 }
]);

// Solution 2: Using $ifNull operator
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: {
    _id: '$city',
    avgAge: { $avg: '$age' }
  } },
  { $addFields: { avgAge: { $ifNull: ['$avgAge', 0] } } },
  { $sort: { avgAge: -1 } },
  { $limit: 1 }
]);
```