import { Alert, Button, Stack, Typography } from '@mui/material';
import { useAppState } from './state';

export const PlanDescription = () => {
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
            <Typography variant="h3">Секретная локация</Typography>
            <Alert variant="filled" severity="warning">
                На этом плане будут указаны точки, где нужно будет найти
                секретный код
            </Alert>
            <img src="./plan-free.jpg" width="50%" />
            <Button
                size="large"
                variant="contained"
                color="success"
                onClick={nextStep}
            >
                Понял
            </Button>
            <Button size="small" variant="text" onClick={prevStep}>
                Назад
            </Button>
            <audio autoPlay src="./enter.mp3" />
        </Stack>
    );
};
