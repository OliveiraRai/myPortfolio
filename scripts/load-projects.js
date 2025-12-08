const projects = [
  {
    title: "Portfólio Pessoal",
    description: "Meu portfólio em HTML, CSS e JS, responsivo e interativo.",
    image: "assets/img/portfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/OliveiraRai/myPortfolio"
  },
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  // Só cria card se tiver título e link
  if (!project.title || !project.link) return;

  const card = document.createElement('a');
  card.href = project.link;
  card.target = "_blank";
  card.classList.add('project-card');

  card.innerHTML = `
  <img 
  src="${project.image}"   
  onerror="this.src='../assets/img/default-image.png'";
  alt="${project.title}">
  <div class="project-content">
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description || ''}</p>
    <div class="project-tech">
      ${Array.isArray(project.tech) ? project.tech.map(t => `<span>${t}</span>`).join('') : ''}
    </div>
  </div>
`;

  container.appendChild(card);
});
