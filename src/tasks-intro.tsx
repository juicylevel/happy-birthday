import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { useAppState } from './state';
import { PrevButton } from './prev-button';
import { EnterSound } from './enter-sound';

export const TasksIntro = () => {
    const nextStep = useAppState((state) => state.nextStep);
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
            <PrevButton />
            <EnterSound />
        </Stack>
    );
};
