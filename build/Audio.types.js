// @needsAudit
export var InterruptionModeIOS;
(function (InterruptionModeIOS) {
    /**
     * **This is the default option.** If this option is set, your experience's audio is mixed with audio playing in background apps.
     */
    InterruptionModeIOS[InterruptionModeIOS["MixWithOthers"] = 0] = "MixWithOthers";
    /**
     * If this option is set, your experience's audio interrupts audio from other apps.
     */
    InterruptionModeIOS[InterruptionModeIOS["DoNotMix"] = 1] = "DoNotMix";
    /**
     * If this option is set, your experience's audio lowers the volume ("ducks") of audio from other apps while your audio plays.
     */
    InterruptionModeIOS[InterruptionModeIOS["DuckOthers"] = 2] = "DuckOthers";
})(InterruptionModeIOS || (InterruptionModeIOS = {}));
export var InterruptionModeAndroid;
(function (InterruptionModeAndroid) {
    /**
     * If this option is set, your experience's audio interrupts audio from other apps.
     */
    InterruptionModeAndroid[InterruptionModeAndroid["DoNotMix"] = 1] = "DoNotMix";
    /**
     * **This is the default option.** If this option is set, your experience's audio lowers the volume ("ducks") of audio from other apps while your audio plays.
     */
    InterruptionModeAndroid[InterruptionModeAndroid["DuckOthers"] = 2] = "DuckOthers";
})(InterruptionModeAndroid || (InterruptionModeAndroid = {}));
// Enum for Android audio sources
export var AudioSourceAndroid;
(function (AudioSourceAndroid) {
    AudioSourceAndroid[AudioSourceAndroid["DEFAULT"] = 0] = "DEFAULT";
    AudioSourceAndroid[AudioSourceAndroid["MIC"] = 1] = "MIC";
    AudioSourceAndroid[AudioSourceAndroid["VOICE_UPLINK"] = 2] = "VOICE_UPLINK";
    AudioSourceAndroid[AudioSourceAndroid["VOICE_DOWNLINK"] = 3] = "VOICE_DOWNLINK";
    AudioSourceAndroid[AudioSourceAndroid["VOICE_CALL"] = 4] = "VOICE_CALL";
    AudioSourceAndroid[AudioSourceAndroid["CAMCORDER"] = 5] = "CAMCORDER";
    AudioSourceAndroid[AudioSourceAndroid["VOICE_RECOGNITION"] = 6] = "VOICE_RECOGNITION";
    AudioSourceAndroid[AudioSourceAndroid["VOICE_COMMUNICATION"] = 7] = "VOICE_COMMUNICATION";
    AudioSourceAndroid[AudioSourceAndroid["REMOTE_SUBMIX"] = 8] = "REMOTE_SUBMIX";
    AudioSourceAndroid[AudioSourceAndroid["UNPROCESSED"] = 9] = "UNPROCESSED";
    AudioSourceAndroid[AudioSourceAndroid["VOICE_PERFORMANCE"] = 10] = "VOICE_PERFORMANCE";
})(AudioSourceAndroid || (AudioSourceAndroid = {}));
export { getRecordingOptions, getAudioSource, } from './Audio/RecordingConstants';
//# sourceMappingURL=Audio.types.js.map