import { Button, type ButtonProps } from '@mui/material';
import { useAppState } from './state';

export const PrevButton: React.FC<ButtonProps> = (props) => {
    const prevStep = useAppState((state) => state.prevStep);
    return (
        <Button size="small" variant="text" onClick={prevStep} {...props}>
            Назад
        </Button>
    );
};
