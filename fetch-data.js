// Define the async function to fetch and display user data
async function fetchUserData() {
    // API endpoint URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where user data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> to hold the list of user names
        const userList = document.createElement('ul');

        // Loop through each user and create <li> elements
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by clearing and showing failure message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke the fetchUserData function when the page loads
document.addEventListener('DOMContentLoaded', fetchUserData);
