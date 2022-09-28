import React from 'react';
import styles from '../Button/Button.module.css';

interface IProps {
  loadImages: (event:React.MouseEvent<HTMLButtonElement>) =>void

}

export const Button = ({ loadImages }:IProps):JSX.Element=> {
  return (
    <button type="button" className={styles.button} onClick={loadImages}>
      Load more...
    </button>
  );
}
// Button.propTypes = {
//   loadImages: PropTypes.func.isRequired,
// };
