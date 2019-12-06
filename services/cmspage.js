var models = require('../models');
var sequelize = require('../common/mysql');
const Sequelize = require('sequelize');
var CMSPage = models.CMSPage;


exports.showCmspage = (query, cb) => {
	//console.log(query);

	CMSPage.findOne({
		where: { cmspageName: query.cmspageName	} 
		})
		.then((data) => 
		{
			//console.log(data);
			cb(data);
		})
		.catch((err) => {
			cb(err);
	});
};

