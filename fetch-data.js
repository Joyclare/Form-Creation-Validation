// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4a: Fetch data from the API
        const response = await fetch(apiUrl);

        // Step 4b: Convert response to JSON
        const users = await response.json();

        // Step 5: Clear the "Loading..." message
        dataContainer.innerHTML = '';

        // Step 6a: Create a <ul> element
        const userList = document.createElement('ul');

        // Step 6b: Loop through users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 6c: Append the <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Handle errors and update UI
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 8: Run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
