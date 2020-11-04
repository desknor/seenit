const staticRoutes = require('../routes/static');
const topicRoutes = require('../routes/topics');

module.exports = {
  init(app) {
    app.use(staticRoutes);
    app.use(topicRoutes);
  }
}