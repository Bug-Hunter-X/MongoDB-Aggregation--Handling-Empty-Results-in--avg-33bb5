# MongoDB Aggregation: Handling Empty Results in $avg
This repository demonstrates a common error in MongoDB aggregation pipelines when using the $avg operator with potentially empty result sets. The code showcases how to gracefully handle these scenarios to avoid unexpected errors or null values.

## Bug Description:
The original aggregation pipeline fails if no documents match the specified criteria or if the 'users' collection is empty. The $avg operator returns null in these cases, potentially breaking downstream operations.

## Solution:
The solution demonstrates two approaches:
1. Using a conditional operator to handle null values from the $avg operator.
2. Using $ifNull operator for a more concise approach.

## How to reproduce the bug:
1. Create a MongoDB collection named 'users'.
2. Insert documents with varying ages and cities into the 'users' collection.
3. Run the 'bug.js' script to reproduce the bug.
4. Run the 'bugSolution.js' script to see how to handle this error gracefully.
