# Portfolio
Rebuilt personal portfolio using React &amp; Tailwind CSS

This uses a json file Data.json, containing the skills and projects that I wish to display, and dynamically builds the site based on the contents of json file.

## Link to Site
https://anthony-morelli-portfolio-5000.netlify.app/

### Skill Icons
Most of the listed skills are listed as part of the free version of the Font Awesome libraries. However, some of the listed skills don't have an icon (Tailwind, MySQL, SQL Server, etc). These have been sourced from their Wikipedia articles and added to the public/assets directory. The images are then displayed by the css classes listed in the Data.json and defined by index.css.

### Projects
For each project, display each field defined by the Data.json file. Links to Git repos and live application links are shown when defined by non-empty strings.