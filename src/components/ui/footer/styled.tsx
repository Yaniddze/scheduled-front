import styled from 'styled-components';

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 50px;

  @media (max-width: 420px) {
    gap: 0 25px;
  }
`;