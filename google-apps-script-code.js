const SHEET_NAME = "Leads";
function doGet(e){
  const s = SpreadsheetApp.getActiveSpreadsheet();
  let sh = s.getSheetByName(SHEET_NAME) || s.insertSheet(SHEET_NAME);
  if(sh.getLastRow()==0){
    sh.appendRow(["Timestamp","Name","Phone","Location","Month","Budget","Package","Date","Time","Shoot Type","Message","Status","Page"]);
  }
  const p=e.parameter||{};
  sh.appendRow([new Date(),p.name||"",p.phone||"",p.address||"",p.month||"",p.budget||"",p.package||"",p.date||"",p.time||"",p.shootType||"",p.message||"",p.status||"",p.page||""]);
  return ContentService.createTextOutput("OK");
}
