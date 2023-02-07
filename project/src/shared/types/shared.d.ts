/*************************************************/
/****          FREE NP-VOICEREC 0.1           ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

interface VoiceTask {
    name: string;
    matchesNeeded: number;
    words: string[];
    callback: (words: string, matchedWords: string[]) => void;
}