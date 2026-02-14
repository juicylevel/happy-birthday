import { Alert, Button, Stack, Typography } from '@mui/material';
import { useForm, TextFieldElement } from 'react-hook-form-mui';
import { useAppState } from './state';
import type { TaskFormValues } from './types';
import { Answers } from './constants';
import { useCheckAnswer } from './use-check-answer';
import { PrevButton } from './prev-button';
import { EnterSound } from './enter-sound';

export const Task3 = () => {
    const nextStep = useAppState((state) => state.nextStep);
    const checkAnswer = useCheckAnswer(Answers.TASK_3, nextStep);
    const { control, handleSubmit } = useForm<TaskFormValues>();
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <form
                onSubmit={handleSubmit((data) => checkAnswer(data))}
                noValidate
            >
                <Stack direction="column" gap={3}>
                    <Typography variant="h3" textAlign="center">
                        Задание #3
                    </Typography>
                    <Alert
                        variant="filled"
                        severity="warning"
                        sx={{ textAlign: 'center' }}
                    >
                        Самое вкусное пирожное на свете?
                    </Alert>
                    <TextFieldElement
                        name="answer"
                        placeholder={'введи название пирожного'}
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
                    <PrevButton />
                    <EnterSound />
                </Stack>
            </form>
        </Stack>
    );
};
