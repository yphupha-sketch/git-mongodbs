use("sample_mflix");
db.movies.find({}).sort({ runtime: -1 }).limit(5)
db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5)
db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3)
