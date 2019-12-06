var models = require('../models');
var Interest = models.Interest;

exports.getInterest = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;

    Interest.findAndCountAll({
        where: { interestStatus: 'Active'},
        order: [['interestName', 'ASC']],
        offset,
        limit
    })
    .then((data) => {
        cb(data);
    })
    .catch((err) => {
        cb(data);
    });
};