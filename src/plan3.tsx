import { Alert, Button, Stack, Typography } from '@mui/material';
import { useForm, TextFieldElement } from 'react-hook-form-mui';
import { useAppState } from './state';
import type { CheckCodeFormValues } from './types';
import { Codes } from './constants';
import { useCheckCode } from './use-check-code';
import { PrevButton } from './prev-button';
import { EnterSound } from './enter-sound';

export const Plan3 = () => {
    const nextStep = useAppState((state) => state.nextStep);
    const checkCode = useCheckCode(Codes.CODE_3, nextStep);
    const { control, handleSubmit } = useForm<CheckCodeFormValues>();
    return (
        <Stack
            direction="column"
            gap={3}
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Typography variant="h3" textAlign="center">
                Карта с секретным кодом #3
            </Typography>
            <Alert variant="filled" severity="warning">
                Тёма, найди по карте секретный код #3 и введи его для перехода к
                следующему заданию.
            </Alert>
            <img src="./plan3.jpg" width="50%" />
            <form onSubmit={handleSubmit((data) => checkCode(data))} noValidate>
                <Stack direction="column" gap={3}>
                    <TextFieldElement
                        name="code"
                        placeholder={'введи секретный код #3'}
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
                    <PrevButton />
                </Stack>
            </form>
            <EnterSound />
        </Stack>
    );
};
