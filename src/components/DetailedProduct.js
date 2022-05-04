import { Modal, Button, Carousel, Card } from "react-bootstrap";
import React from "react";

export default function DetailedProduct(props) {
  const productList = props.productList;
  let product = productList.find((product) => {
    return product.id === props.focusedProductKey;
  });
  console.log("detailed product rendered ");
  return (
    <>
      {/* <!-- Modal --> */}
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.photos[0]}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.photos[1]}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.photos[2]}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <p className="product-info">
                  (${product.price}) (⭐{product.rate}) ({product.reviewsCount}{" "}
                  reviews){" "}
                </p>
              </Card.Body>
            </Card>
            {/* <img
              src={product.featuredPhoto}
              alt="featured"
              className="featured-image"
            />
            <p className="product-info">
              (${product.price}) (⭐{product.rate}) ({product.reviewsCount}{" "}
              reviews){" "}
            </p>
            <p className="product-description">{product.description}</p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <div
          className="modal fade"
          id="detailsModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {product.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={product.featuredPhoto}
                  alt="featured"
                  className="featured-image"
                />
                <p className="product-info">
                  (${product.price}) (⭐{product.rate}) ({product.reviewsCount}{" "}
                  reviews){" "}
                </p>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          </div>
        </div> */}
      </>
    </>
  );
}
