// Query DOM Elements
const svg = document.querySelector('.bomb');
const fuse = svg.querySelector('.fuse');

// Create an object that gsap can animate
const val = { distance: 0 };
// Create a tween
gsap.to(val, {
  // Animate from distance 0 to the total distance
  distance: fuse.getTotalLength(),
  // Loop the animation
  repeat: -1,
  // Wait 1sec before repeating
  repeatDelay: 1,
  // Make the animation lasts 5 seconds
  duration: 5,
  // Function call on each frame of the animation
  onUpdate: () => {
    // Query a point at the new distance value
    const point = fuse.getPointAtLength(val.distance);
    createParticle(point);
  }
});

function createParticle (point) {
  // Create a new circle element
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  // Prepend the element to the SVG
  svg.prepend(circle);
  // Set the coordinates of that circle
  circle.setAttribute('cx', point.x);
  circle.setAttribute('cy', point.y);
  // Define a random radius for each circle
  circle.setAttribute('r', (Math.random() * 2) + 0.2);
  // Define a random color
  circle.setAttribute('fill', gsap.utils.random(['#ff0000', '#ff5a00', '#ff9a00', '#ffce00', '#ffe808']));
  
  // Animate the circle
  gsap.to(circle, {
    // Random cx based on its current position
    cx: '+=random(-20,20)',
    // Random cy based on its current position
    cy: '+=random(-20,20)',
    // Fade out
    opacity: 0,
    // Random duration for each circle
    duration: 'random(1, 2)',
    // Prevent gsap from rounding the cx & cy values
    autoRound: false,
    // Once the animation is complete
    onComplete: () => {
      // Remove the SVG element from its parent
      svg.removeChild(circle);
    }
  });
}

/* Animate the fuse to reduce it */
fuse.setAttribute('stroke-dasharray', fuse.getTotalLength());
fuse.setAttribute('stroke-dashoffset', fuse.getTotalLength() * 2);
gsap.to(fuse, {
  strokeDashoffset: fuse.getTotalLength(),
  duration: 5,
  repeat: -1,
  // Wait 1sec before repeating
  repeatDelay: 1
});