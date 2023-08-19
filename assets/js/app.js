const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); // Añado el símbolo # para el ID
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Cambiado de response a data
    console.log(data);
    $n.textContent = data.name; // Cambiado de ${data.name} a data.name
    $b.textContent = data.blog; // Cambiado de ${data.blog} a data.blog
    $l.textContent = data.location; // Cambiado de ${data.location} a data.location
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = "Algo salió mal: " + err; 
}

displayUser('stolinski').catch(handleError);
