/**
 * NV MUKHWAS — Premium Hand-Mixed Tradition Since 2005
 * Brand Interactive Javascript Engine
 * Contains: Glass Jar seed simulation, Package toggles, Proportion Mixer, WhatsApp builder
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FILL JARS WITH DYNAMIC ANIMATED SEEDS
  function fillJar(container, count) {
    if (!container) return;
    const colors = container.dataset.colors.split(',');
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
      const seed = document.createElement('span');
      seed.className = 'seed';
      seed.style.left = (Math.random() * 80 + 10) + '%';
      seed.style.bottom = (Math.random() * 65) + '%';
      seed.style.background = colors[Math.floor(Math.random() * colors.length)].trim();
      seed.style.setProperty('--delay', (Math.random() * 0.7).toFixed(2) + 's');
      seed.style.setProperty('--rot', (Math.random() * 360) + 'deg');
      container.appendChild(seed);
    }
  }

  // Initial populate of all standard jars on screen
  document.querySelectorAll('.jar__seeds').forEach(el => {
    fillJar(el, parseInt(el.dataset.count || '30', 10));
  });

  // 2. PRODUCT CARDS SIZE TOGGLES
  document.querySelectorAll('.product-card').forEach(card => {
    const btns = card.querySelectorAll('.size-toggle__btn');
    const priceEl = card.querySelector('.product-card__price');
    const weightEl = card.querySelector('.product-card__weight');
    const jarSeeds = card.querySelector('.jar__seeds');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const size = btn.dataset.size; // 'pocket' or 'family'
        card.dataset.size = size;
        
        // Toggle selected active button style
        btns.forEach(b => b.classList.toggle('active', b === btn));
        
        // Fetch values from dataset
        const displayPrice = card.getAttribute(`data-${size}size-price`);
        const displayWeight = card.getAttribute(`data-${size}size-weight`);
        
        // Update view
        if (priceEl) priceEl.textContent = displayPrice;
        if (weightEl) weightEl.textContent = `${displayWeight} glass jar`;
        
        // Re-simulate seed volume based on size
        const seedCount = size === 'family' ? 45 : 25;
        fillJar(jarSeeds, seedCount);
      });
    });
  });

  // 3. DYNAMIC INTERACTIVE CUSTOM PROPORTIONAL MIXER
  const sliders = {
    fennel: document.getElementById('mix-fennel'),
    gulkand: document.getElementById('mix-gulkand'),
    coriander: document.getElementById('mix-coriander'),
    menthol: document.getElementById('mix-menthol')
  };

  const labels = {
    fennel: document.getElementById('label-fennel'),
    gulkand: document.getElementById('label-gulkand'),
    coriander: document.getElementById('label-coriander'),
    menthol: document.getElementById('label-menthol')
  };

  // Helper to normalize sliders to sum to exactly 100%
  function handleSliderChange(changedKey, value) {
    let sum = 0;
    const keys = Object.keys(sliders);
    const newValue = parseInt(value, 10);
    
    // Set changed slider directly
    sliders[changedKey].value = newValue;
    
    // Calculate sum of other values
    const otherKeys = keys.filter(k => k !== changedKey);
    let currentOthersSum = 0;
    otherKeys.forEach(k => {
      currentOthersSum += parseInt(sliders[k].value, 10);
    });

    const remain = 100 - newValue;

    if (currentOthersSum === 0) {
      // Distribute equally if others are zero
      otherKeys.forEach(k => {
        sliders[k].value = Math.round(remain / otherKeys.length);
      });
    } else {
      // Distribute proportionally
      otherKeys.forEach(k => {
        const currentVal = parseInt(sliders[k].value, 10);
        const ratio = currentVal / currentOthersSum;
        sliders[k].value = Math.round(remain * ratio);
      });
    }

    // Force exact 100% adjustment due to rounding
    let newSum = 0;
    keys.forEach(k => { newSum += parseInt(sliders[k].value, 10); });
    
    if (newSum !== 100) {
      // Adjust largest other slider to balance
      const adjustKey = otherKeys.reduce((a, b) => parseInt(sliders[a].value, 10) > parseInt(sliders[b].value, 10) ? a : b);
      sliders[adjustKey].value = parseInt(sliders[adjustKey].value, 10) + (100 - newSum);
    }

    // Update labels & graphics
    updateMixerDisplay();
  }

  function updateMixerDisplay() {
    let f = parseInt(sliders.fennel.value, 10);
    let g = parseInt(sliders.gulkand.value, 10);
    let c = parseInt(sliders.coriander.value, 10);
    let m = parseInt(sliders.menthol.value, 10);

    // Update texts
    labels.fennel.textContent = f + '%';
    labels.gulkand.textContent = g + '%';
    labels.coriander.textContent = c + '%';
    labels.menthol.textContent = m + '%';

    // Update visual stats segment bar widths
    const segFennel = document.querySelector('.p-segment--f');
    const segGulkand = document.querySelector('.p-segment--g');
    const segCoriander = document.querySelector('.p-segment--c');
    const segMenthol = document.querySelector('.p-segment--m');

    if (segFennel) segFennel.style.width = f + '%';
    if (segGulkand) segGulkand.style.width = g + '%';
    if (segCoriander) segCoriander.style.width = c + '%';
    if (segMenthol) segMenthol.style.width = m + '%';

    // Dynamic color-based seed distribution in live mixer jar
    const mixerSeeds = document.getElementById('mixerSeeds');
    if (mixerSeeds) {
      fillJar(mixerSeeds, 40);
    }
  }

  // Attach listeners to mixer sliders
  Object.keys(sliders).forEach(key => {
    if (sliders[key]) {
      sliders[key].addEventListener('input', (e) => {
        handleSliderChange(key, e.target.value);
      });
    }
  });

  // Handle Mixer Size Selections
  const mixerSizeBtns = document.querySelectorAll('#mixerSize .size-toggle__btn');
  let selectedMixerSize = 'pocket';
  let selectedMixerPrice = '120';
  let selectedMixerWeight = '50g';

  mixerSizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mixerSizeBtns.forEach(b => b.classList.toggle('active', b === btn));
      selectedMixerSize = btn.dataset.size;
      selectedMixerPrice = btn.dataset.price;
      selectedMixerWeight = btn.dataset.weight;
    });
  });

  // Handle Custom Mixer WhatsApp Trigger
  const btnMixerOrder = document.getElementById('btnMixerOrder');
  if (btnMixerOrder) {
    btnMixerOrder.addEventListener('click', () => {
      const waNumber = '919824043947';
      const fennelValue = sliders.fennel.value;
      const gulkandValue = sliders.gulkand.value;
      const corianderValue = sliders.coriander.value;
      const mentholValue = sliders.menthol.value;

      const message = `Hello NV Mukhwas! I want to buy my *Custom Crafted Mixture* (${selectedMixerSize.toUpperCase()} Package) of *₹${selectedMixerPrice}* rupees.

*My Custom Formulation:*
🍃 Premium Fennel (Saunf): ${fennelValue}%
🌹 Sweet Gulkand Drops: ${gulkandValue}%
🌾 Fresh Dhana Dal: ${corianderValue}%
❄️ Cooling Menthol: ${mentholValue}%

*Package Details:*
📦 Size: ${selectedMixerSize === 'family' ? 'Family Jar (150g)' : 'Pocket Jar (50g)'}
💰 Total Price: ₹${selectedMixerPrice}

Please confirm my order coordinates. Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
    });
  }
});

// 4. STANDALONE WHATSAPP DISPATCH HELPER FOR CATALOG PRODUCTS
function orderProduct(productName, button) {
  const waNumber = '919824043947';
  const card = button.closest('.product-card');
  const size = card.getAttribute('data-size') || 'pocket';
  const displayPrice = card.getAttribute(`data-${size}size-price`);
  const displayWeight = card.getAttribute(`data-${size}size-weight`);
  const packName = size.charAt(0).toUpperCase() + size.slice(1);

  // Literal format specified by client instruction: "I want to my <XYZ Product> <Pocket/Family> Package of XXX rupeed"
  // Cleaned for high professional appearance: "I want to buy my Premium Dulhan Mukhwas Pocket Package of 95 rupees."
  const message = `Hello! I want to buy my *${productName}* (${packName} Package, ${displayWeight}) of *${displayPrice}* rupees. Please process this order.`;
  
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
}
