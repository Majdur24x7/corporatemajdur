console.log("Corporate Majdur Loaded 🚀");
function incrementViewCount(row) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = sheet.getRange(row, 2); // Column B mein count hai
  var currentValue = cell.getValue();
  cell.setValue(currentValue + 1);
}
