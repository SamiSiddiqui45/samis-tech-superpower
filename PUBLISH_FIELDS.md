# Builder Center publication fields

Title:
Sami's Tech Superpower: An Interactive Developer Portfolio on AWS

Description:
A personal developer portfolio hosted on AWS Amplify, featuring an interactive command center to explore my skills, projects and cloud journey. Built with React and TypeScript, with responsive layouts, accessible controls and subtle motion.

GitHub or GitLab Repository:
https://github.com/SamiSiddiqui45/samis-tech-superpower

Endpoint or live demo:
https://main.d2p2c6exggp4f1.amplifyapp.com

Jupyter or SageMaker notebook:
Leave blank — this project does not use a notebook.

Tags (choose the closest available options, up to five):
AWS Amplify, React, TypeScript, Web Development, Student Builders

Cover image:
screenshots/cover-1200x675.png (real live-site screenshot, 1200 x 675)

# Body — paste with Markdown enabled

## Why I built this
I'm Sami Siddiqui, a Computer Science student at the University of Karachi — UBIT, with an interest in full-stack engineering, AWS and DevOps. I built this portfolio to bring my background, technical skills, projects and community involvement into one accessible experience.

## Explore the portfolio
Live website: https://main.d2p2c6exggp4f1.amplifyapp.com
Source code: https://github.com/SamiSiddiqui45/samis-tech-superpower

The website includes About Me, Technical Superpowers, Featured Projects, Experience, Learning Journey and Contact sections. The visual identity uses charcoal surfaces, violet accents, an original orbital monogram and restrained animations. Visitors can browse normally on desktop, tablet or mobile.

## My creative feature: Developer Command Center
The command center is a working alternative way to explore my portfolio. Type help to see the commands, then try about, skills, projects, experience, aws, devops or contact. Arrow Up and Arrow Down recall command history; clear resets the output. Unknown commands return guidance, and shortcut buttons provide another way to interact.

Try superpower to reveal a message about curiosity and building. The terminal reflects my developer identity and interest in exploring how systems work. A dedicated section, visible instructions and a footer link make it easy to find without interfering with regular navigation.

## AWS services and deployment
AWS Amplify Hosting serves the public website in us-east-1. React, TypeScript and Vite generate a static production build; the main branch is deployed through a manual ZIP upload. Build-time prerendering includes portfolio content directly in HTML, while React enables filters and terminal interactions. The site uses no application backend, database or login system. GitHub holds the source; GitHub-triggered continuous deployment is not currently configured.

## Quality checks
Validation included strict TypeScript checks, ESLint, a production build, 13 command unit tests and a 30-check cross-browser suite covering Chromium, Firefox and WebKit. Checks covered terminal behavior, navigation, filters, reduced motion, accessibility, input handling and responsive layouts. An automated accessibility audit identified supporting-text contrast and link-name issues, which were fixed before release. Automated testing is not a guarantee of complete accessibility or future uptime.

## Challenges and solutions
AWS CLI credentials initially failed, so I used browser sign-in with a separate profile. A Windows ZIP path issue initially caused CSS and JavaScript 404s; repackaging with forward-slash entry paths fixed it. The final review also improved initial rendering, reduced the browser JavaScript bundle and added canonical/social metadata, robots.txt and a sitemap.

## What I learned
Before publishing, replace this paragraph with your personal reflection. Suggested topics to explain in your own words: how Amplify hosts a static build; why deployment ZIP paths matter; how command history works; how browser testing finds accessibility problems; and why prerendering helps visitors and search engines. Only include points you understand and can demonstrate.

## Screenshots
Upload actual images inside the Body using the editor's image control:
1. Portfolio desktop view — screenshots/desktop.png
2. Mobile view — screenshots/mobile.png
3. Creative feature — screenshots/command-center.png
4. AWS Amplify app overview — capture from the signed-in AWS Console.
5. Successful main deployment — capture from the signed-in AWS Console.

The cover image alone does not document AWS setup. Redact credentials and sensitive account details from console images. After image uploads, remove these instructions and add descriptive captions.

# Final review
Confirm student verification, age 18+, country/employee eligibility, one-entry and originality rules. Check links while logged out. Use Preview, then Publish, and confirm the entry is listed in Your project. Keep Amplify hosting active throughout judging. Deadline shown by the challenge: November 6, 2026, 11:59 PM PST.
