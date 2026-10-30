> CURRENT DEPLOYMENT STATUS — October 30, 2026: LIVE on AWS Amplify Hosting.
> URL: https://main.d2p2c6exggp4f1.amplifyapp.com
> App: d2p2c6exggp4f1; branch: main; region: us-east-1; CLI profile: sami-portfolio.
> Browser sign-in succeeded and hosting cost approval was received. Deployment uses the locally tested production ZIP (manual deployment), not GitHub continuous deployment. GitHub repository publishing/connection and AWS Console evidence screenshots remain pending. Earlier authentication blockers and pending-deployment notes below are historical and superseded by this notice.
# AWS Amplify deployment handoff

## Current state

AWS CLI is installed. Profile listing returned no named profiles. `aws sts get-caller-identity` returned `InvalidClientTokenId`. Account and region therefore cannot be verified; existing Amplify resources cannot be safely inspected. No resources were created, changed or deleted. No credentials were printed. GitHub CLI is unavailable. Public GitHub reads succeeded; write authentication has not been established.

The launch-with-aws skill was inspected but its AWS Blocks/S3/CloudFront migration flow is not used because the user's explicit requirement is Amplify Hosting.

## Costs and authorization

Amplify charges depend on build minutes, storage and data served, with account-specific free-tier or credit eligibility. Do not assume free hosting. Review [current AWS Amplify pricing](https://aws.amazon.com/amplify/pricing/) and obtain Sami's explicit approval before creating the app. This application requires only static Amplify Hosting; do not add a backend, database, compute runtime, WAF or custom domain. Choose a region explicitly and review the existing app list before creating anything. No paid-resource approval has been given.

## 1. Publish the prepared repository

Create an empty GitHub repository named `samis-tech-superpower` in Sami's account using GitHub's UI. From this workspace, after reviewing files:

```powershell
git init -b main
git add .
git commit -m "Build Sami's Tech Superpower portfolio"
git remote add origin https://github.com/SamiSiddiqui45/samis-tech-superpower.git
git push -u origin main
```

Authenticate through Git Credential Manager or SSH as appropriate. Never put access tokens in repository files or remote URLs. If a repository/remote already exists, inspect and reuse it instead of overwriting it.

## 2. Restore AWS access and inspect resources

Sign into the AWS Console using the intended account. Alternatively configure an authorized CLI session with your organization's supported sign-in flow. Never paste credentials into chat. In the CLI, verify privately:

```powershell
aws sts get-caller-identity --no-cli-pager
aws configure get region
aws amplify list-apps --region YOUR_SELECTED_REGION --no-cli-pager
```

Replace the region placeholder. Confirm the account and selected region are the intended ones. If an existing app is present, inspect it and do not replace its deployment without approval.

## 3. Connect Amplify Hosting

After cost approval, open AWS Amplify in the selected region, choose a new hosted app and GitHub as the source. Authorize only the required repository. Select `samis-tech-superpower`, branch `main`, and retain the root `amplify.yml` build specification. Use a build image with Node 24 (`.nvmrc` and build configuration specify it). If Node 24 is not preinstalled in the selected image, install it in the build environment before `nvm use 24`.

Review: clean install `npm ci`, lint `npm run lint`, tests `npm test`, build `npm run build`, output directory `dist`. There are no environment variables or secrets to configure. Deploy only after the cost review. See [AWS build settings](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) and [AWS Vite deployment guide](https://docs.amplify.aws/gen1/javascript/deploy-and-host/frameworks/deploy-vite-site/).

## 4. Verify and capture evidence

Inspect provision/build/deploy logs and confirm all stages succeed. Open the generated HTTPS Amplify URL in a private browser window. Check page load, CSS/JS requests, every section link, project filters, mobile menu, social/source links and terminal commands (including history, clear, unknown input and `superpower`). Check mobile and tablet layouts and browser console. No client-side routes are used, so navigation uses fragment URLs without SPA rewrites.

Capture the live desktop/mobile site, Amplify app overview with URL and region, successful build/deployment stages and the build specification. Redact account IDs or other sensitive console details before sharing. Add the live URL and actual repository URL to CHALLENGE_SUBMISSION.md. Change the terminal `aws` output only after verified deployment. Record deployment date and results in QA_REPORT.md.

## Rollback

For a failed deployment, inspect logs and fix the source/build settings. For regression after a successful release, use Amplify's redeploy controls on a known successful previous deployment. Never delete existing apps as a recovery shortcut.

