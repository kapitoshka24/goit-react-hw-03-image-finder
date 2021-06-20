import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  
  componentDidMount() {
    window.addEventListener("keydown", this.onEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscClose);
  }

  backdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  onEscClose = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, tags } = this.props;
    return (
      <div className="Overlay" onClick={this.backdropClick}>
        <div className="Modal">
          <img className="Modal-photo" src={largeImage} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
