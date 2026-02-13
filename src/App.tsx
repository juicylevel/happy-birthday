import { CssBaseline, ThemeProvider } from '@mui/material';
import { DialogsProvider, NotificationsProvider } from '@toolpad/core';
import theme from './theme';
import { useAppState } from './state';
import { Intro } from './intro';
import { Description } from './description';
import { PlanDescription } from './plan-description';
import { TasksDescription } from './tasks-description';
import { notificationsConfig } from './notifications.config';
import { Task1 } from './task1';
import { Plan1 } from './plan1';
import { Task2 } from './task2';
import { Plan2 } from './plan2';
import { Task3 } from './task3';
import { Plan3 } from './plan3';
import { Task4 } from './task4';
import { Plan4 } from './plan4';
import { Task5 } from './task5';
import { Plan5 } from './plan5';

const steps = [
    Intro,
    Description,
    PlanDescription,
    TasksDescription,
    Task1,
    Plan1,
    Task2,
    Plan2,
    Task3,
    Plan3,
    Task4,
    Plan4,
    Task5,
    Plan5,
];

const App = () => {
    const step = useAppState((state) => state.step);
    const Step = steps[step];
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <DialogsProvider>
                <NotificationsProvider {...notificationsConfig}>
                    <Step />
                </NotificationsProvider>
            </DialogsProvider>
        </ThemeProvider>
    );
};

export default App;
