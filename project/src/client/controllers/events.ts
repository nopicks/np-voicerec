/*************************************************/
/****          FREE NP-VOICEREC 0.1           ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

import vehicledoors from './tasks/vehicledoors';
import phone from './tasks/phone';
import call from './tasks/call';
import message from './tasks/message';

const tasks: VoiceTask[] = [vehicledoors, call, message, phone];

export async function InitEvents(): Promise<void> {}

RegisterNuiCallbackType('voiceResult');
AddEventHandler('__cfx_nui:voiceResult', (data, cb) => {
    console.log(JSON.stringify(data));
    const str = data.message;
    emit('DoLongHudText', `I heard "${str}"`);
    cb({});

    for (const task of tasks) {
        const matchedWords = [];
        for (const word of task.words) {
            if (str.includes(word)) {
                matchedWords.push(word);
            }
            if (matchedWords.length >= task.matchesNeeded) {
                task.callback(str, matchedWords);
                return;
            }
        }
    }
});