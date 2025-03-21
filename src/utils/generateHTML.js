export function generateHTML(data) {
    return `
    <html>
      <head><title>${data.name}'s Portfolio</title></head>
      <body>
        <h1>${data.name}'s Web3 Portfolio</h1>
        <h2>Skills</h2>
        <ul>${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        <h2>Projects</h2>
        <ul>${data.projects.map(project => `<li>${project}</li>`).join('')}</ul>
      </body>
    </html>`;
  }