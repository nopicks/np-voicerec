/*************************************************/
/****          FREE NP-VOICEREC 0.1           ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

import wordsToNumbers from "words-to-numbers";

export default {
    name: 'message',
    words: ['message'],
    matchesNeeded: 1,
    callback: async (words, matchedWords): Promise<void> => {
        if (words.includes('contact') || words.includes('contract')) {
            
        }
        const parsedWord = wordsToNumbers(replaceCommonWords(words.toLowerCase(), matchedWords)).toString();
        const number = parseInt(parsedWord.replace(/ +/g, ''));
        if (number > 99) return emit('DoLongHudText', 'This number does not exist', 2);
        console.log(number);  
        exports['np-phone'].StartCall(number);
    },
} as VoiceTask;

const replaceCommonWords = (word: string, matchedWords: string[]): string => {
    for (const matched of matchedWords) {
        word.replace(matched, '');
    }

    word = word.replace('free', 'three');
    return word;
}

const findContact = async (name: string): Promise<number> => {
    const cid = exports['isPed'].isPed('cid');
    const [success, contacts] = await RPC.execute('phone:getContacts', cid);
    if (!success) return 0;
    for (const contact of contacts) {
        if (contact.name == name || contact.name.includes(name)) {
            return contact.number;
        }
    }
    return 0;
};

const textPerson = (number: number, text: string): void => {
    const phoneNumber = exports['isPed'].isPed('phone_number');
    RPC.execute("phone:sendMessage", phoneNumber, number, text);
};