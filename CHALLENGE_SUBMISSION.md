# Sami's Tech Superpower — Challenge Submission

Live portfolio: https://main.d2p2c6exggp4f1.amplifyapp.com
Portfolio source repository: https://github.com/SamiSiddiqui45/samis-tech-superpower
Builder: Sami Siddiqui, Software Engineer; BS Computer Science, University of Karachi — UBIT.

## Project overview
I built a personal portfolio that brings my interests in full-stack engineering, AWS and DevOps into one place. The design uses charcoal surfaces, violet accents, custom orbital monogram artwork and restrained motion. Visitors can explore my background, technical skills, selected projects and community experience on desktop or mobile.

## My creative superpower: Developer Command Center
The interactive command center offers another way to explore my portfolio. Type help, about, skills, projects, experience, aws, devops or contact. Use the arrow keys to revisit commands or clear to reset the output. Unknown commands return guidance, and superpower reveals a message about curiosity and building. The visible command-center section, hints, shortcut buttons and footer link make the feature discoverable. Conventional navigation stays available throughout.

## AWS implementation
The site is hosted publicly on AWS Amplify Hosting in us-east-1. React, TypeScript and Vite produce a static dist directory. The tested build is uploaded as a ZIP to the main production branch. Amplify deployment job 5 completed successfully after accessibility fixes. GitHub continuous deployment is not connected. No custom backend, database, authentication service or separately provisioned compute is used.

## Learning reflection — review and personalize before submitting
Suggested points based on the actual implementation: separating content from components; building keyboard command history; validating a production build rather than only a development server; honoring reduced-motion preferences; packaging static assets for Amplify; testing accessibility and cross-browser layouts. Replace this paragraph with your own explanation of what you learned and can demonstrate. Do not claim personal learning you have not reviewed or understood.

## Challenges and solutions
Initial dependency audit findings were resolved by updating build/test dependencies. AWS CLI initially used invalid credentials; browser-based login in a separate profile restored access without overwriting the default profile. The initial Windows ZIP contained incompatible asset paths, causing CSS/JS 404s; rebuilding with forward-slash paths resolved this. QA found low-contrast supporting text and a mismatched accessible link name; both were corrected. Unverified demo URLs were omitted, and the ETL project's repository remains unverified.

## Required attachments
- Desktop portfolio screenshot: screenshots/desktop.png
- Mobile portfolio screenshot: screenshots/mobile.png
- Creative feature screenshot: capture the terminal after running help and superpower.
- AWS setup screenshot: Amplify app overview showing app name, region and public domain.
- AWS deployment screenshot: successful main deployment stages for the final release.

Redact account identifiers if desired and never include access keys, tokens or billing details. Portfolio screenshots are generated from the public site by browser tests. AWS Console screenshots still need to be captured from the signed-in console; do not substitute fabricated images or local preview screenshots.

## Before clicking Submit
1. Publish this website's source as a public GitHub repository and replace the pending source URL above.
2. Confirm you are a verified student aged 18+ with a Builder Center profile and eligible under the full Rules (country and employee exclusions included).
3. Confirm this portfolio was newly created for this challenge and was not a previously published portfolio reused as an entry. This workspace was empty when implementation started.
4. Add your project under the challenge's Your project tab. A discussion post alone is not the required project submission.
5. Include the live URL, repository URL, creative-feature description, AWS service details, real screenshots, personal learning and challenges.
6. Reopen the saved/submitted project entry and test both URLs while logged out. Confirm it is submitted, not only a draft.
7. Submit before November 6, 2026, 11:59 PM PST. Prefer submitting at least a day early. Keep the live URL accessible throughout judging (weeks of November 9 and November 16) and until results are finalized.

Official challenge: https://builder.aws.com/build/hackathons/3bff5627-ef21-3bfc-acfc-fce21d39a4f6/aws-student-builder-challenge-build-your-tech-superpower
The About requirements were independently checked October 30, 2026. The Rules tab could not be retrieved through the research tool, so personal/country eligibility is not certified here.

