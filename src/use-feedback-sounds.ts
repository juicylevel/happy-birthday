import { useCallback, useMemo } from 'react';

const successUrl = './success.mp3';
const errorUrl = './fail.mp3';

export const useFeedbackSounds = () => {
    const successAudio = useMemo(() => {
        const audio = new Audio(successUrl);
        audio.preload = 'auto';
        return audio;
    }, [successUrl]);

    const errorAudio = useMemo(() => {
        const audio = new Audio(errorUrl);
        audio.preload = 'auto';
        return audio;
    }, [errorUrl]);

    const playSound = useCallback((audio: HTMLAudioElement) => {
        audio.currentTime = 0;

        audio.play().catch((e) => {
            if (e.name !== 'NotAllowedError') {
                console.warn('Error playing sound:', e);
            }
        });
    }, []);

    const playSuccess = useCallback(() => {
        playSound(successAudio);
    }, [playSound, successAudio]);

    const playError = useCallback(() => {
        playSound(errorAudio);
    }, [playSound, errorAudio]);

    return {
        playSuccess,
        playError,
    };
};
