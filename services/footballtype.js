var Models = require('../models');
var FootAllType = Models.FootAllType;

exports.getFootAllTypes = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    
    FootAllType.findAndCountAll({
        where: { footbltypeStatus: 'Active'},
        order: [['footbltypeName', 'ASC']],
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