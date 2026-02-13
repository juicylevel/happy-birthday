import { Alert, Button, Stack, Typography } from '@mui/material';
import { useAppState } from './state';

export const TasksDescription = () => {
    const nextStep = useAppState((state) => state.nextStep);
    const prevStep = useAppState((state) => state.prevStep);
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
                Чтобы получить координаты точки, где лежит код доступа, нужно
                выполнить простые задания.
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
            <Button size="small" variant="text" onClick={prevStep}>
                Назад
            </Button>
            <audio autoPlay src="./94eb983f71de153.mp3" />
        </Stack>
    );
};
