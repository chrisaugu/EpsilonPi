angular.module("EpsilonPi", ['ngRoute'])

.service('Projects', function($q, $firebase, fbRef, fbAuth, projectListValue) {
	var self = this;
	this.fetch = function () {
		if (this.projects) return $q.when(this.projects);
		return fbAuth().then(function(auth) {
			var deferred = $q.defer();
			var ref = fbRef.child('projects-fresh/' + auth.auth.uid);
			var $projects = $firebase(ref);
			ref.on('value', function(snapshot) {
				if (snapshot.val() === null) {
					$projects.$set(projectListValue);
				}
				self.projects = $projects.$asArray();
				deferred.resolve(self.projects);
			});

			//Remove projects list when no longer needed.
			ref.onDisconnect().remove();
			return deferred.promise;
		});
	};
})