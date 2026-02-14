import type { CheckCodeFormValues } from './types';
import type { Codes } from './constants';
import { useFeedbackSounds } from './use-feedback-sounds';
import { useDialogs } from '@toolpad/core';

export const useCheckCode = (accessCode: Codes, onSuccess: () => void) => {
    const dialogs = useDialogs();
    const { playSuccess, playError } = useFeedbackSounds();

    return async (data: CheckCodeFormValues) => {
        if (data.code.trim().toLocaleLowerCase() === accessCode) {
            playSuccess();
            await dialogs.alert('Переходи к следующему заданию!', {
                title: 'Код верный',
                okText: 'Выполнить следующее задание',
            });
            onSuccess();
        } else {
            playError();
            await dialogs.alert(
                'Проверь внимательно, возможно ошибся при вводе',
                {
                    title: 'Код неверный',
                    okText: 'Ок',
                },
            );
        }
    };
};
