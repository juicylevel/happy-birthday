import { Alert, Stack, Typography } from '@mui/material';
import { PrevButton } from './prev-button';

export const Plan5 = () => {
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
            <PrevButton />
            <audio autoPlay loop src="./win.mp3" />
        </Stack>
    );
};
