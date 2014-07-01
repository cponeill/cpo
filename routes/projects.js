
/*
 * GET projects listing.
 */

exports.list = function(req, res){
	res.render('projects.ejs', {
		title: 'cponeill',
		Name: 'My Name is Casey ... ',
		Greeting: 'It\'s nice to meet you.'
	});
};