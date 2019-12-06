var CMSPage = require('../services').CMSPage;

exports.CMSPageList = (req, res, next) => {
	var query = {};
	query.languageID = req.body.languageID;
	query.apiType = req.body.apiType;
	query.cmspageName = req.body.cmspageName;
    query.apiVersion = req.body.apiVersion;
    
	CMSPage.showCmspage(query, (ret) => {
		//console.log(ret);
		if(ret)
		{
			res.json({status: "true",
			data: ret,
			message: 'done'})
		}
		else
		{
			res.json({status: "false",
			data: ret.errors,
			message: 'err'})
		}	
	});

};
