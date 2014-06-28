
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'cponeill',
  	headerOne: 'My Name is Casey ... ',
  	headerTwo: 'It\'s nice to meet you.'
  	 });
};