/*************************************************/
/****          FREE NP-VOICEREC 0.1           ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

export default {
    name: 'phone',
    words: ['phone', 'call', 'twitter'],
    matchesNeeded: 1,
    callback: (): void => {
        exports['np-taskbar'].generalPhone();
    },
} as VoiceTask;