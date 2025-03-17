document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Load featured speakers on homepage
  const featuredSpeakersContainer = document.getElementById('featured-speakers');
  if (featuredSpeakersContainer) {
    const featuredSpeakers = speakers.filter(speaker => speaker.featured);
    loadSpeakers(featuredSpeakersContainer, featuredSpeakers);
  }
  
  // Load all speakers on speakers page
  const allSpeakersContainer = document.getElementById('all-speakers');
  if (allSpeakersContainer) {
    loadSpeakers(allSpeakersContainer, speakers);
  }
  
  // Schedule tabs functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and days
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.schedule-day').forEach(day => day.classList.remove('active'));
        
        // Add active class to clicked button and corresponding day
        this.classList.add('active');
        const dayId = this.getAttribute('data-day');
        document.getElementById(dayId).classList.add('active');
      });
    });
    
    // Load schedule data
    loadSchedule('day1', schedule.day1);
    loadSchedule('day2', schedule.day2);
    loadSchedule('day3', schedule.day3);
  }
});

// Function to load speakers into a container
function loadSpeakers(container, speakersArray) {
  container.innerHTML = '';
  
  speakersArray.forEach(speaker => {
    const speakerCard = document.createElement('div');
    speakerCard.className = 'speaker-card';
    
    speakerCard.innerHTML = `
      <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
      <div class="speaker-info">
        <h3>${speaker.name}</h3>
        <p class="company">${speaker.title}, ${speaker.company}</p>
        <p class="bio">${speaker.bio}</p>
      </div>
    `;
    
    container.appendChild(speakerCard);
  });
}

// Function to load schedule data
function loadSchedule(dayId, scheduleArray) {
  const dayContainer = document.getElementById(dayId);
  if (!dayContainer) return;
  
  dayContainer.innerHTML = '';
  
  scheduleArray.forEach(item => {
    const scheduleItem = document.createElement('div');
    scheduleItem.className = 'schedule-item';
    
    let typeClass = '';
    if (item.type === 'break' || item.type === 'social') {
      typeClass = 'schedule-break';
    }
    
    let speakerInfo = '';
    if (item.speaker) {
      speakerInfo = `<p class="speaker">by ${item.speaker}</p>`;
    }
    
    let trackInfo = '';
    if (item.track) {
      trackInfo = `<span class="schedule-track">${item.track}</span>`;
    }
    
    let typeInfo = '';
    if (item.type && item.type !== 'break' && item.type !== 'social') {
      typeInfo = `<span class="schedule-type">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>`;
    }
    
    scheduleItem.innerHTML = `
      <div class="schedule-time">${item.time}</div>
      <div class="schedule-content ${typeClass}">
        <h3>${item.title}</h3>
        ${speakerInfo}
        <div class="schedule-tags">
          ${trackInfo}
          ${typeInfo}
        </div>
        <p class="description">${item.description}</p>
      </div>
    `;
    
    dayContainer.appendChild(scheduleItem);
  });
}