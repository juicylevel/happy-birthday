import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { useAppState } from './state';

export const TasksIntro = () => {
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
            <Typography variant="h3">Правила</Typography>
            <Card>
                <CardContent>
                    Чтобы узнать, где на карте расположены точки с секретными
                    кодами, нужно выполнять задания. Ты готов?
                </CardContent>
            </Card>
            <Button size="large" variant="contained" onClick={nextStep}>
                Да, готов!
            </Button>
            <Button size="small" variant="text" onClick={prevStep}>
                Назад
            </Button>
            <audio autoPlay src="./94eb983f71de153.mp3" />
        </Stack>
    );
};
