const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const passport = require('passport');

//requiring routers
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const positionRoutes = require('./routes/position');
const orderRoutes = require('./routes/order');

//initialize our app with express
const app = express();
require('dotenv').config();

//Connect to mongoDB
const mongoURI =
	`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-jqdm7.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, {
		useCreateIndex: true
		, useNewUrlParser: true
		, useUnifiedTopology: true
	})
	.then(() => {}, (err) => {
		console.log(err);
	});
const conn = mongoose.connection;
conn.on('open', () => {
	console.log('connected to mongo database');
});
//init gfs
let gfs;
conn.once('open', () => {
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection('uploads');
});
//middleware


app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/order', orderRoutes);

app.listen(3000, () =>
	console.log('Server started on port 3000')
);
module.exports = app;
