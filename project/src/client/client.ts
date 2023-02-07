/*************************************************/
/****          FREE NP-VOICEREC 0.1           ****/
/*** Author: Seter#0909 | Project: NoPicks 3.5 ***/
/****      https://discord.gg/QZ4XAPUVps      ****/
/*************************************************/

import * as Controllers from './controllers';

async function Init(): Promise<void> {
    await Controllers.Init();
}

Init();