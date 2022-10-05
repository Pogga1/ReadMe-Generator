// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (data) => {
  let licenseBadge = "";

  if (data.LicenseType === "MIT") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  }
  if (data.LicenseType === "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return licenseBadge;
  }
  if (data.LicenseType === "Boost") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    return licenseBadge;
  }
  if (data.LicenseType === "BDS 3-Clause") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    return licenseBadge;
  }
  if (data.License === false) {
    return licenseBadge;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseTableOfContents = (data) => {
  if (data.License === true) {
    return `* [License](#license)`;
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (data) => {
  if (data.License === false) {
    return "";
  } else {
    return `# License
${renderLicenseBadge(data)}`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.Title}
  ## https://github.com/${data.Github}/${data.Title}
  ## https://drive.google.com/file/d/1KDi9jSeM7r12caHWClxOP08dDziXMlPG/view
  # Description
  ${data.Description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTableOfContents(data)}
${renderLicenseSection(data)}
* [Contributing](#contributions)
* [Tests](#test)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application: 
${
  data.Installation
}
# Usage
  In order to use this app, ${data.Usage}
  ${ renderLicenseSection(data)}
  # Contributions
  Contributors: ${data.Contributions}
  # Tests
  The following is needed to run tests: ${data.Tests}
  # Questions
  If you have any questions about the repository contact ${
    data.Contributions
  } directly at : ${data.Email}.
  `;
};

module.exports = generateMarkdown;
