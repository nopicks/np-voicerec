/*************************************************/
/****          FREE NP-VOICEREC 0.1           ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

import wordsToNumbers from "words-to-numbers";

export default {
    name: 'call',
    words: ['call', 'paul', 'call'],
    matchesNeeded: 1,
    callback: (words, matchedWords): void => {
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