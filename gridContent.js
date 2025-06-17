  const cartes = [
    {
      title: "Jardin Tropical",
      description: "Decouvrez notre collection d'espèces exotiques dans un ambiance chaude et humide recréant les conditions des forêts Tropicales.",
      image: "images/jardin_tropical.jpg"
    },
    {
      title: "Jardin Méditerranéen",
      description: "Plongez dans les senteurs de la garrigue avec nos espèces méditerranéennes adaptées à la s'cheresse et au soleil.",
      image: "images/jardin_mediterrané.jpg"
    },
    {
      title: "Jardin Alpin",
      description: "Admirez la beauté robuste des plantes d'altitude, adaptées aux conditions extrême des montagnes.",
      image: "images/jardin_alpin.jpg"
    },
  ];

  const container = document.getElementById("carteContainer");

  cartes.forEach(carte => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    cardDiv.innerHTML = `
      <img src="${carte.image}" alt="${carte.title}">
      <h1>${carte.title}</h1>
      <p>${carte.description}</p>
    `;

    container.appendChild(cardDiv);
  });
