
/*
 * GET projects listing.
 */

exports.list = function(req, res){
	res.render('projects.ejs', {
		title: 'cponeill'
	});
};