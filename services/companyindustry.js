var Models = require('../models');
var CompanyIndustry = Models.CompanyIndustry;

exports.getCompanies = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;
    
    CompanyIndustry.findAndCountAll({
        where: { compindStatus: 'Active'},
        order: [['compindName', 'ASC']],
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