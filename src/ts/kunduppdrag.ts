const clients = [
    { name: 'Privé', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/resturang.png' },
    { name: 'NIKE', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild4.png' },
    { name: 'JEWELS', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild5.png' },
    { name: 'SOBE', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild2.png' },
    { name: 'SAFARI', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild3.png' },
    { name: 'VOLVO', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild7.png' },
    { name: 'NESCAFE', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/nescafe.png' },
    { name: 'AMAZON PRIME', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/amazon.png' },
    { name: 'ADIDAS', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild6.png' },
    { name: 'POLESTAR', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild8.png' },
    { name: 'ROADZ', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild9.png' },
    { name: 'ROLEX', description: 'Short description about the project we worked on with this client.', img: '/src/assets/images/bild8.webp' }
];

const clientShowcase = document.querySelector('.client-showcase .container');

if (clientShowcase) {
  clients.forEach(client => {
    const clientCard = document.createElement('div');
    clientCard.classList.add('client-card');
    
    clientCard.innerHTML = `
      <img src="${client.img}" alt="${client.name}">
      <div class="client-title">
        <h3>${client.name}</h3>
        <p>${client.description}</p>
      </div>
    `;
    
    clientShowcase.appendChild(clientCard);
  });
}

// app.ts
const greeting: string = "Hello, TypeScript!";
console.log(greeting);

const addNumbers = (a: number, b: number): number => {
  return a + b;
};

console.log(`Result of 5 + 10 = ${addNumbers(5, 10)}`);
