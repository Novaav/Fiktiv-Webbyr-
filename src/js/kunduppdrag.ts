


const clients = [
    { name: 'Client Name 1', description: 'Short description about the project we worked on with this client.', img: 'client-image1.jpg' },
    { name: 'Client Name 2', description: 'Short description about the project we worked on with this client.', img: 'client-image2.jpg' },
    { name: 'Client Name 3', description: 'Short description about the project we worked on with this client.', img: 'client-image3.jpg' }
  ];
  

  const clientShowcase = document.querySelector('.client-showcase .container');
  
  if (clientShowcase) {
    clients.forEach(client => {
      const clientCard = document.createElement('div');
      clientCard.classList.add('client-card');
      
      clientCard.innerHTML = `
        <img src="${client.img}" alt="${client.name}">
        <h3>${client.name}</h3>
        <p>${client.description}</p>
      `;
      
      
      clientShowcase.appendChild(clientCard);
    });
  }

