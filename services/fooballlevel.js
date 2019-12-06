var Models = require('../models');
var FoobAllLevel = Models.FoobAllLevel;

exports.getFoobAllLevels = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    
    FoobAllLevel.findAndCountAll({
        where: { footbllevelStatus: 'Active'},
        order: [['footbllevelName', 'ASC']],
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