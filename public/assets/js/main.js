// particlesJS 

particlesJS.load('particles-js-header', 'assets/js/particles1.json', function() { console.log('callback - particles.js config loaded'); }); 

particlesJS.load('particles-js-features', 'assets/js/particles2.json', function() { console.log('callback - particles.js config loaded'); });

particlesJS.load('particles-js-node-network', 'assets/js/particles3.json', function() { console.log('callback - particles.js config loaded'); });

// Fathom Tracking 

let trackedCTAPrimary = false;
let trackedCTAHeader = false;
    
document.getElementById('primary-cta').onclick = function handleCTAClick(e) {
  e.preventDefault();
  if (!trackedCTAPrimary) {
    trackCTAClick();
    trackedCTAPrimary = true;
  }
  window.location = this.href;
}

document.getElementById('header-cta').onclick = function handleCTAClick(e) {
  e.preventDefault();
  if (!trackedCTAHeader) {
    trackCTAClick();
    trackedCTAHeader = true;
  }
  window.location = this.href;
}

function trackCTAClick() {
  if (!window.fathom) return;
  window.fathom.trackGoal('BTEYLTFG', 0);
}

