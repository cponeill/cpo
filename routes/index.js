
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'cponeill',
  	Name: 'My Name is Casey ... ',
  	Greeting: 'It\'s nice to meet you.'
  	 });
};