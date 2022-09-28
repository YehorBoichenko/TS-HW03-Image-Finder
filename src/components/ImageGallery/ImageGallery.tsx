import React from 'react';
import styles from '../ImageGallery/ImageGallery.module.css';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';
import { IData } from '../../../interfaces';

export const ImageGallery = ({ images, onClickImage }: {images:Partial<IData>[],onClickImage:(largeimg?: string) => void }): JSX.Element =>{
  return (
    <ul className={styles.imageGallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            tags={tags}
            src={webformatURL}
            largeimg={largeImageURL}
            onClickImage={onClickImage}
          />
        );
      })}
    </ul>
  );
}

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onClickImage: PropTypes.func.isRequired,
// };
