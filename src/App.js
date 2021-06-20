import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import "./App.css";
import * as imagesApi from "./services/images-api";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "react-loader-spinner";
import Modal from "./Modal";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    largeImageURL: "",
    tags: "",
    showModal: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  componentWillUnmount() {
    this.setState({
      searchQuery: "",
    });
  }

  onSubmit = (value) => {
    this.setState({
      searchQuery: value,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        this.scrollDown();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onImageClick = (image, tags) => {
    this.setState({
      largeImageURL: image,
      tags: tags,
      showModal: true,
    });
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollTop + window.innerHeight,
      behavior: "smooth",
    });
  };

  onClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL, tags, error } =
      this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {error && (
          <h1 className="Error">
            Something went wrong on a server side, try again later.
          </h1>
        )}
        {!error && (
          <>
            <ImageGallery images={images} onImageClick={this.onImageClick} />

            {shouldRenderLoadMoreButton && (
              <Button onClick={this.fetchImages} />
            )}

            {isLoading && (
              <Loader
                className="Loader"
                type="Bars"
                color="#3f51b5"
                height={70}
                width={70}
              />
            )}

            {showModal && (
              <Modal
                largeImage={largeImageURL}
                tags={tags}
                onClose={this.onClose}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
