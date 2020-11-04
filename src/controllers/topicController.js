const topicQueries = require('../db/queries.topics');
  module.exports = {
    index(req, res, next){
      topicQueries.getAllTopics((err, topics) => {
        //#3
        if(err){
          res.redirect(200, 'static/index');
        } else {
          res.render('topics/index', {topics});
        }
      })
  }
}