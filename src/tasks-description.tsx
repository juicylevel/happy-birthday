import { Alert, Button, Stack, Typography } from '@mui/material';
import { useAppState } from './state';
import { PrevButton } from './prev-button';
import { EnterSound } from './enter-sound';

export const TasksDescription = () => {
    const nextStep = useAppState((state) => state.nextStep);
    return (
        <Stack
            direction="column"
            gap={3}
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Typography variant="h3" textAlign="center">
                Коды доступа
            </Typography>
            <Alert
                variant="filled"
                severity="warning"
                sx={{ textAlign: 'center' }}
            >
                Чтобы получить координаты точки на плане, нужно выполнить
                простые задания.
                <br /> Ты готов?
            </Alert>
            <Button
                size="large"
                variant="contained"
                color="success"
                onClick={nextStep}
            >
                Да
            </Button>
            <PrevButton />
            <EnterSound />
        </Stack>
    );
};
