import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

export const StyledLink = styled(Link, {
    padding: '16px 20px',
    '@md': { padding: '12px' },
    '@lg': { padding: '16px 20px' },
    fontSize: '14px',
    display: 'block',
    borderRadius: '0.25rem',
    '&.active': {
        background: '#ebffef',
        color: '#03ac0e',
    }
});