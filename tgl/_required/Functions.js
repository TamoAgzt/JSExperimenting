//Torn Gems Libraries | Functions
import Logger from '../classes/Debug/Logger.js';
const logger = new Logger();

function SelectFromWhere(_select, _from, _whereField, _whereValue) {
  // Select from table where field is a specific value
  // Loop through all entries from the table until the right field has the right value, than return the outcome.
  for (let index = 0; index < _from.length; index++) {
    if (_from[index][_whereField] == _whereValue) {
      logger.Log('Retrieved ' + _from[index][_select]);
      return _from[index][_select];
    }
  }
  logger.Log(
    'ERROR: tgl/_required/Functions.SelectFromWhere(): Entry not found'
  );
  return 'tgl/_required/Functions.SelectFromWhere(): Entry not found';
}

async function LoadJSONFiles(alias, path) {
  // Get JSON data from path with alias to use in scripts
  const response = await fetch(path);
  const data = await response.json();
  logger.Log(
    'tgl/_required/Functions.LoadJSONFiles(): Loaded JSON files ' +
      alias +
      ' ' +
      data
  );
  return { alias, data };
}

async function InitializeJSONData() {
  // Initialize JSON data with path and an alias to use in scripts
  const jsonData = {};
  const files = [
    { alias: 'Test', path: './assets/data/test.json' },
    { alias: 'GameConsts', path: './assets/data/game_constants.json' },
    { alias: 'Lang', path: './assets/data/languages.json' }
  ];
  logger.Log(
    'tgl/_required/Functions.InitializeJSONData(): Initialized files: ' + files
  );
  for (const file of files) {
    const { alias, data } = await LoadJSONFiles(file.alias, file.path);
    jsonData[alias] = data;
  }
  return jsonData;
}
