import { Alert, Button, Stack, Typography } from '@mui/material';
import { useAppState } from './state';
import { PrevButton } from './prev-button';
import { EnterSound } from './enter-sound';

export const Description = () => {
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
            <PrevButton />
            <EnterSound />
        </Stack>
    );
};
