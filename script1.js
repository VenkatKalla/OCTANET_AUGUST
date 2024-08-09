document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const optionsList = document.getElementById('options-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const type = document.getElementById('type').value;

        const bookingDetails = `Name: ${name}, Date: ${date}, Transport Type: ${type}`;
        
        const optionDiv = document.createElement('div');
        optionDiv.textContent = bookingDetails;
        optionsList.appendChild(optionDiv);
        
        form.reset();
    });
});
