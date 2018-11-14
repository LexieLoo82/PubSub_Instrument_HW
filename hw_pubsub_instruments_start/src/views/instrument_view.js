const PubSub = require('../helpers/pub_sub.js')

const InstrumentView = function(element){
  this.element = element
};

// InstrumentView.prototype.bindEvents = function () {
//   PubSub.subscribe('InstrumentFamilies:instrument-ready', (evt) => {
//     const instrument = evt.detail
//     console.log('instrument view recieved selected instrument', instrument);
//     this.renderInstrument(instrument)
//   })
};
module.exports = InstrumentView;
