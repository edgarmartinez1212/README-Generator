// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";
  return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">\n`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") return "";
  return `- ### [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") return "";
  return `## License
  This project is licensed under ${license}\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

---

## Table of Contents
- ### [Installation](#installation)\n
- ### [Usage](#usuage)\n
- ### [Contributing](#contributing)\n
- ### [Tests](#tests)\n
- ### [Questions](#questions)\n
${renderLicenseLink(data.license)}

---

## Installation
${data.installation}

---

## Usuage
${data.usage}

---

## Contributing
${data.contributing}

---

## Tests
${data.tests}

---

## Questions
If you have any questions, please visit my [GitHub](https://github.com/${data.github}) or [Email](${data.email}) me.\n
GitHub: https://github.com/${data.github}\n
Email: ${data.email}

---

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
