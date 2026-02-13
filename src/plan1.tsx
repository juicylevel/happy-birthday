import { Alert, Button, Stack, Typography } from '@mui/material';
import { useForm, TextFieldElement } from 'react-hook-form-mui';
import { useDialogs } from '@toolpad/core';
import { useAppState } from './state';
import type { CheckCodeFormValues } from './types';
import { Codes } from './constants';
import { useFeedbackSounds } from './use-feedback-sounds';

export const Plan1 = () => {
    const dialogs = useDialogs();
    const { playSuccess, playError } = useFeedbackSounds();
    const nextStep = useAppState((state) => state.nextStep);
    const prevStep = useAppState((state) => state.prevStep);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            code: '',
        },
    });

    const checkCode = async (data: CheckCodeFormValues) => {
        if (data.code.trim().toLocaleLowerCase() === Codes.CODE_1) {
            playSuccess();
            await dialogs.alert('Переходи к следующему заданию!', {
                title: 'Код верный',
                okText: 'Выполнить следующее задание',
            });
            nextStep();
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
    return (
        <Stack
            direction="column"
            gap={3}
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Typography variant="h3" textAlign="center">
                Карта с секретным кодом #1
            </Typography>
            <Alert variant="filled" severity="warning">
                Тёма, найди по карте секретный код #1 и введи его для перехода к
                следующему заданию.
            </Alert>
            <img src="./plan1.jpg" width="50%" />
            <form onSubmit={handleSubmit((data) => checkCode(data))} noValidate>
                <Stack direction="column" gap={3}>
                    <TextFieldElement
                        name="code"
                        placeholder={'введи секретный код #1'}
                        control={control}
                        required
                    />
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        color="success"
                    >
                        Проверить код
                    </Button>
                    <Button size="small" variant="text" onClick={prevStep}>
                        Назад
                    </Button>
                </Stack>
            </form>
            <audio autoPlay src="./enter.mp3" />
        </Stack>
    );
};
