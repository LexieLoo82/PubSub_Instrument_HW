const instrumentData = require('./data/instrument_families.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentView = require('./views/instrument_view.js');
const ListView = require('./views/list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const instrumentsDataModel = new InstrumentFamilies(instrumentData);
  console.log(instrumentsDataModel.instrumentFamilies);
  instrumentsDataModel.bindEvents();

  const list = document.querySelectorAll('#instrument-families');
  const listView = new ListView(list);
  listView.bindEvents();
});
