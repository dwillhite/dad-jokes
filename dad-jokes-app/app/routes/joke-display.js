import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';

export default Route.extend({
  model: function() {

    let num = Math.floor(Math.random() * 43) + 1
    let theJoke = this.store.findRecord('jokes',`joke${num}`);
   
    // if(isEmpty(this.theJoke)) {
    //   console.log(theJoke.get(this))
    //   return this.store.findRecord('jokes',`joke${num}`);
     
    // }

  
    return theJoke;
    // .then(function(jokes){

    //   return jokes;

    // });
  },

  actions: {
    newJoke() {
      this.refresh();
    }
  }
 
});
