import { styled } from '../../stitches.config';

const Wrapper = styled('div', {
    overflowX: 'auto',
    padding: '15px 0px',
    '& .inner-wrapper': {
        minWidth: '1200px',
        '@md': {
            minWidth: '980px',
        },
        '& img': {
            width: 150
        }
    }
})

const Top = () => (
    <Wrapper>
        <div className="inner-wrapper">
            <div className="flex text-center gap-4">
                <div className="flex-1 text-sm gap-4 flex flex-col items-center">
                    <img className="inline-block" alt="footer icon 1" src="/images/footer-icons/1.png" />
                    <h5 className="font-semibold">Free &amp; Next Day Delivery</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="flex-1 text-sm gap-4 flex flex-col items-center">
                    <img className="inline-block" alt="footer icon 2" src="/images/footer-icons/2.png" />
                    <h5 className="font-semibold">100% Satisfaction Guarantee</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="flex-1 text-sm gap-4 flex flex-col items-center">
                    <img className="inline-block" alt="footer icon 3" src="/images/footer-icons/3.png" />
                    <h5 className="font-semibold">Great Daily Deals Discount</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
                <div className="flex-1 text-sm gap-4 flex flex-col items-center">
                    <img className="inline-block" alt="footer icon 4" src="/images/footer-icons/4.png" />
                    <h5 className="font-semibold">100% Satisfaction Guarantee</h5>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </div>
            </div>
        </div>
    </Wrapper>
);

export default Top;