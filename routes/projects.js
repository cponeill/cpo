
/*
 * GET projects listing.
 */

exports.list = function(req, res){
	res.render('projects.ejs', {
		title: 'cponeill',
		headerOne: 'My Name is Casey ... ',
		headerTwo: 'It\'s nice to meet you.'
	});
};