// Template.mornPrompt.events({
// 	'submit form': function(event){
// 		event.preventDefault();
// 		var currentUser = Meteor.userId();
// 		Today.insert({
// 			emotion: emotion,
// 			createdBy: currentUser
// 		});
// 		if ( emotion == "emotion 1" ) {
// 			Router.go('/emotion1');
// 			$( "a.tab-item.home" ).attr("href", "/emotion1");
// 		}
// 		else if ( emotion == "emotion 2" ) {
// 			Router.go('/emotion2');
// 			$( "a.tab-item.home" ).attr("href", "/emotion2");
// 		}
// 		else if ( emotion == "emotion 3" ) {
// 			Router.go('/emotion3');
// 			$( "a.tab-item.home" ).attr("href", "/emotion3");
// 		}
// 		else if ( emotion == "emotion 4" ) {
// 			Router.go('/emotion4');
// 			$( "a.tab-item.home" ).attr("href", "/emotion4");
// 		}
// 		else if ( emotion == "emotion 5" ) {
// 			Router.go('/emotion5');
// 			$( "a.tab-item.home" ).attr("href", "/emotion5");
// 		}
// 		else {
// 			Router.go('/emotion6');
// 			$( "a.tab-item.home" ).attr("href", "/emotion6");
// 		};
// 	},
// 	'click a#emotion1': function(event){
// 		event.preventDefault();
// 	 	emotion = 'emotion 1';
// 		var documentId = this._id;
// 	 	Today.update({ _id: documentId }, {$set: { emotion: "emotion 1" }});
// 	 	console.log("you clicked 1");
// 	},
// 	'click a#emotion2': function(event){
// 		event.preventDefault();
// 	 	emotion = 'emotion 2';
// 		var documentId = this._id;
// 	 	Today.update({ _id: documentId }, {$set: { emotion: "emotion 2" }});
// 	 	console.log("you clicked 2");
// 	},
// 	'click a#emotion3': function(event){
// 		event.preventDefault();
// 	 	emotion = 'emotion 3';
// 		var documentId = this._id;
// 	 	Today.update({ _id: documentId }, {$set: { emotion: "emotion 3" }});
// 	 	console.log("you clicked 3");
// 	},
// 	'click a#emotion4': function(event){
// 		event.preventDefault();
// 	 	emotion = 'emotion 4';
// 		var documentId = this._id;
// 	 	Today.update({ _id: documentId }, {$set: { emotion: "emotion 4" }});
// 	 	console.log("you clicked 4");
// 	},
// 	'click a#emotion5': function(event){
// 		event.preventDefault();
// 	 	emotion = 'emotion 5';
// 		var documentId = this._id;
// 	 	Today.update({ _id: documentId }, {$set: { emotion: "emotion 5" }});
// 	 	console.log("you clicked 5");
// 	},
// 	'click a#emotion6': function(event){
// 		event.preventDefault();
// 	 	emotion = 'emotion 6';
// 		var documentId = this._id;
// 	 	Today.update({ _id: documentId }, {$set: { emotion: "emotion 6" }});
// 	 	console.log("you clicked 6");
// 	}
// });

// Template.mainNav.events({
	// 'click .home': function(event){
	// 	var emotion1 = Today.find( {emotion: "emotion1"} );
	// 	var emotion2 = Today.find( {emotion: "emotion2"} );
	// 	var emotion3 = Today.find( {emotion: "emotion3"} );
	// 	var emotion4 = Today.find( {emotion: "emotion4"} );
	// 	var emotion5 = Today.find( {emotion: "emotion5"} );
	// 	var emotion6 = Today.find( {emotion: "emotion6"} );

	// 	var url1 = "/emotion1";
	// 	var url2 = "/emotion2";
	// 	var url3 = "/emotion3";
	// 	var url4 = "/emotion4";
	// 	var url5 = "/emotion5";
	// 	var url6 = "/emotion6";

	// 	if ( emotion1 ){
	// 		// Router.go('emotion1');
	// 		// var homeURL = "/emotion1";
	// 		$( "a.tab-item.home" ).attr("href", url1);
	// 	} else if ( emotion2 ){
	// 		// Router.go('emotion2');
	// 		// var homeURL = "/emotion2";
	// 		$( "a.tab-item.home" ).attr("href", url2);
	// 	} else if ( emotion3 ){
	// 		// Router.go('emotion3');
	// 		// var homeURL = "/emotion3";
	// 		$( "a.tab-item.home" ).attr("href", url3);
	// 	} else if ( emotion4 ){
	// 		// Router.go('emotion4');
	// 		// var homeURL = "/emotion4";
	// 		$( "a.tab-item.home" ).attr("href", url4);
	// 	} else if ( emotion5 ){
	// 		// Router.go('emotion5');
	// 		// var homeURL = "/emotion5";
	// 		$( "a.tab-item.home" ).attr("href", url5);
	// 	} else {
	// 		// Router.go('emotion6');
	// 		// var homeURL = "/emotion6";
	// 		$( "a.tab-item.home" ).attr("href", url6);
	// 	}

	// 	console.log("you clicked .home");

	// }
