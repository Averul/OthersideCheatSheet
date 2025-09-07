const EVIDENCE = [
  { id: "writing",   label: "Writing",   css: "ev-writing"   },
  { id: "freezing",  label: "Freezing",  css: "ev-freezing"  },
  { id: "emf20",     label: "EMF 20+",   css: "ev-emf"       },
  { id: "uv",        label: "UV",        css: "ev-uv"        },
  { id: "radiation", label: "Radiation", css: "ev-radiation" },
  { id: "audio",     label: "Audio",     css: "ev-audio"     }
];

let ghosts = [
  {
    name: "Revenant",
    evidence: ["emf20","radiation","writing"],
    behaviors: {
      interaction: {
        abilities: [
          "Known to be a powerful active spirit; haunting feels like literal suffocation",
          "Can light candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Stamina drains faster when targeted",
          "LOS: Normal",
          "Holy Water: Normal",
          "Disoriented for 5 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: null
      }
    }
  },
  {
    name: "Banshee",
    evidence: ["audio","radiation","emf20"],
    behaviors: {
      interaction: {
        abilities: [
          "Player can hear screams from Spirit Box or Spirit Boom Box",
          "Can extinguish candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "LOS: Normal",
          "Holy Water: Normal",
          "Disoriented for 5 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: null
      }
    }
  },
  {
    name: "Demon",
    evidence: ["writing","uv","radiation"],
    behaviors: {
      interaction: {
        abilities: [
          "Leaves hot temps on touched objects",
          "Can extinguish candles",
          "Can light candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Hunts as soon as 90 BPM",
          "Shorter hunt cooldown",
          "LOS: Low",
          "Holy Water: Very Effective — stops hunts for 2 minutes when sprayed",
          "Disoriented for 8 seconds after Holy Water"
        ],
        threshold: "90 BPM", frequency: "Short cooldown", movementSpeed: null
      }
    }
  },
  {
    name: "Skia",
    evidence: ["audio","emf20","uv"],
    behaviors: {
      interaction: {
        abilities: [
          "Unique Spirit Box responses",
          "Can light candles",
          "Cannot interact with FLX-POD"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Increased hunt cooldown",
          "Distressed sounds near player during hunt",
          "Increased speed until near target, then reduces to normal",
          "LOS: Fast",
          "Holy Water: Normal",
          "Disoriented for 5 seconds after Holy Water"
        ],
        threshold: null, frequency: "Longer cooldown", movementSpeed: "Fast → Normal near target"
      }
    }
  },
  {
    name: "Wraith",
    evidence: ["audio","freezing","uv"],
    behaviors: {
      interaction: {
        abilities: ["Targets a specific player", "No feet when hunting", "Can extinguish candles"],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Breaks LOS easily",
          "Substantially increased LOS",
          "Holy Water: Effective — reduces speed during hunt",
          "LOS: Very High",
          "Disoriented for 5 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: "Very fast"
      }
    }
  },
  {
    name: "Bhoot",
    evidence: ["freezing","radiation","writing"],
    behaviors: {
      interaction: {
        abilities: [
          "Increased hunt cooldown",
          "Room the ghost is in gets cold moments before hunting",
          "Can extinguish candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: ["LOS: Normal", "Holy Water: Normal", "Disoriented for 5 seconds after Holy Water"],
        threshold: null, frequency: "Longer cooldown", movementSpeed: null
      }
    }
  },
  {
    name: "Tariaksuq",
    evidence: ["audio","emf20","freezing"],
    behaviors: {
      interaction: {
        abilities: [
          "Blows out multiple candles at once (chance)",
          "Can extinguish candles",
          "Turns off lights more frequently",
          "Never turns on lights",
          "Will only appear in full form during a hunt"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "LOS increases/decreases with light",
          "Holy Water: Normal — stops hunts for 90 seconds when sprayed",
          "LOS: Normal",
          "Disoriented for 5 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: null
      }
    }
  },
  {
    name: "Tantalus",
    evidence: ["freezing","uv","emf20"],
    behaviors: {
      interaction: {
        abilities: [
          "Never closes doors",
          "Never slams doors (except during a hunt)",
          "Increases speed slightly",
          "Cannot interact with FLX-POD"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Holy Water: Less Effective",
          "LOS: Moderate",
          "Disoriented for 3 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: "Slightly faster"
      }
    }
  },
  {
    name: "Iblis",
    evidence: ["audio","freezing","writing"],
    behaviors: {
      interaction: {
        abilities: [
          "Shapeshifts during hunts",
          "Increases speed slightly",
          "Can extinguish candles",
          "Can light candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "LOS: Moderate",
          "Holy Water: Normal",
          "Disoriented for 5 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: "Slightly faster"
      }
    }
  },
  {
    name: "Shura",
    evidence: ["emf20","writing","freezing"],
    behaviors: {
      interaction: {
        abilities: [
          "Shorter cooldown",
          "Larger LOS range",
          "Harder to break LOS",
          "Increases speed",
          "Can extinguish candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Holy Water: Less Effective",
          "LOS: Fast",
          "Disoriented for 3 seconds after Holy Water"
        ],
        threshold: null, frequency: "Short cooldown", movementSpeed: "Fast"
      }
    }
  },
  {
    name: "Phantom",
    evidence: ["radiation","audio","uv"],
    behaviors: {
      interaction: {
        abilities: [
          "No manifest events",
          "More shadow events",
          "Turns off radios, but never on",
          "Can extinguish candles",
          "Cannot interact with FLX-POD"
        ],
        inabilities: []
      },
      hunting: {
        abilities: ["LOS: Normal", "Holy Water: Normal", "Disoriented for 5 seconds after Holy Water"],
        threshold: null, frequency: null, movementSpeed: null
      }
    }
  },
  {
    name: "Poltergeist",
    evidence: ["uv","emf20","writing"],
    behaviors: {
      interaction: {
        abilities: [
          "Throws more objects than normal ghosts",
          "Increases speed slightly",
          "Can extinguish candles",
          "Can light candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: ["LOS: Moderate", "Holy Water: Normal", "Disoriented for 5 seconds after Holy Water"],
        threshold: null, frequency: null, movementSpeed: "Slightly faster"
      }
    }
  },
  {
    name: "Strigoi",
    evidence: ["uv","freezing","writing"],
    behaviors: {
      interaction: {
        abilities: [
          "Actively raises heart rate when in the room with the ghost",
          "Shadow events only",
          "Turns on radios, never off",
          "Increases speed slightly",
          "Can light candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "LOS: Moderate",
          "Holy Water: Normal",
          "Disoriented for 5 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: "Slightly faster"
      }
    }
  },
  {
    name: "Wisp",
    evidence: ["audio","radiation","freezing"],
    behaviors: {
      interaction: {
        abilities: [
          "Turns on lights significantly more than other ghosts",
          "Never turns off lights",
          "Increases speed slightly",
          "Can light candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Holy Water: Very Effective — stops hunts for 2 minutes when sprayed",
          "LOS: Moderate",
          "Disoriented for 8 seconds after Holy Water"
        ],
        threshold: null, frequency: null, movementSpeed: "Slightly faster"
      }
    }
  },
  {
    name: "The Echo",
    evidence: ["radiation","freezing","uv"],
    behaviors: {
      interaction: {
        abilities: [
          "Cannot interact with main breaker; only individual breakers (except post hunt)",
          "Cannot turn on or off lights",
          "Cannot turn on or off radios",
          "Can extinguish candles",
          "Cannot interact with FLX-POD"
        ],
        inabilities: []
      },
      hunting: {
        abilities: ["LOS: Normal", "Holy Water: Normal", "Disoriented for 5 seconds after Holy Water"],
        threshold: null, frequency: null, movementSpeed: null
      }
    }
  },
  {
    name: "The Forgotten",
    evidence: ["emf20","radiation","uv"],
    behaviors: {
      interaction: {
        abilities: [
          "The hardest ghost to identify with No Evidence",
          "Increases speed slightly",
          "Cannot interact with FLX-POD"
        ],
        inabilities: []
      },
      hunting: {
        abilities: ["LOS: Moderate", "Holy Water: Normal", "Disoriented for 5 seconds after Holy Water"],
        threshold: null, frequency: null, movementSpeed: "Slightly faster"
      }
    }
  },
  {
    name: "Doppelganger",
    evidence: ["audio","writing","uv"],
    behaviors: {
      interaction: {
        abilities: ["Returns to favorite room before hunting", "Shorter distance LOS", "Can light candles"],
        inabilities: []
      },
      hunting: {
        abilities: ["LOS: Normal", "Holy Water: Normal", "Disoriented for 5 seconds after Holy Water"],
        threshold: null, frequency: null, movementSpeed: null
      }
    }
  },
  {
    name: "Wewe Gombel",
    evidence: ["radiation","emf20","freezing"],
    behaviors: {
      interaction: {
        abilities: [
          "Turns off lights only",
          "Short cooldown",
          "Cannot interact with main breaker; only individual breakers (except post hunt)",
          "Increases speed drastically",
          "Can extinguish candles"
        ],
        inabilities: []
      },
      hunting: {
        abilities: [
          "Holy Water: Very Effective",
          "LOS: Very Fast",
          "Disoriented for 8 seconds after Holy Water"
        ],
        threshold: null, frequency: "Short cooldown", movementSpeed: "Very fast"
      }
    }
  }
];

let editMode = false;

function buildFilters() {
  const wrap = document.getElementById("dynamicFilters");
  wrap.innerHTML = "";
  const evBox = document.createElement("div");
  evBox.className = "evidence";
  evBox.innerHTML = `<button onclick="resetEvidence()" class="toggle-dark-mode small">Clear Evidence</button><h2>Select Evidence</h2>`;
  EVIDENCE.forEach(ev => {
    const id = `ev-${ev.id}`;
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" id="${id}" data-type="evidence" value="${ev.id}" onclick="filterGhosts()"> ${ev.label}`;
    evBox.appendChild(label);
    evBox.appendChild(document.createElement("br"));
  });
  wrap.appendChild(evBox);
}

function renderGhosts() {
  const list = document.getElementById("ghostList");
  list.innerHTML = "";
  ghosts.forEach((ghost, idx) => {
    const item = document.createElement("div");
    item.className = "ghost-item";
    item.id = `ghost-${idx}`;
    const chips = ghost.evidence.map(id => {
      const meta = EVIDENCE.find(e => e.id === id);
      return meta ? `<span class="chip ${meta.css}">${meta.label}</span>` : "";
    }).join("");
    item.innerHTML = `
      <div class="card">
        <div class="card-front">
          <h3>${ghost.name}</h3>
          <div class="chips">${chips || `<span class="chip none">No evidence set</span>`}</div>
          <div class="hint ${editMode ? "" : "hidden"}">Edit: Click chips below</div>
          <div class="edit-evidence ${editMode ? "" : "hidden"}">
            ${EVIDENCE.map(ev => {
              const active = ghost.evidence.includes(ev.id) ? "active" : "";
              return `<button class="chip ${ev.css} ${active}" onclick="toggleGhostEvidence(${idx}, '${ev.id}')">${ev.label}</button>`;
            }).join("")}
          </div>
          <button onclick="openModal(${idx})">View Details</button>
        </div>
      </div>
    `;
    list.appendChild(item);
  });
}

function openModal(index) {
  const ghost = ghosts[index];
  const modal = document.getElementById("detailsModal");
  const body  = document.getElementById("modalBody");
  const chips = ghost.evidence.map(id => {
    const m = EVIDENCE.find(e => e.id === id);
    return m ? `<span class="chip ${m.css}">${m.label}</span>` : "";
  }).join("");
  body.innerHTML = `
    <h2 id="modalTitle">${ghost.name}</h2>
    <div class="chips" style="margin-bottom:10px">${chips || `<span class="chip none">No evidence set</span>`}</div>
    ${accordionBehaviors(ghost)}
  `;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("detailsModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function accordionBehaviors(ghost) {
  const b = ghost.behaviors || {};
  const i = b.interaction || { abilities: [], inabilities: [] };
  const h = b.hunting || { abilities: [], threshold: null, frequency: null, movementSpeed: null };
  const mkList = (arr) => (arr && arr.length)
    ? `<ul class="acc-list">${arr.map(x => `<li>${x}</li>`).join("")}</ul>`
    : `<div class="acc-empty">No notes</div>`;
  const mkPill = (label, val) => val ? `<span class="beh-pill"><span>${label}:</span> ${val}</span>` : "";
  const interaction = `
    <details class="acc" open>
      <summary class="acc-summary">
        <span>Interaction Behavior</span>
        <span class="acc-chevron" aria-hidden="true"></span>
      </summary>
      <div class="acc-body">
        <div class="beh-col">
          <h4>Abilities</h4>
          ${mkList(i.abilities || [])}
        </div>
        <div class="beh-col">
          <h4>Inabilities</h4>
          ${mkList(i.inabilities || [])}
        </div>
      </div>
    </details>
  `;
  const hunting = `
    <details class="acc">
      <summary class="acc-summary">
        <span>Hunting Behavior</span>
        <span class="acc-chevron" aria-hidden="true"></span>
      </summary>
      <div class="acc-body">
        <div class="beh-col">
          <h4>Abilities</h4>
          ${mkList(h.abilities || [])}
        </div>
        <div class="beh-col">
          <h4>Attributes</h4>
          <div class="beh-pills">
            ${mkPill("Threshold", h.threshold)}
            ${mkPill("Frequency", h.frequency)}
            ${mkPill("Movement", h.movementSpeed)}
          </div>
        </div>
      </div>
    </details>
  `;
  return interaction + hunting;
}

const CANON_TRAITS = new Set([
  "slow","highLosSpeed",
  "turnOnLights","turnOffLights",
  "turnOnRadios","turnOffRadios",
  "neverClosesDoors","neverSlamsDoors",
  "lightsCandles","blowsOutCandles",
  "noFlxPod","yesFlxPod",
  "holyWaterVeryEffective","holyWaterEffective","holyWaterLessEffective","holyWaterNormal",
  "closesDoors"
]);

const TRAIT_SYNONYMS = {
  canCloseDoors: "closesDoors",
  cantUseFlxPod: "noFlxPod",
  cannotUseFlxPod: "noFlxPod",
  cantInteractWithFlxPod: "noFlxPod",
  cannotInteractWithFlxPod: "noFlxPod",
  canInteractWithFlxPod: "yesFlxPod",
  canUseFlxPod: "yesFlxPod",
  canLightCandles: "lightsCandles",
  canExtinguishCandles: "blowsOutCandles",
  blowsCandles: "blowsOutCandles",
  lightsOn: "turnOnLights",
  lightsOff: "turnOffLights",
  radiosOn: "turnOnRadios",
  radiosOff: "turnOffRadios"
};

function normalizeTraitId(id) {
  if (!id) return null;
  if (CANON_TRAITS.has(id)) return id;
  const mapped = TRAIT_SYNONYMS[id];
  return CANON_TRAITS.has(mapped) ? mapped : null;
}

const TRAIT_SECTIONS = {
  slow: ["Demon"],
  highLosSpeed: [
    "Skia","Wraith","Tantalus","Iblis","Shura",
    "Poltergeist","Strigoi","Wisp","The Forgotten","Wewe Gombel"
  ],
  turnOffLights: [
    "Revenant","Banshee","Demon","Skia","Wraith","Bhoot","Tariaksuq",
    "Tantalus","Iblis","Shura","Phantom","Poltergeist","Strigoi",
    "The Forgotten","Doppelganger","Wewe Gombel"
  ],
  turnOnLights: [
    "Revenant","Banshee","Demon","Skia","Wraith","Bhoot","Tantalus",
    "Iblis","Shura","Phantom","Poltergeist","Strigoi","Wisp",
    "The Forgotten","Doppelganger","Wewe Gombel"
  ],
  turnOffRadios: [
    "Revenant","Banshee","Demon","Skia","Wraith","Bhoot","Tariaksuq",
    "Tantalus","Iblis","Shura","Phantom","Poltergeist","Wisp",
    "The Forgotten","Doppelganger","Wewe Gombel"
  ],
  turnOnRadios: [
    "Revenant","Banshee","Demon","Skia","Wraith","Bhoot","Tariaksuq",
    "Tantalus","Iblis","Shura","Poltergeist","Strigoi","Wisp",
    "The Forgotten","Doppelganger","Wewe Gombel"
  ],
  closesDoors: [
    "Revenant","Banshee","Demon","Skia","Wraith","Bhoot","Tariaksuq",
    "Iblis","Shura","Phantom","Poltergeist","Strigoi","Wisp",
    "The Echo","The Forgotten","Doppelganger","Wewe Gombel"
  ],
  neverClosesDoors: ["Tantalus"],
  neverSlamsDoors:  ["Tantalus"],
  noFlxPod:  ["Skia","Tantalus","Phantom","The Echo","The Forgotten"],
  yesFlxPod: [
    "Revenant","Banshee","Demon","Wraith","Bhoot","Tariaksuq",
    "Iblis","Shura","Poltergeist","Strigoi","Wisp","Doppelganger",
    "Wewe Gombel"
  ],
  holyWaterVeryEffective: ["Demon","Wisp","Wewe Gombel"],
  holyWaterEffective:     ["Wraith"],
  holyWaterLessEffective: ["Tantalus","Shura"],
  holyWaterNormal: [
    "Revenant","Banshee","Skia","Bhoot","Tariaksuq","Iblis","Phantom",
    "Poltergeist","Strigoi","The Echo","The Forgotten","Doppelganger"
  ],
  lightsCandles: [
    "Revenant","Demon","Skia","Iblis","Poltergeist","Strigoi","Wisp","Doppelganger"
  ],
  blowsOutCandles: [
    "Banshee","Demon","Wraith","Bhoot","Tariaksuq","Iblis","Shura",
    "Phantom","Poltergeist","The Echo","Wewe Gombel"
  ]
};

const TRAITS_BY_GHOST = {};
for (const [trait, names] of Object.entries(TRAIT_SECTIONS)) {
  names.forEach(name => {
    (TRAITS_BY_GHOST[name] ||= []).includes(trait) || TRAITS_BY_GHOST[name].push(trait);
  });
}

ghosts.forEach(g => {
  const t = (TRAITS_BY_GHOST[g.name] || []).slice();
  if (t.includes("noFlxPod") && t.includes("yesFlxPod")) {
    t.splice(t.indexOf("yesFlxPod"), 1);
  }
  g.traits = t;
});

function toggleEditMode() {
  editMode = !editMode;
  document.getElementById("editToggleBtn").textContent = editMode ? "Disable Edit Mode" : "Enable Edit Mode";
  renderGhosts();
}

function toggleGhostEvidence(ghostIndex, evId) {
  const g = ghosts[ghostIndex];
  if (!g) return;
  if (!Array.isArray(g.evidence)) g.evidence = [];
  const i = g.evidence.indexOf(evId);
  if (i >= 0) g.evidence.splice(i, 1);
  else if (g.evidence.length < 3) g.evidence.push(evId);
  else { g.evidence.shift(); g.evidence.push(evId); }
  renderGhosts();
  filterGhosts();
}

function exportData() {
  const data = { ghosts };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "the_other_side_ghosts.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function toKey(name) { return String(name || "").trim().toLowerCase(); }

function ensureDefaults(g) {
  g.evidence = Array.isArray(g.evidence) ? g.evidence : [];
  g.behaviors = g.behaviors || {
    interaction: { abilities: [], inabilities: [] },
    hunting: { abilities: [], threshold: null, frequency: null, movementSpeed: null }
  };
  return g;
}

function deepMerge(target, source) {
  if (source.behaviors) {
    target.behaviors = target.behaviors || {};
    const tb = target.behaviors, sb = source.behaviors;
    tb.interaction = tb.interaction || { abilities: [], inabilities: [] };
    if (sb.interaction) {
      if (Array.isArray(sb.interaction.abilities))  tb.interaction.abilities  = sb.interaction.abilities.slice();
      if (Array.isArray(sb.interaction.inabilities)) tb.interaction.inabilities = sb.interaction.inabilities.slice();
    }
    tb.hunting = tb.hunting || { abilities: [], threshold: null, frequency: null, movementSpeed: null };
    if (sb.hunting) {
      if (Array.isArray(sb.hunting.abilities)) tb.hunting.abilities = sb.hunting.abilities.slice();
      if ("threshold"     in sb.hunting) tb.hunting.threshold     = sb.hunting.threshold;
      if ("frequency"     in sb.hunting) tb.hunting.frequency     = sb.hunting.frequency;
      if ("movementSpeed" in sb.hunting) tb.hunting.movementSpeed = sb.hunting.movementSpeed;
    }
  }
  if (Array.isArray(source.speed)) target.speed = source.speed.slice();
  if (typeof source.losSpeedUp === "boolean") target.losSpeedUp = source.losSpeedUp;
  return target;
}

function importData() {
  const inp = document.getElementById("importFile");
  if (!inp.files || !inp.files[0]) return alert("Choose a JSON file first.");
  const reader = new FileReader();
  reader.onload = e => {
    try {
      let parsed = JSON.parse(e.target.result);
      const incoming = Array.isArray(parsed) ? parsed
                     : Array.isArray(parsed.ghosts) ? parsed.ghosts
                     : null;
      if (!incoming) {
        alert("Invalid file: expected an array of ghosts or { ghosts: [...] }");
        return;
      }
      const byName = new Map(ghosts.map(g => [toKey(g.name), g]));
      let updated = 0, added = 0;
      incoming.forEach(raw => {
        if (!raw || !raw.name) return;
        const key = toKey(raw.name);
        const existing = byName.get(key);
        if (existing) {
          if (Array.isArray(raw.evidence)) existing.evidence = raw.evidence.slice();
          deepMerge(existing, raw);
          ensureDefaults(existing);
          updated++;
        } else {
          const newcomer = ensureDefaults({
            name: raw.name,
            evidence: Array.isArray(raw.evidence) ? raw.evidence.slice() : [],
            behaviors: raw.behaviors || undefined,
            speed: Array.isArray(raw.speed) ? raw.speed.slice() : undefined,
            losSpeedUp: typeof raw.losSpeedUp === "boolean" ? raw.losSpeedUp : undefined
          });
          ghosts.push(newcomer);
          byName.set(key, newcomer);
          added++;
        }
      });
      renderGhosts();
      filterGhosts();
      alert(`Import complete: ${updated} updated, ${added} added. (Attributes preserved.)`);
    } catch (err) {
      console.error(err);
      alert("Could not parse JSON.");
    }
  };
  reader.readAsText(inp.files[0]);
}

function getSelectedFilters() {
  const evidence = Array.from(document.querySelectorAll('input[data-type="evidence"]:checked')).map(cb => cb.value);
  return { evidence };
}

function filterGhosts() {
  const selectedEvidence = Array.from(document.querySelectorAll('input[data-type="evidence"]:checked')).map(cb => cb.value);
  const q = document.getElementById("searchBar").value.trim().toLowerCase();
  const selectedTraitsRaw = Array.from(document.querySelectorAll('.traits input:checked')).map(cb => cb.id);
  const selectedTraits = selectedTraitsRaw.map(normalizeTraitId).filter(Boolean);
  ghosts.forEach((ghost, i) => {
    const el = document.getElementById(`ghost-${i}`);
    const matchesEvidence = selectedEvidence.every(ev => (ghost.evidence || []).includes(ev));
    const matchesSearch   = ghost.name.toLowerCase().includes(q);
    const gTraits = ghost.traits || [];
    const matchesTraits = selectedTraits.every(tr => gTraits.includes(tr));
    const show = matchesEvidence && matchesSearch && matchesTraits;
    el.classList.toggle("match", show);
    el.classList.toggle("hidden", !show);
  });
}

function searchGhosts() { filterGhosts(); }
function resetEvidence() {
  document.querySelectorAll('input[data-type="evidence"]').forEach(cb => { cb.checked = false; cb.disabled = false; });
  filterGhosts();
}
function resetFilters() {
  document.querySelectorAll('#dynamicFilters input[type="checkbox"]').forEach(cb => { cb.checked = false; cb.disabled = false; });
  document.querySelectorAll('.traits input[type="checkbox"]').forEach(cb => { cb.checked = false; cb.disabled = false; });
  document.getElementById("searchBar").value = "";
  ghosts.forEach((_, i) => document.getElementById(`ghost-${i}`).classList.remove("hidden","match"));
}

function toggleDarkMode() {
  document.body.classList.toggle("light-mode");
  const button = document.querySelector(".toggle-dark-mode");
  button.textContent = document.body.classList.contains("light-mode") ? "Toggle Dark Mode" : "Toggle Light Mode";
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
  const button = document.querySelector(".toggle-sidebar");
  if (sidebar.classList.contains("hidden")) { button.textContent = ">"; button.style.left = "16px"; }
  else { button.textContent = "<"; button.style.left = "270px"; }
}

document.addEventListener("DOMContentLoaded", () => {
  buildFilters();
  renderGhosts();
});
