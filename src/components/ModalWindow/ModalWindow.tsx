import React from 'react';
import styles from '../ModalWindow/ModalWindow.module.css';


interface  IProp {
  onClose: () => void
  largeimg: string
}
export class ModalWindow extends React.Component<IProp, unknown> {


  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
     document.body.classList.add('no-scroll');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
     document.body.classList.remove('no-scroll');
  }

  handleCloseModal = (event: KeyboardEvent): void => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  backDropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {

    return (
      <div className={styles.backdrop} onClick={this.backDropClick}>
        <div className={styles.modalOpen}>
          <img className={styles.modalImg} src={this.props.largeimg} alt="img"  />
        </div>
      </div>
    );
  }
}
