console.log("JS Loaded ✅");

// STEP NAVIGATION
function goToStep(stepId) {
  document.querySelectorAll(".step").forEach(step => {
    step.classList.remove("active");
  });

  document.getElementById(stepId).classList.add("active");
}

// VALIDATIONS
function handleStep1() {
  const name = document.getElementById("name").value.trim();

  if (name.length < 2) {
    alert("Please enter your name");
    return;
  }

  goToStep("step-2");
}

function handleStep2() {
  const val = document.getElementById("shootType").value;
  if (!val) return alert("Please select option");
  goToStep("step-3");
}

function handleStep3() {
  const val = document.getElementById("budget").value;
  if (!val) return alert("Please select budget");
  goToStep("step-4");
}

// PACKAGES
const packages = [
  { name: "Mini Shoot", price: 4999, type: "basic", tag: "price" },
  { name: "Classic Shoot", price: 9999, type: "premium", tag: "quality" },
  { name: "Luxury Shoot", price: 14999, type: "luxury", tag: "experience" }
];

// AI RECOMMENDATION
function showRecommendation() {
  const shootType = document.getElementById("shootType").value;
  const budget = document.getElementById("budget").value;
  const priority = document.getElementById("priority").value;

  if (!priority) {
    alert("Please select priority");
    return;
  }

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

  goToStep("step-5");

  document.getElementById("result").innerHTML = `
    <h3>🎯 Perfect for You</h3>
    <h2>${best.name}</h2>
    <p>₹${best.price}</p>
    <p>✨ Based on your preferences</p>
    <button onclick="selectPkg('${best.name}')">Select Package</button>
  `;
}

// WHATSAPP CLOSE
function selectPkg(pkg) {
  const name = document.getElementById("name").value;

  const msg = `Hi, I am ${name}. I am interested in ${pkg}.`;

  window.location.href =
    "https://wa.me/918433220257?text=" + encodeURIComponent(msg);
}

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
