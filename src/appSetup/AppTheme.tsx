// Core
import {
    FC,
    ReactElement,
    useState,
} from 'react';
import Cookies from 'js-cookie';
import styled, {
    DefaultTheme,
    ThemeProvider,
    useTheme,
} from 'styled-components';

import {
    createMuiTheme,
    ThemeProvider as MThemeProvider,
} from '@material-ui/core/styles';

// Themes
import {
    greenTheme,
    darkTheme,
} from '../themes';

import {
    ToogleSwitch,
} from '../components';

const InputWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
`;

type PropTypes = {
    children: ReactElement;
}

const cookieName = 'Schedule.Theme';

const cookedTheme = Cookies.get(cookieName);

const isGreenCooked = cookedTheme === 'green';

export const AppTheme: FC<PropTypes> = ({ children }: PropTypes) => {
    const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(
        isGreenCooked ? greenTheme : darkTheme,
    );

    const handleChange = (): void => {
        setCurrentTheme((current) => {
        if (current === greenTheme) {
            Cookies.set(cookieName, 'dark');
            return darkTheme;
        }
        Cookies.set(cookieName, 'green');
        return greenTheme;
        });
    };

return (
        <>
            <ThemeProvider theme={currentTheme}>
                <MUiTheme>
                    <InputWrapper>
                        <ToogleSwitch
                            initValue={!isGreenCooked}
                            handleChange={handleChange}
                        />
                    </InputWrapper>

                    {children}
                </MUiTheme>
            </ThemeProvider>
        </>
    );
};

type MUiThemeProps = {
    children: JSX.Element[],
}

const MUiTheme: FC<MUiThemeProps> = ({
    children,
}: MUiThemeProps) => {
    const currentTheme = useTheme();
    const adaptedTheme = createMuiTheme({
        palette: {
            primary: {
                main: currentTheme.colors.main.color,
                contrastText: currentTheme.colors.main.contrast
            },
            secondary: {
                main: currentTheme.colors.secondary.color,
                contrastText: currentTheme.colors.secondary.contrast
            }
        }
    });

    return (
        <MThemeProvider theme={adaptedTheme}>
            {children}
        </MThemeProvider>
    )
}