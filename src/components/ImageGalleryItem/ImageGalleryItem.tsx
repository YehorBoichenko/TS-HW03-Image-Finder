import React from 'react';
import styles from '../ImageGallery/ImageGallery.module.css';
// import PropTypes from 'prop-types';

interface IProps {
  tags?: string;
  src?: string;
  largeimg?: string;
  onClickImage: (largeimg?: string) => void;
}

export const ImageGalleryItem = ({
  tags,
  src,
  largeimg,
  onClickImage,
}: IProps): JSX.Element => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        onClick={() => onClickImage(largeimg)}
        src={src}
        alt={tags}
        className={styles.galleryItem}
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   tags: PropTypes.string.isRequired,
//   src: PropTypes.string.isRequired,
//   largeimg: PropTypes.string.isRequired,
//   onClickImage: PropTypes.func.isRequired,
// };
