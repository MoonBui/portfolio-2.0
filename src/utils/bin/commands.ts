// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  var c = '';
  const maxCommandLength = Math.max(...commands.map((cmd) => cmd.length));

  for (let i = 1; i <= commands.length; i++) {
    const cmd = commands[i - 1];
    if (desc[cmd]) {
      const padding = ' '.repeat(maxCommandLength - cmd.length);
      c += cmd + padding + '   - ' + desc[cmd] + '\n';
    }
  }
  return `Welcome to ${config.name}'s little tech dump, where I experiment with fun stuff I can do on my computer! Here are some fun commands available to you:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Calling Earth, this is Moon! 
Born and raised in Vietnam
Started coding cause I loved playing games
Switched to software and web development to deliver innovative solutions
Thrives in a fast-paced startup environment with collaborative, cat-loving humans
Currently a passionate Full Stack Developer looking for the next challenge!
  `;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Experience
export const experience = async (args: string[]): Promise<string> => {
  return [
    "Where my code left their marks (command 'resume' for the PDF form):",
    '',
    'Full Stack Developer — BeyondWill',
    '01/2024 - 03/2025',
    '',
    '• ' +
      formatIndented(
        'Responsible for new development and ongoing maintenance of key frontend and backend product features, such as dynamic navigation and Data Vault',
      ),
    '• ' +
      formatIndented(
        'Organized internal code review sessions with contract developers to ensure seamless product feature integration at a consistent 80% sprint completion rate',
      ),
    '• ' +
      formatIndented(
        'Independently maintained ownership over company website, including development, testing, and integration with external services for marketing and CRM, ensuring daily deployable results with 99.9% uptime',
      ),
    '• ' +
      formatIndented(
        'Led external QA sessions and end-user workshops with marketing and design teams to identify UI/UX improvements and feature priority, driving 85% user satisfaction and maintaining high product standards',
      ),
    '• ' +
      formatIndented(
        'Optimized single-developer deployments by implementing Test Driven Development, database management, and comprehensive unit, integration tests',
      ),
    '',
    'Information and Data Solutions Intern — Eli Lilly Corporation in Indianapolis',
    '05/2023 - 08/2023',
    '',
    '• ' +
      formatIndented(
        'Coordinated with multiple stakeholder groups, vendor support teams, and business partners to determine and document pain points with current data staging-loading process',
      ),
    '• ' +
      formatIndented(
        'Spearheaded backend RestAPI development for Release I of an internal web application designed to validate clinical trial datasets, creating a foundation that cut data staging time by 90% compared to existing IT processes',
      ),
    '',
    'Front-end Developer Intern — Pieces.app',
    '06/2022 - 08/2022',
    '',
    '• ' +
      formatIndented(
        'Engineered and managed robust MVP front-end plugin features for the Pieces for Developers application, driving seamless integrations with leading software platforms like SublimeText and Slack',
      ),
    '• ' +
      formatIndented(
        'Collaborated closely with cross-functional teams — spanning integration, development, and design — consistently delivering new software features and achieving an exceptional 90% Agile sprint completion rate',
      ),
  ].join('\n');
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ██████   ██████                                 ███████████              ███ 
░░██████ ██████                                 ░░███░░░░░███            ░░░  
 ░███░█████░███   ██████   ██████  ████████      ░███    ░███ █████ ████ ████ 
 ░███░░███ ░███  ███░░███ ███░░███░░███░░███     ░██████████ ░░███ ░███ ░░███ 
 ░███ ░░░  ░███ ░███ ░███░███ ░███ ░███ ░███     ░███░░░░░███ ░███ ░███  ░███ 
 ░███      ░███ ░███ ░███░███ ░███ ░███ ░███     ░███    ░███ ░███ ░███  ░███ 
 █████     █████░░██████ ░░██████  ████ █████    ███████████  ░░████████ █████
░░░░░     ░░░░░  ░░░░░░   ░░░░░░  ░░░░ ░░░░░    ░░░░░░░░░░░    ░░░░░░░░ ░░░░░ 
                                                                                                                                           

Type 'help' to see the list of available commands.
<i>~ This page was adapted from <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.LiveTermUrl}" target="_blank">LiveTerm</a></u> project</i> ~`;
};

export const light = async (args: string[]): Promise<void> => {
  localStorage.setItem('theme', 'light');
  document.documentElement.classList.remove('dark');
};

export const dark = async (args: string[]): Promise<void> => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.classList.add('dark');
};

const desc = {
  help: 'What you just typed to get here',
  sumfetch: 'A short summary of who I am and what I do',
  about: 'A not so short description of who I am and what I do',
  repo: 'My Github repository (I spent time making this pretty please check it out)',
  resume:
    'Me on a piece of paper (which I promise is just as cool as human me)',
  linkedin: 'My LinkedIn profile',
  weather: 'This determines what you want to be wearing out the streets today',
  music: 'Jam into my most recent favorite tunes!',
  email: 'Send me an email (send please no spam)',
  whoami: "I don't know, you tell me",
  dark: 'Switch to dark mode',
  light: 'Switch to light mode',
  experience: 'See my past jobs and contributions',
};

function formatIndented(text: string, width = 100, indent = 2) {
  const space = ' '.repeat(indent);
  const words = text.split(' ');
  let line = '';
  let result = '';
  let isFirstLine = true;

  for (const word of words) {
    // For the first line, don't add indent; for wrapped lines, do
    const currentLine = isFirstLine ? line : space + line;
    if ((currentLine + word).length > width) {
      result += currentLine + '\n';
      line = word;
      isFirstLine = false;
    } else {
      line += (line.length === 0 ? '' : ' ') + word;
    }
  }
  result += isFirstLine ? line : space + line;
  return result;
}
