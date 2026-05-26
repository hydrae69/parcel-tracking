// Track Parcel Function (Main Backend Logic)
function trackParcel() {
    const trackingNumber = document.getElementById('trackingNumber').value.trim().toUpperCase();
    
    if (!trackingNumber) {
        alert('Please enter a tracking number');
        return;
    }

    // Simulate API call delay
    document.querySelector('.tracking-input button').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tracking...';
    
    setTimeout(() => {
        const parcel = parcelsDB[trackingNumber];
        
        if (parcel) {
            displayTrackingResult(parcel);
        } else {
            showError('Tracking number not found. Please check and try again.');
        }
        
        document.querySelector('.tracking-input button').innerHTML = '<i class="fas fa-search"></i> Track';
        document.getElementById('trackingResults').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
}

// Display Tracking Results
function displayTrackingResult(parcel) {
    const statusElement = document.getElementById('trackingStatus');
    const timelineElement = document.getElementById('timeline');
    const resultsSection = document.getElementById('trackingResults');
    
    // Status
    const statusClass = `status-${parcel.status}`;
    const statusIcon = getStatusIcon(parcel.status);
    
    statusElement.innerHTML = `
        <div class="status-icon ${statusClass}">
            <i class="${statusIcon}"></i>
        </div>
        <h3>Tracking #${parcel.trackingNumber}</h3>
        <p><strong>Status:</strong> ${formatStatus(parcel.status)}</p>
        <p><strong>Recipient:</strong> ${parcel.recipient}</p>
        <p><strong>From:</strong> ${parcel.from} → <strong>To:</strong> ${parcel.to}</p>
        <p><strong>Weight:</strong> ${parcel.weight}</p>
    `;
    
    // Timeline
    timelineElement.innerHTML = '';
    parcel.timeline.forEach((event, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-icon">
                <i class="${event.icon}"></i>
            </div>
            <div class="timeline-content">
                <h4>${event.status}</h4>
                <p>${event.date} | ${event.location}</p>
            </div>
        `;
        timelineElement.appendChild(timelineItem);
    });
    
    resultsSection.style.display = 'block';
}

// Helper Functions
function getStatusIcon(status) {
    const icons = {
        delivered: 'fas fa-check-circle',
        'in-transit': 'fas fa-shipping-fast',
        pending: 'fas fa-clock'
    };
    return icons[status] || 'fas fa-question-circle';
}

function formatStatus(status) {
    const statusMap = {
        delivered: 'Delivered',
        'in-transit': 'In Transit',
        pending: 'Pending Pickup'
    };
    return statusMap[status] || status;
}

function showError(message) {
    const statusElement = document.getElementById('trackingStatus');
    const timelineElement = document.getElementById('timeline');
    const resultsSection = document.getElementById('trackingResults');
    
    statusElement.innerHTML = `
        <div class="status-icon status-pending">
            <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3>Tracking Not Found</h3>
        <p>${message}</p>
    `;
    
    timelineElement.innerHTML = '';
    resultsSection.style.display = 'block';
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Auto-track demo on load (optional)
window.addEventListener('load', () => {
    // Uncomment to auto-fill demo tracking number
    // document.getElementById('trackingNumber').value = 'PT123456789';
});