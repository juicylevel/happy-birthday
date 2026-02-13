import { Alert, Button, Stack, Typography } from '@mui/material';
import { useAppState } from './state';

export const Description = () => {
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
                Секретная локация
            </Typography>
            <Alert variant="filled" severity="warning">
                Тёма, это план твоей квартиры, узнаёшь?
            </Alert>
            <img src="./plan-free.jpg" width="50%" />
            <Button
                size="large"
                variant="contained"
                onClick={nextStep}
                color="success"
            >
                Да, узнаю
            </Button>
            <Button size="small" variant="text" onClick={prevStep}>
                Назад
            </Button>
            <audio autoPlay src="./enter.mp3" />
        </Stack>
    );
};
