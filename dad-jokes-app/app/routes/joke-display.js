import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
  //  let data = this.store.findAll('jokes')

    //console.log(this.store.findAll('jokes'))
    // let data = this.store.findRecord('joke', 1).then(function(joke) {
      
    // )};
  //  data.forEach(function(item){
  //     console.log(item)
  //   });
//   for (x in data){
//     console.log(x)
//   }
//console.log(this.store.findAll('jokes').set('jokes', [...this.store.findAll('jokes')].length))

//console.log(this.store.findAll('jokes').length)

 let num = Math.floor(Math.random() * 4) + 1

// let newData = data.findRecord('jokes', 4)
//     return newData;
   //return this.store.findAll('jokes')
    return this.store.findRecord('jokes',`joke${num}`).then(function(jokes){
      console.log(jokes)
      return jokes;
    });
  },
  // setupController(controller, model) {
  //   controller.set('modelLength', model.get('length'));
  //   console.log(model.get('length'))
  // }
 
});
