// Get the current date
const currentDate = new Date();

// Check if this is the user's first visit by looking for a 'lastVisit' key in localStorage
if (!localStorage.getItem('lastVisit')) {
    // This is the user's first visit
    document.getElementById('message').textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Retrieve the last visit date from localStorage and convert it to a Date object
    const lastVisit = new Date(localStorage.getItem('lastVisit'));

    // Calculate the time difference in milliseconds
    const timeDiff = currentDate - lastVisit;

    // Calculate the number of days between visits
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Update the message based on the time difference
    if (daysDiff < 1) {
        document.getElementById('message').textContent = "Back so soon! Awesome!";
    } else {
        const daysText = daysDiff === 1 ? "day" : "days";
        document.getElementById('message').textContent = `You last visited ${daysDiff} ${daysText} ago.`;
    }
}

// Store the current visit date in localStorage for the next visit
localStorage.setItem('lastVisit', currentDate.toString());
