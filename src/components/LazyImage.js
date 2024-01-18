import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { styled, keyframes } from '../stitches.config';

const ImageWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '100%',
});

const loadingAnimation = keyframes({
  '0%': { backgroundColor: '#fff' },
  '50%': { backgroundColor: '#ccc' },
  '100%': { backgroundColor: '#fff' }
});

const Placeholder = styled('div', {
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
  animation: `${loadingAnimation} 1s infinite`,
  borderRadius: '8px',
});

const StyledImage = styled('img', {
  position: 'relative',
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
});

const LazyImage = ({
  src, alt, className, wrapperClassName, lazyLoadProps
}) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <ImageWrapper {...wrapperClassName ? { className: wrapperClassName } : {}}>
      <Placeholder className="kebunbibit-lazy-image-placeholder" ref={refPlaceholder} />
      <LazyLoad once {...lazyLoadProps}>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
          {...className ? { className } : {}}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  lazyLoadProps: PropTypes.shape({}),
};

LazyImage.defaultProps = {
  className: undefined,
  wrapperClassName: undefined,
  lazyLoadProps: {},
};

export default LazyImage;
