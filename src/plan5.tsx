import { Alert, Button, Stack, Typography } from '@mui/material';
import { useAppState } from './state';

export const Plan5 = () => {
    const prevStep = useAppState((state) => state.prevStep);

    return (
        <Stack
            direction="column"
            gap={3}
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Typography variant="h3" textAlign="center" color="secondary">
                Вот и карта с главным АРТЕФАКТОМ!
            </Typography>
            <Alert
                variant="filled"
                severity="info"
                sx={{ textAlign: 'center' }}
            >
                Иди скорее, найди его! Надеюсь тебе понравится наш подарок!
                <br />С Днём Рождения, Тёма!
            </Alert>
            <img src="./plan5.jpg" width="50%" />
            <Button size="small" variant="text" onClick={prevStep}>
                Назад
            </Button>
            <audio autoPlay loop src="./win.mp3" />
        </Stack>
    );
};
