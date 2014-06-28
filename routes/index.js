
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'CPO\'Neill',
  	headerOne: 'My Name is Casey ... ',
  	headerTwo: 'It\'s nice to meet you.'
  	 });
};