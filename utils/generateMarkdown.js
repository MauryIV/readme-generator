function renderLicenseBadge(license) {
  const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  const gnuBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  const bsd2Badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]"
  const bsd3Badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
  const boostBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
  const creativeBadge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]"
  const eclipseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]"
  const gnua3Badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]"
  const gnu2Badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]"
  const gnuLessBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]"
  const mozillaBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  const unlicenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
  if (license === 'Apache License 2.0') {
    return apacheBadge
  }
  if (license === 'GNU General Public License v3.0') {
    return gnuBadge
  }
  if (license === 'MIT License') {
    return mitBadge
  }
  if (license === 'BSD 2-Clause "Simplified" License') {
    return bsd2Badge
  }
  if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return bsd3Badge
  }
  if (license === 'Boost Software License 1.0') {
    return boostBadge
  }
  if (license === 'Creative Commons Zero v1.0 Universal') {
    return creativeBadge
  }
  if (license === 'Eclipse Public License 2.0') {
    return eclipseBadge
  }
  if (license === 'GNU Affero General Public License v3.0') {
    return gnua3Badge
  }
  if (license === 'GNU General Public License v2.0') {
    return gnu2Badge
  }
  if (license === 'GNU Lesser General Public License v3.0') {
    return gnuLessBadge
  }
  if (license === 'Mozilla Public License 2.0') {
    return mozillaBadge
  }
  if (license === 'The Unlicense') {
    return unlicenseBadge
  }
}

function renderLicenseLink(license) {
  const apacheLink = "[License](https://opensource.org/licenses/Apache-2.0)"
  const gnuLink = "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
  const mitLink = "[License: MIT](https://opensource.org/licenses/MIT)"
  const bsd2Link = "[License](https://opensource.org/licenses/BSD-2-Clause)"
  const bsd3Link = "[License](https://opensource.org/licenses/BSD-3-Clause)"
  const boostLink = "[License](https://www.boost.org/LICENSE_1_0.txt)"
  const creativeLink = "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)"
  const eclipseLink = "[License](https://opensource.org/licenses/EPL-1.0)"
  const gnua3Link = "[License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)"
  const gnu2Link = "[License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  const gnuLessLink = "[License: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)"
  const mozillaLink = "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)"
  const unlicenseLink = "[License: Unlicense](http://unlicense.org/)"
  if (license === 'Apache License 2.0') {
    return apacheLink
  }
  if (license === 'GNU General Public License v3.0') {
    return gnuLink
  }
  if (license === 'MIT License') {
    return mitLink
  }
  if (license === 'BSD 2-Clause "Simplified" License') {
    return bsd2Link
  }
  if (license === 'BSD 3-Clause "New" or "Revised" License') {
    return bsd3Link
  }
  if (license === 'Boost Software License 1.0') {
    return boostLink
  }
  if (license === 'Creative Commons Zero v1.0 Universal') {
    return creativeLink
  }
  if (license === 'Eclipse Public License 2.0') {
    return eclipseLink
  }
  if (license === 'GNU Affero General Public License v3.0') {
    return gnua3Link
  }
  if (license === 'GNU General Public License v2.0') {
    return gnu2Link
  }
  if (license === 'GNU Lesser General Public License v3.0') {
    return gnuLessLink
  }
  if (license === 'Mozilla Public License 2.0') {
    return mozillaLink
  }
  if (license === 'The Unlicense') {
    return unlicenseLink
  }
}

function generateMarkdown(data) {
  return `# ${data.title} 

## Table of Contents
- [Description](#description)
- [Badges](#badges)
- [Visuals](#visuals)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors and Acknowledgment](#acknowledgment)
- [License](#license)
- [Project Status](#status)

<a id="description"></a>
## Description
${data.description}

<a id="bedges"></a>
## Badges
${data.badges}
${renderLicenseBadge(data.license)}

<a id="Visuals"></a>
## Visuals
${data.visuals}

<a id="installation"></a>
## Installation
${data.installation}

<a id="usage"></a>
## Usage
${data.usage}

<a id="tests"></a>
## Tests
${data.tests}

<a id="questions"></a>
## Questions
If you have any questions about the contents. Please feel free to reach out!
Here is my [Github](${data.github}) as well as my email <${data.email}>.

<a id="roadmap"></a>
## Roadmap
${data.roadmap}

<a id="contributing"></a>
## Contributing
${data.contributing}

<a id="acknowledgment"></a>
## Authors and Acknowledgment
${data.authors}

<a id="license"></a>
## License
${data.license} © ${data.year} ${data.user}
Please refer to this link, ${renderLicenseLink(data.license)} for more information.

<a id="status"></a>
## Project Status
${data.status}`
}

module.exports = { 
  generateMarkdown
};
