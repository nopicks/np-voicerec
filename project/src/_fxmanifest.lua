-- *************************************************
-- ****          FREE NP-VOICEREC 0.1           ****
-- *** Author: Seter#0909 | Project: NoPicks 3.5 ***
-- ****      https://discord.gg/QZ4XAPUVps      ****
-- *************************************************

fx_version "cerulean"
games { "gta5" }

description "NoPicks VoiceRec"

version "0.0.1"

server_script "@np-lib/server/sv_rpc.js"
client_script "@np-lib/client/cl_rpc.js"

server_scripts {
    "server/*.js",
}

client_scripts {
    "client/*.js",
}

shared_scripts {
    "shared/*.js",
}