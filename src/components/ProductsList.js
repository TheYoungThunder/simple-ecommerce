import Product from "./Product";

// will make jsx objects for the content to be shown on the CURRENT PAGE ONLY

export default function ProductsList(props) {
  const products = props.currentItems; //Peeling off the products array
  const productsElements = products.map((product) => {
    return (
      <Product
        key={product.id}
        product={product}
        isInCart={props.isInCart}
        handleClick={props.handleClick}
      ></Product>
    );
  });
  return <div className="item-list">{productsElements}</div>;
}
