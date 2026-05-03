/**
 * Google Apps Script Code for Vogue Productions Landing Page
 * Purpose: Save complete and incomplete leads from GitHub Pages landing page to Google Sheet.
 *
 * Sheet columns created:
 * Timestamp | Name | Phone | Location in Agra | Package | Month | Message | Status | Page
 */

const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const sheet = getOrCreateSheet_();
    const data = JSON.parse(e.postData.contents || "{}");

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.location || "",
      data.package || "",
      data.month || "",
      data.message || "",
      data.status || "Incomplete",
      data.page || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Vogue Productions lead capture is running.")
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
      "Package",
      "Month",
      "Message",
      "Status",
      "Page"
    ]);
  }

  return sheet;
}
