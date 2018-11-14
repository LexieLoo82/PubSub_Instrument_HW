const PubSub = require('../helpers/pub_sub.js')

const ListView = function(listItems){
  this.listItems = listItems
};

ListView.prototype.bindEvents = function(){
  this.listItems.forEach((item) => {
   item.addEventListener('select', (evt) => {
     const selectedInstrument = evt.target.id;
     PubSub.publish('InstrumentView:item-selected', selectedInstrument);
     console.log('ListView broadcasting item selected', selectedInstrument);
   })
 })
};

module.exports = ListView;
