VOGUE PRODUCTIONS – AGRA MATERNITY LANDING PAGE

FILES INCLUDED
1. index.html
   - Main GitHub Pages landing page
   - WhatsApp enquiry enabled
   - Incomplete lead capture ready
   - Video sections included

2. google-apps-script-code.js
   - Paste this code into Google Apps Script
   - It saves leads into Google Sheets

3. videos/
   - Add your videos here if you want local video hosting:
     hero-video.mp4
     showcase-1.mp4

IMPORTANT
GitHub Pages is static hosting. It cannot store form submissions by itself.
For abandoned/incomplete lead capture, connect Google Sheets using Apps Script.

QUICK SETUP
1. Create Google Sheet
2. Extensions > Apps Script
3. Paste google-apps-script-code.js
4. Deploy as Web App
5. Copy Web App URL
6. Open index.html
7. Find:
   const GOOGLE_SCRIPT_URL = "";
8. Paste URL:
   const GOOGLE_SCRIPT_URL = "YOUR_WEB_APP_URL";
9. Upload index.html and videos folder to GitHub repository
10. Enable GitHub Pages from Settings > Pages
