import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { isHasProperty } from '../../utils';
import { accountMenuData } from './utils';

const StyledLink = styled(Link, {
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

export default ({ pageType }) => {
    return (
        <div className="flex flex-col p-3">
            {accountMenuData.map(x => (
                <div key={x.link}>
                    <StyledLink to={x.link} className={x.link === `/account/${pageType}` ? "active" : ""}>
                        <span className="flex gap-3 items-center flex-col lg:flex-row">{x.icon(18)}
                            <span className="hidden lg:inline-block">{x.text}</span>
                            <span className="text-xs block lg:hidden">{isHasProperty(x, 'shortText') ? x.shortText : x.text}</span>
                        </span>
                    </StyledLink>
                </div>
            ))}
        </div>
    );
}