import { Box } from "@material-ui/core";
import { FC } from "react";
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

import { Container } from '../container';
import { FooterLinks } from "./styled";

type FooterTypes = {
    children?: never
}

const Wrapper = styled.div`
    background: ${(props) => props.theme.colors.background.footer.color};
    color: ${(props) => props.theme.colors.background.footer.contrast};
`;

export const Footer: FC<FooterTypes> = () => (
    <Wrapper>
        <Container>
            <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
                <div>
                    Курсовая работа - "Расписание орковское"

                    <Box textAlign="center" mt={2} mb={2}>© Зиневич Ян 2021</Box>

                    <FooterLinks>
                        <a href="https://github.com/Yaniddze"><GitHubIcon /></a>
                        <a href="https://www.youtube.com/channel/UCSBSAK98S9VbQpEiZAVU8Bg"><YouTubeIcon /></a>
                        <a href="mailto:yanrus09@gmail.com"><MailIcon /></a>
                        <a href="https://twitter.com/Yaniddze"><TwitterIcon /></a>
                        <a href="https://t.me/Yaniddze"><TelegramIcon /></a>
                    </FooterLinks>
                </div>
            </Box>
        </Container>
    </Wrapper>
)