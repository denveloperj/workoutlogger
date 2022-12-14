var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	showForm: function() {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SHOW_FORM
		})
	},
	addWorkout: function(workout) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_WORKOUT,
			workout: workout
		})
	},
	receiveWorkouts: function(workouts) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_WORKOUTS,
			workouts: workouts
		})
	},
	removeWorkout: function(workoutId) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_WORKOUT,
			workoutId: workoutId
		})
	},
}

module.exports = AppActions;