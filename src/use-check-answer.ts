import type { Answers } from './constants';
import type { TaskFormValues } from './types';
import { useFeedbackSounds } from './use-feedback-sounds';
import { useDialogs } from '@toolpad/core';

export const useCheckAnswer = (truthAnswer: Answers, onSuccess: () => void) => {
    const dialogs = useDialogs();
    const { playSuccess, playError } = useFeedbackSounds();

    return async (data: TaskFormValues) => {
        if (data.answer.trim().toLocaleLowerCase() === truthAnswer) {
            playSuccess();
            await dialogs.alert(
                `Да, ${truthAnswer}, верно! Жми, чтобы узнать точку на карте с координатами кода к следующему заданию.`,
                {
                    title: 'Ответ верный',
                    okText: 'Перейти к карте',
                },
            );
            onSuccess();
        } else {
            playError();
            await dialogs.alert('Попробуй еще раз, вопрос то лёгкий', {
                title: 'Ответ неверный',
                okText: 'Ок',
            });
        }
    };
};
