import { styled } from "../../stitches.config"

const Wrapper = styled('div', {
    borderTop: '1px dashed #bdbdbd',
    marginTop: '20px',
    padding: '20px 0px',
    paddingBottom: '70px',
    alignItems: 'center',
    gap: '6px',
    '@md': {
        paddingBottom: '20px',
        alignItems: 'unset',
    },
});

export default () => {
    return (
        <Wrapper className="text-sm flex flex-col md:flex-row">
            <div className="flex flex-1 gap-3">
                <a href="#" className="hover:underline">Tentang Kami</a>
                <a href="#" className="hover:underline">Syarat &amp; Ketentuan</a>
                <a href="#" className="hover:underline">Kebijakan Kami</a>
            </div>
            <div className="flex-1 text-right">
                &copy; 1996 - 2022, Galuh Muhamad Ramadhan.
            </div>
        </Wrapper>
    )
}