import { github, linkedin, projects, skills } from './data';
export const commandNames = ['help','about','skills','projects','experience','aws','devops','contact','clear'];
export function executeCommand(input:string):string {
 const command=input.trim().toLowerCase();
 switch(command){
 case 'help': return `Available commands:\n${commandNames.join(' · ')}\nUse ↑ / ↓ for history. A curious builder might try “superpower”.`;
 case 'about':return 'Sami Siddiqui · Software Engineer\nBS Computer Science · University of Karachi — UBIT\nKarachi, Pakistan. Exploring full-stack engineering, cloud and DevOps.';
 case 'skills':return skills.map(s=>`${s.name}: ${s.items.join(', ')}`).join('\n');
 case 'projects':return projects.map(p=>`${p.name} — ${p.description}\n${p.repo || 'Repository link pending verification.'}`).join('\n\n')+`\n\nExplore repositories: ${github}?tab=repositories\nLive demos have not been verified.`;
 case 'experience':return 'Social Media Lead · AWS Student Builder Group, University of Karachi\nFreelance Full-Stack Development\nAWS community participation';
 case 'aws':return 'Learning focus: AWS and cloud computing.\nHosted on AWS Amplify Hosting in us-east-1.\nLive portfolio: https://main.d2p2c6exggp4f1.amplifyapp.com';
 case 'devops':return 'Learning focus: Docker, Git, GitHub and CI/CD.\nBuild workflow: install → typecheck → lint → test → build → deploy.';
 case 'contact':return `Connect with Sami:\nGitHub: ${github}\nLinkedIn: ${linkedin}\nAn email address has not been provided.`;
 case 'superpower':return '✦ Superpower unlocked: curiosity.\nFrom a university community to the cloud, every big build starts with one small commit. Keep building. — Sami’s Tech Superpower';
 case 'clear':return '';
 default:return `Command not found: ${input.trim()}. Type “help” to see available commands.`;
 }
}
