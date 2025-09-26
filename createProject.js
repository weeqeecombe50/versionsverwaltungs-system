const fs = require('fs');
const path = require('path');

function createProject(projectName) {
  const projectPath = path.join(__dirname, projectName);
  fs.mkdirSync(projectPath);
  console.log(`Projekt '${projectName}' wurde erstellt.`);
}

const projectName = process.argv[2];
if (!projectName) {
  console.error('Bitte geben Sie einen Projektnamen an.');
  process.exit(1);
}

createProject(projectName);