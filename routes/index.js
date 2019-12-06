var express = require('express');
var router = express.Router();

var Country = require('../controllers/country');
var Academy = require('../controllers/academy');
var ADformat = require('../controllers/adformat');
var AgeGroup = require('../controllers/agegroup');
var Channel = require('../controllers/channeltype');
var Club = require('../controllers/club');
var CMSPage = require('../controllers/cmspage');
var CompanyIndustry = require('../controllers/companyindustry');
var CompanyType = require('../controllers/companytype');
var ConnType = require('../controllers/connectiontype');
var Currency = require('../controllers/currencies');
var EventType = require('../controllers/eventtype');
var faqCategory = require('../controllers/faqcategory');
var FoobAllLevel = require('../controllers/fooballlevel');
var FootAllType = require('../controllers/footballtype');
var Hooby = require('../controllers/hobby');
var Interest = require('../controllers/interest');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/country/list', Country.countryList);
router.post('/academy/list', Academy.academyList);
router.post('/adformat/list', ADformat.adformatList);
router.post('/agegroup/list', AgeGroup.agegroupList);
router.post('/channeltype/list', Channel.getChanelList);
router.post('/club/list', Club.clubList);
router.post('/cmspage/list', CMSPage.CMSPageList);
router.post('/companyindustry/list', CompanyIndustry.companyList);
router.post('/companytype/list', CompanyType.companyTypeList);
router.post('/connectiontype/list', ConnType.connectionTypeList);
router.post('/currencies/list', Currency.currencyList);
router.post('/eventtype/list', EventType.eventTypeList);
router.post('/faqcategory/list', faqCategory.faqCategoryList);
router.post('/fooballlevel/list', FoobAllLevel.foobAllLevelList);
router.post('/footalltype/list', FootAllType.footAllTypeList);
router.post('/hobby/list', Hooby.hobbiesList);
router.post('/interest/list', Interest.interestList);

module.exports = router;
