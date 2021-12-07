// angular.module('EpsilonPi')
// .factory('Events', function() {
var Events = function (){
	var topics = {};
	var hasOwn = topics.hasOwnProperty;

	return {
		subscribe: function(topic, listener) {
			// Create the topic's object if not yet created
			if(!hasOwn.call(topics, topic)) topics[topic] = { queue: [] };

			// Add the listener to queue
			var index = topics[topic].queue.push(listener) - 1;

			// Provide handle back for removal of listeners of a topic
			return (function(topic, index) {
				return {
					remove: function() {
						delete topics[topic].queue[index];
					}
				}
			})(topic, index);
		},
		subscribeOnce: function(topic, listener) {
			// Create the topic's object if not yet created
			if (!topics[topic]) topics[topic] = { queue: [] };

			// Add the listener to queue
			var index = topics[topic].queue.push(function(data){
				listener(data);
				delete topics[topic].queue[index];
			}) - 1;

			// Provide handle back for removal of topic
			return {
				remove: function() {
					delete topics[topic].queue[index];
				}
			};
		},
		publish: function(topic, info) {
			// If the topic doesn't exist, or there's no listeners in queue, just leave
			// if(!hasOwn.call(topics, topic)) return;
			if (!topics[topic] || !topics[topic].queue.length) return;

			// Cycle through topics queue, fire!
			var items = topics[topic].queue;
			items.forEach(function(item) {
				item && item(info !== undefined ? info : {});
			});
		}
	};
};
// return Events;
// });