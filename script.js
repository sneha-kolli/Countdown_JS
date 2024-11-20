document.addEventListener('DOMContentLoaded', () => {
    const startDateInput = document.getElementById('in-date');
    const endDateInput = document.getElementById('out-date');

    const daysRes = document.getElementById('days-res');
    const hrsRes = document.getElementById('hrs-res');
    const minsRes = document.getElementById('mins-res');
    const secRes = document.getElementById('sec-res');

    function calculateTimeDifference() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        const now = new Date();

        if (startDate && endDate && endDate > startDate) {
            // Calculate the difference in seconds
            const totalSeconds = Math.max((endDate - now) / 1000, 0);

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = Math.floor(totalSeconds % 60);

            // Update the HTML elements
            daysRes.textContent = days.toString().padStart(2, '0');
            hrsRes.textContent = hours.toString().padStart(2, '0');
            minsRes.textContent = minutes.toString().padStart(2, '0');
            secRes.textContent = seconds.toString().padStart(2, '0');
        } else {
            // If no valid dates or end date is before start date
            daysRes.textContent = '00';
            hrsRes.textContent = '00';
            minsRes.textContent = '00';
            secRes.textContent = '00';
        }
    }

    // Update the timer when the date inputs change
    startDateInput.addEventListener('change', calculateTimeDifference);
    endDateInput.addEventListener('change', calculateTimeDifference);

    // Update the timer every second
    setInterval(calculateTimeDifference, 1000);
});
