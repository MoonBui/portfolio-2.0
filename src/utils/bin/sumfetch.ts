import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {                                                
    return `
      *                                                            *       sumfetch
                             ░░░░░░░░░░░░░               *                -----------
                          ░░░░░░░░░░░░░░░░░░░░                             ABOUT ME ✨
                       ░░░░░░░░░░░░░░░░░░░░░░░░                            ${config.name} - Solution Driven Engineer - Enthusiastic Communicator
                     ░░░░░░░░░░░░         ░░░░░░                           <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
                   ░░░░░░░░░░░░               ░░░░                         <u><a href="https://github.com/${config.social.github}" target="_blank">Github Repo</a></u>
                  ░░░░░░░░░░░                    ░░                       -----------
 *               ░░░░░░░░░░░                       ░                       CONTACT 
                ░░░░░░░░░░░                                                <u><a href="mailto:${config.email}" target="_blank">Email</a></u>
           *    ░░░░░░░░░░░                                 *              <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">Linkedin</a></u>
                ░░░░░░░░░░                                                -----------
                ░░░░░░░░░░                                                 ADDITIONAL ABOUT ME COMMANDS 
                ░░░░░░░░░░░                                                <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
                ░░░░░░░░░░░                         ░                      <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>
                 ░░░░░░░░░░░░                     ░░
                  ░░░░░░░░░░░░░                ░░░░
                    ░░░░░░░░░░░░░          ░░░░░░        *
       *               ░░░░░░░░░░░░░░░░░░░░░░░░░
                          ░░░░░░░░░░░░░░░░░░░
                       *      ░░░░░░░░░░░                                           
`;
};

export default sumfetch;