// });


Template.mornPrompt.events({
	'click #emotion1': function(event){
		// Router.go('emotion1');
		event.preventDefault();
		var homeURL = "/emotion1";
		$( "a.tab-item.home" ).attr("href", homeURL);

		$( ".title" ).css( "color", "red" );
		console.log("clicked1");
	},
	'click #emotion2': function(event){
		// Router.go('emotion2');
		event.preventDefault();
		var homeURL = "/emotion2";
		$( "a.tab-item.home" ).attr("href", homeURL);

		$( ".title" ).css( "color", "red" );
		console.log("clicked2");
	},
	'click #emotion3': function(event){
		// Router.go('emotion3');
		event.preventDefault();
		var homeURL = "/emotion3";
		$( "a.tab-item.home" ).attr("href", homeURL);

		$( ".title" ).css( "color", "red" );
		console.log("clicked3")
	},
	'click #emotion4': function(event){
		// Router.go('emotion4');
		event.preventDefault();
		var homeURL = "/emotion4";
		$( "a.tab-item.home" ).attr("href", homeURL);

		$( ".title" ).css( "color", "red" );
		console.log("clicked4");
	},
	'click #emotion5': function(event){
		// Router.go('emotion5');
		event.preventDefault();
		var homeURL = "/emotion5";
		$( "a.tab-item.home" ).attr("href", homeURL);

		$( ".title" ).css( "color", "red" );
		console.log("clicked5");
	},
	'click #emotion6': function(event){
		// Router.go('emotion6');
		event.preventDefault();
		var homeURL = "/emotion6";
		$( "a.tab-item.home" ).attr("href", homeURL);

		$( ".title" ).css( "color", "red" );
		console.log("clicked6");
	}
});





































Template.mainNav.events({
	'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
    'click .signup': function(event){
    	Router.go('/register');
    }
});
Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
        	if(error){
        		console.log(error.reason);
        	} else {
        		Router.go('mornPrompt');
        	}
        });
        Router.go('mornPrompt');
    }
});
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
        	if(error){
        		console.log(error.reason);
        	} else {
        		Router.go('mornPrompt');
        	}
        });
    }
});
Template.goals.helpers ({
	'goal': function () {
		var currentUser = Meteor.userId();
		return Goals.find({ createdBy: currentUser }, {sort: {createdAt: -1}});
	}
});
Template.addGoal.events ({
	'submit form': function(event){
		event.preventDefault();
		var goalName = $('[name="goalName"]').val();
		var currentUser = Meteor.userId();
		Goals.insert({
			name: goalName,
			createdAt: new Date(),
			createdBy: currentUser
		}, function(error, results){
			Router.go('goals', { _id:results });
		});
		$('[name="goalName"]').val('');
	}
});
Template.goalItem.events({
	'click .delete-goal': function(event){
		event.preventDefault();
		var documentId = this._id;
		var confirm = window.confirm("Remove this goal from your list?");
		if(confirm){
			Goals.remove({ _id: documentId });
		}
	},
	'keyup [name=goalItem]': function(event) {
	    if(event.which == 13 || event.which == 27){
	        $(event.target).blur();
	    } else {
	        var documentId = this._id;
	        var goalItem = $(event.target).val();
	        Goals.update({ _id: documentId }, {$set: { name: goalItem }});
	    }
	},
	'change [type=checkbox]': function() {
		var documentId = this._id;
		var isCompleted = this.completed;
		if(isCompleted){
			Goals.update({ _id: documentId }, {$set: { completed: false }});
		} else {
			Goals.update({ _id: documentId }, {$set: { completed: true }});
		}
	}
});
Template.goalItem.helpers({
    'checked': function(){
        var isCompleted = this.completed;
        if(isCompleted){
            return "checked";
        } else {
            return "";
        }
    }
});

