// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  var c = '';
  const maxCommandLength = Math.max(...commands.map(cmd => cmd.length));
  
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


const desc = {
  help: 'What you just typed to get here',
  sumfetch: 'A short summary of who I am and what I do',
  about: 'A not so short description of who I am and what I do',
  repo: 'My Github repository (I spent time making this pretty please check it out)',
  resume: 'Me on a piece of paper (which I promise is just as cool as human me)',
  linkedin: 'My LinkedIn profile',
  weather: 'This determines what you want to be wearing out the streets today',
  music: 'Jam into my most recent favorite tunes!',
  email: 'Send me an email (send please no spam)',
  whoami: 'I don\'t know, you tell me',

}
