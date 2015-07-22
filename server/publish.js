Meteor.publish("walls", function () {
  return Walls.find(
    {$or: [{"public": true}, {invited: this.userId}, {owner: this.userId}]});
});