Template.addLog.events ({
	'submit form': function(event){
		event.preventDefault();
		var documentId = this._id;
		var logName = $('[name="logName"]').val();
		var currentDate = new Date();
		var month = currentDate.getMonth() + 1;
		var day = currentDate.getDate();
		var year = currentDate.getFullYear();
		var newDate = month + "/" + day + "/" + year;
		var currentUser = Meteor.userId();
		Logs.insert({
			name: logName,
			emotion: emotion,
			createdAt: newDate,
			createdBy: currentUser
		});
		// alert("You've submitted your daily reflection!");
		$('[name="logName"]').val('');
		if ( emotion == "emotion 1" ) {
			Router.go('/emotion1');
		}
		else if ( emotion == "emotion 2" ) {
			Router.go('/emotion2');
		}
		else if ( emotion == "emotion 3" ) {
			Router.go('/emotion3');
		}
		else if ( emotion == "emotion 4" ) {
			Router.go('/emotion4');
		}
		else if ( emotion == "emotion 5" ) {
			Router.go('/emotion5');
		}
		else {
			Router.go('/emotion6');
		};
	},
	 'click .emotion1': function(event){
	 	event.preventDefault();
	 	emotion = 'emotion 1';
		var documentId = this._id;
	 	Logs.update({ _id: documentId }, {$set: { emotion: "emotion 1" }});
	 },
	 'click .emotion2': function(event){
	 	event.preventDefault();
	 	emotion = 'emotion 2';
		var documentId = this._id;
	 	Logs.update({ _id: documentId }, {$set: { emotion: "emotion 2" }});
	 },
	 'click .emotion3': function(event){
	 	event.preventDefault();
	 	emotion = 'emotion 3';
		var documentId = this._id;
	 	Logs.update({ _id: documentId }, {$set: { emotion: "emotion 3" }});;
	 },
	 'click .emotion4': function(event){
	 	event.preventDefault();
	 	emotion = 'emotion 4';
		var documentId = this._id;
	 	Logs.update({ _id: documentId }, {$set: { emotion: "emotion 4" }});
	 },
	 'click .emotion5': function(event){
	 	event.preventDefault();
	 	emotion = 'emotion 5';
		var documentId = this._id;
	 	Logs.update({ _id: documentId }, {$set: { emotion: "emotion 5" }});
	 },
	 'click .emotion6': function(event){
	 	event.preventDefault();
	 	emotion = 'emotion 6';
		var documentId = this._id;
	 	Logs.update({ _id: documentId }, {$set: { emotion: "emotion 6" }});
	 }
});

Template.emotion1.helpers({
	'log': function () {
		var currentUser = Meteor.userId();
		return Logs.find({emotion: "emotion 1", createdBy: currentUser}, {sort: {createdAt: -1}})
	}
});
Template.emotion2.helpers({
	'log': function () {
		var currentUser = Meteor.userId();
		return Logs.find({emotion: "emotion 2", createdBy: currentUser}, {sort: {createdAt: -1}})
	}
});
Template.emotion3.helpers({
	'log': function () {
		var currentUser = Meteor.userId();
		return Logs.find({emotion: "emotion 3", createdBy: currentUser}, {sort: {createdAt: -1}})
	}
});
Template.emotion4.helpers({
	'log': function () {
		var currentUser = Meteor.userId();
		return Logs.find({emotion: "emotion 4", createdBy: currentUser}, {sort: {createdAt: -1}})
	}
});
Template.emotion5.helpers({
	'log': function () {
		var currentUser = Meteor.userId();
		return Logs.find({emotion: "emotion 5", createdBy: currentUser}, {sort: {createdAt: -1}})
	}
});
Template.emotion6.helpers({
	'log': function () {
		var currentUser = Meteor.userId();
		return Logs.find({emotion: "emotion 6", createdBy: currentUser}, {sort: {createdAt: -1}})
	}
});

Template.review.helpers({
	'log': function() {
		var currentUser = Meteor.userId();
		return Logs.find({ createdBy: currentUser }, {sort: {createdAt: -1}});
	}
});

Template.logPage.events({
	'click .delete-log': function(event){
		event.preventDefault();
		console.log("you clicked delete");
		var documentId = this._id;
		var confirm = window.confirm("Remove this log from your list?");
		if(confirm){
			Logs.remove({ _id: documentId });
			history.back(-1);
		}
	},
	'keyup [name=logItem]': function(event){
		var documentId = this._id;
	    var logItem = $(event.target).val();
	    Logs.update({ _id: documentId }, {$set: { name: logItem }});
	    console.log("Task changed to: " + logItem);
	}
});

// make an alert after log has been sumbitted













