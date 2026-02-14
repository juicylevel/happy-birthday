import { Alert, Button, Stack, Typography } from '@mui/material';
import { useAppState } from './state';
import { PrevButton } from './prev-button';
import { EnterSound } from './enter-sound';

export const PlanDescription = () => {
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
                Секретная локация
            </Typography>
            <Alert
                variant="filled"
                severity="warning"
                sx={{ textAlign: 'center' }}
            >
                На этом плане будут указаны точки, где будет нужно найти
                <br />
                секретный код для доступа к следующему заданию.
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
            <PrevButton />
            <EnterSound />
        </Stack>
    );
};
