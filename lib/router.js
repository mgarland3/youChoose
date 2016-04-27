// nav routes

Router.route('/', {
	name: 'start',
	template: 'start'
});
Router.route('login', {
	name: 'login'
});
Router.route('register', {
	name: 'register'
});
Router.route('/mornPrompt', {
	name: 'mornPrompt'
});
Router.route('/logs', {
	name: 'logs'
});
Router.route('/logs/:_id', {
	template:'logPage',
	data: function(){
		var currentLog = this.params._id;
		return Logs.findOne({ _id: currentLog });
	}
});
Router.route('/review', {
	name: 'review'
});
Router.route('/goals', {
	name: 'goals'
});
Router.route('/logout', {
	name: 'logout'
});

// emotion routes

Router.route('/emotion1', {
	name: 'emotion1'
});
Router.route('/emotion2', {
	name: 'emotion2'
});
Router.route('/emotion3', {
	name: 'emotion3'
});
Router.route('/emotion4', {
	name: 'emotion4'
});
Router.route('/emotion5', {
	name: 'emotion5'
});
Router.route('/emotion6', {
	name: 'emotion6'
});







