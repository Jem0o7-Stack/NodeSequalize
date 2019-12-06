var Models = require('../models');
var EventType = Models.EventType;

exports.getEventtypes = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    
    EventType.findAndCountAll({
        where: { eventtypeStatus: 'Active'},
        order: [['eventtypeName', 'ASC']],
        offset,
        limit
    })
    .then((data) =>{
        cb(data);
    })
    .catch((err) =>{
        cb(err);
    });

};