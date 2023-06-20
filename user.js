const getUsersBtn = document.getElementById('getUsersBtn');
const userGrid = document.getElementById('userGrid');
const loader = document.querySelector('.loader');

getUsersBtn.addEventListener('click', getUsers);

function getUsers() {
  showLoader();

  fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
      hideLoader();
      displayUsers(data.data);
    })
    .catch(error => {
      hideLoader();
      console.error('Error:', error);
    });
}

function displayUsers(users) {
  userGrid.innerHTML = '';

  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
      <h3>${user.first_name} ${user.last_name}</h3>
      <p>${user.email}</p>
    `;

    userGrid.appendChild(card);
  });
}

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
