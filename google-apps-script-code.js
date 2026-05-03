/**
 * Google Apps Script for Vogue Productions landing page
 * Works with GET request from the static GitHub Pages HTML.
 */

const SHEET_NAME = "Leads";

function doGet(e) {
  const sheet = getOrCreateSheet_();
  const p = e.parameter || {};

  sheet.appendRow([
    new Date(),
    p.name || "",
    p.phone || "",
    p.address || "",
    p.month || "",
    p.budget || "",
    p.package || "",
    p.date || "",
    p.time || "",
    p.shootType || "",
    p.message || "",
    p.status || "",
    p.page || ""
  ]);

  return ContentService
    .createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Location in Agra",
      "Pregnancy Month",
      "Budget",
      "Package",
      "Preferred Date",
      "Preferred Time",
      "Shoot Type",
      "Message",
      "Status",
      "Page"
    ]);
  }

  return sheet;
}
