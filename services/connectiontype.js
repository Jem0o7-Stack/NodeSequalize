var Models = require('../models');
var ConnectionType = Models.ConnType;

exports.getConnectionTypes = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    
    ConnectionType.findAndCountAll({
        where: { conntypeStatus: 'Active'},
        order: [['conntypeName', 'ASC']],
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