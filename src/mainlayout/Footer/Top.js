import { styled } from '../../stitches.config';
import Icon1 from './images/icon1.png';
import Icon2 from './images/icon2.png';
import Icon3 from './images/icon3.png';
import Icon4 from './images/icon4.png';

const Wrapper = styled('div', {
    overflowX: 'auto',
    padding: '15px 0px',
    '& .inner-wrapper': {
        minWidth: '1200px',
        '@md': {
            minWidth: '980px',
        }
    }
})

export default () => (
    <Wrapper>
        <div className="inner-wrapper">
            <div className="flex text-center gap-4">
                <div className="flex-1 text-sm gap-2 flex flex-col items-center">
                    <img className="inline-block" src={Icon1} />
                    <h5 className="font-semibold">Free &amp; Next Day Delivery</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="flex-1 text-sm gap-2 flex flex-col items-center">
                    <img className="inline-block" src={Icon2} />
                    <h5 className="font-semibold">100% Satisfaction Guarantee</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="flex-1 text-sm gap-2 flex flex-col items-center">
                    <img className="inline-block" src={Icon3} />
                    <h5 className="font-semibold">Great Daily Deals Discount</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="flex-1 text-sm gap-2 flex flex-col items-center">
                    <img className="inline-block" src={Icon4} />
                    <h5 className="font-semibold">100% Satisfaction Guarantee</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
            </div>
        </div>
    </Wrapper>
)