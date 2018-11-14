const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  // PubSub.subscribe('InstrumentView:item-selected', (event) => {
  //   const selectedInstrument = event.detail;
  //   console.log('InstrumentFamilies received selected instrument', selectedInstrument);
  //   const foundinstrument = this.findByName(selectedInstrument);
  //   console.log('Instrumentfamilies found instrument details', foundInstrument);
  //   PubSub.publish('InstrumentFamilies:instrument-ready', foundInstrument);
  // })
};
// InstrumentView.prototype.renderInstrument = function (instrument) {
//   this.element.innerHTML = " "
//   const header = document.createElement('h1')
//   header.textContent = instrument.name

};




module.exports = InstrumentFamilies;
