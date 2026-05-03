const packages = [
  { name: "Mini Shoot", price: 4999, type: "basic", tag: "price" },
  { name: "Classic Shoot", price: 9999, type: "premium", tag: "quality" },
  { name: "Luxury Shoot", price: 14999, type: "luxury", tag: "experience" }
];

function showRecommendation() {
  const shootType = document.getElementById("shootType").value;
  const budget = document.getElementById("budget").value;
  const priority = document.getElementById("priority").value;

  let best = null;
  let maxScore = -1;

  packages.forEach(p => {
    let score = 0;

    if (p.type === shootType) score += 40;

    if (budget === "low" && p.price <= 8000) score += 30;
    if (budget === "mid" && p.price <= 15000) score += 30;
    if (budget === "high") score += 30;

    if (p.tag === priority) score += 20;

    score += p.price / 1000;

    if (score > maxScore) {
      maxScore = score;
      best = p;
    }
  });

  document.getElementById("result").innerHTML = `
    <h3>🎯 Recommended</h3>
    <h2>${best.name}</h2>
    <p>₹${best.price}</p>
    <button onclick="selectPkg('${best.name}')">Select</button>
  `;
}

function selectPkg(pkg) {
  const name = document.getElementById("iName").value;

  const msg = `Hi, I am ${name}. I want ${pkg}.`;

  window.location.href =
    `https://wa.me/918433220257?text=${encodeURIComponent(msg)}`;
}

function directWhatsApp() {
  window.location.href =
    "https://wa.me/918433220257?text=Hi, I want maternity shoot details";
}

function scrollToForm() {
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}