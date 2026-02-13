import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { useAppState } from './state';

export const Intro = () => {
    const nextStep = useAppState((state) => state.nextStep);
    return (
        <Stack
            direction="column"
            gap={3}
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <Typography variant="h2" textAlign="center">
                Тёма! С Днём Рождения!
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant="h6" textAlign="center">
                        VertuS368, тебе предстоит выполнить секретные задания,
                        чтобы добраться до артефакта. <br />
                        Следуй инструкциям..
                    </Typography>
                </CardContent>
            </Card>
            <Button size="large" variant="contained" onClick={nextStep}>
                Начать
            </Button>
            <audio autoPlay src="./enter.mp3" />
        </Stack>
    );
};
