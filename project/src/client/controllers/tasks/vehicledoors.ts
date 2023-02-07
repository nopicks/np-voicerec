/*************************************************/
/****          FREE NP-VOICEREC 0.1           ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

export default {
    name: 'vehicledoors',
    words: ['car', 'vehicle', 'lock', 'close', 'unlock'],
    matchesNeeded: 2,
    callback: (words): void => {
        if (words.includes("vehicle") && words.includes("lock") || words.includes("vehicle") && words.includes("close")) {
            exports['np-vehicles'].LockDown();
        }
        else if (words.includes("vehicle") && words.includes("unlock") || words.includes("vehicle") && words.includes("unrock")) {
            // unlock vehicle --seter
        }
    },
} as VoiceTask;