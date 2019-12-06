import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addLaugh: function() {
      let upadatLaugh = this.get('laugh' + 1);
      let newLaugh = this.store.get('jokes').findBy('id', 'joke1');
      newLaugh.set('laugh', upadatLaugh);
     // let newLaugh = this.store.incrementProperties('laugh');
      console.log(upadatLaugh)

      newLaugh.save(); 
    }
   }
});
