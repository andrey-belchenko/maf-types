// As of MongoDB version 4.4, the following system variables are available in the MongoDB Aggregation Framework:

// 1. `$$ROOT`: References the root document, i.e., the top-level document, currently being processed in the aggregation pipeline stage.

// 2. `$$CURRENT`: References the document currently being processed in the aggregation pipeline stage.

// 3. `$$NOW`: Returns the current date as a date object.

// 4. `$$CLUSTER_TIME`: Available only on MongoDB Enterprise. References the cluster time from when the aggregation operation began.

// 5. `$$REMOVE`: Used in the `$set` aggregation stage to remove a particular field.

// 6. `$$DESCEND`: Available for use in the `$meta` aggregation operator. It returns information on the structure of the index keys.

// 7. `$$PRUNE`: Available for use in the `$meta` aggregation operator. It returns information on whether the index keys are ascending or descending.

// 8. `$$KEEP`: Available for use in the `$meta` aggregation operator. It returns information on the order of the index keys.

// Please note that the availability of these system variables can depend on the MongoDB version and the specific aggregation stage where they are used.