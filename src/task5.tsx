import { Alert, Button, Stack, Typography } from '@mui/material';
import { useForm, TextFieldElement } from 'react-hook-form-mui';
import { useDialogs } from '@toolpad/core';
import { useAppState } from './state';
import type { TaskFormValues } from './types';
import { Answers } from './constants';
import { useFeedbackSounds } from './use-feedback-sounds';

export const Task5 = () => {
    const dialogs = useDialogs();
    const { playSuccess, playError } = useFeedbackSounds();
    const nextStep = useAppState((state) => state.nextStep);
    const prevStep = useAppState((state) => state.prevStep);
    const { control, handleSubmit } = useForm({
        defaultValues: {
            answer: '',
        },
    });

    const answerHandler = async (data: TaskFormValues) => {
        if (data.answer.trim().toLocaleLowerCase() === Answers.TASK_5) {
            playSuccess();
            await dialogs.alert(
                `Да, ${Answers.TASK_5}, верно! Жми, чтобы узнать точку на карте с координатами АРТЕФАКТА!`,
                {
                    title: 'Ответ верный',
                    okText: 'Перейти к карте',
                },
            );
            nextStep();
        } else {
            playError();
            await dialogs.alert('Попробуй еще раз, вопрос то лёгкий', {
                title: 'Ответ неверный',
                okText: 'Ок',
            });
        }
    };

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <form
                onSubmit={handleSubmit((data) => answerHandler(data))}
                noValidate
            >
                <Stack direction="column" gap={3}>
                    <Typography variant="h3" textAlign="center">
                        Задание #5
                    </Typography>
                    <Alert
                        variant="filled"
                        severity="warning"
                        sx={{ textAlign: 'center' }}
                    >
                        Как называется самая главная часть в компе,
                        <br /> к которой всё подключается?
                    </Alert>
                    <TextFieldElement
                        name="answer"
                        placeholder={'введи название компонента'}
                        control={control}
                        required
                    />
                    <Button
                        size="large"
                        variant="contained"
                        color="success"
                        type="submit"
                    >
                        Проверить ответ
                    </Button>
                    <Button size="small" variant="text" onClick={prevStep}>
                        Назад
                    </Button>
                    <audio autoPlay src="./enter.mp3" />
                </Stack>
            </form>
        </Stack>
    );
};
