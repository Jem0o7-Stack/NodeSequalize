var Models = require('../models');
var ADformat = Models.ADformat;

exports.getAdformats = (query, cb) => {
    var languageID = query.languageID,
		apiType = query.apiType,
		apiVersion = query.apiVersion,
		pageNum = query.page,
		pageSize = query.pagesize;
		
	var offset = pageNum * pageSize;
    var limit = pageSize;

   ADformat.findAndCountAll ({
	where: { adformatStatus: 'Active'},
	order: [['adformatName', 'ASC']],
	offset,
	limit

   })
   .then((data) => {
	cb(data);

})
.catch((err) => {
	cb(err);
});

};