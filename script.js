const CREW = {
  dom: {
    name: "Dominic Toretto",
    bio: "Street racer. Family man. Drives a 1970 Dodge Charger R/T.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Vin_Diesel_by_Gage_Skidmore.jpg/440px-Vin_Diesel_by_Gage_Skidmore.jpg",
    stats: ["Driving: 99", "Loyalty: 100", "Quarter Mile: 9.4s"],
  },
  brian: {
    name: "Brian O'Conner",
    bio: "Ex-FBI. Adrenaline junkie. Drives a Nissan Skyline GT-R R34.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Paul_Walker_Fast_Five_premiere.jpg/440px-Paul_Walker_Fast_Five_premiere.jpg",
    stats: ["Driving: 96", "Charm: 95", "Quarter Mile: 9.7s"],
  },
  letty: {
    name: "Letty Ortiz",
    bio: "Mechanic. Brawler. Heart of the crew. Drives a Plymouth Barracuda.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelle_Rodriguez_2019_by_Glenn_Francis.jpg/440px-Michelle_Rodriguez_2019_by_Glenn_Francis.jpg",
    stats: ["Driving: 94", "Toughness: 99", "Quarter Mile: 9.9s"],
  },
  hobbs: {
    name: "Luke Hobbs",
    bio: "DSS Agent. The size of a small mountain. Drives a Gurkha LAPV.",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Dwayne_Johnson_2%2C_2013.jpg/440px-Dwayne_Johnson_2%2C_2013.jpg",
    stats: ["Strength: 100", "Driving: 88", "Intimidation: 99"],
  },
};

/* ---------- PART 1 ---------- */

const pageTitle = document.getElementById("page-title");

const statList = document.getElementsByClassName("stat");
console.log(Array.isArray(statList));

const allButtons = document.getElementsByTagName("button");

const firstSwitchBtn = document.querySelector(".switch-btn");
const allSwitchBtns = document.querySelectorAll(".switch-btn");

/* ---------- PART 2 ---------- */

const statArray = [...statList];
statArray.forEach(s => console.log(s.innerText));

/* ---------- PART 3 ---------- */

function showMember(key) {
  const member = CREW[key];

  document.getElementById("member-name").innerText = member.name;
  document.querySelector(".bio").innerText = member.bio;
  document.getElementById("member-photo").src = member.photo;

  const statsEl = document.getElementById("stats");
  statsEl.innerHTML = "";

  member.stats.forEach(stat => {
    const li = document.createElement("li");
    li.className = "stat";
    li.innerText = stat;
    statsEl.appendChild(li);
  });
}

/* ---------- PART 4 ---------- */

allSwitchBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    showMember(btn.dataset.member);
  });
});

document.getElementById("remove-member-btn").addEventListener("click", () => {
  const card = document.getElementById("crew-card");
  card.parentNode.removeChild(card);
});

/* ---------- PART 5 ---------- */

document.getElementById("add-member-form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("new-name").value.trim();
  const ride = document.getElementById("new-ride").value.trim();

  if (!name || !ride) return;

  const li = document.createElement("li");
  li.innerText = `${name} drives a ${ride} `;

  const btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.innerText = "Remove";

  btn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });

  li.appendChild(btn);
  document.getElementById("recruits").appendChild(li);

  document.getElementById("new-name").value = "";
  document.getElementById("new-ride").value = "";
});

/* ---------- PART 6 ---------- */

document.getElementById("red-btn").addEventListener("click", () => {
  document.getElementById("crew-card").style.backgroundColor = "#5a1a1a";
});

document.getElementById("blue-btn").addEventListener("click", () => {
  document.getElementById("crew-card").style.backgroundColor = "#1a2a5a";
});

document.getElementById("reset-btn").addEventListener("click", () => {
  document.getElementById("crew-card").style.backgroundColor = "#2a2a2a";
});