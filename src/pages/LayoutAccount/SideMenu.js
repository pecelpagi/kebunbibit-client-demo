import { isHasProperty } from '../../utils';
import { StyledLink } from './side-menu.styled-components';
import { accountMenuData } from './utils';

const SideMenu = ({ pageType }) => {
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

export default SideMenu;