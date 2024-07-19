# React E-Commerce approach

## Motivation

This e-commerce approach is a simple way to create a e-commerce website using React. The main goal is to create a simple and easy to understand e-commerce website that can be used as a base for more complex projects.
This project will be used to explain the basics of React like routing, state management, and component creation, separation, escalibility and reuse of components and methods, use of hooks, external libraries, among others.

## External Resources

### Libraries

-   [React Router v6](https://reactrouter.com/en/6.25.1/start/overview)
-   [Axios](https://axios-http.com/docs/intro)
-   [React Bootstrap](https://react-bootstrap.github.io/docs/getting-started/introduction)

### APIs

-   [Fake Store API](https://fakestoreapi.com/)

### Tools

-   [Vite](https://vitejs.dev/) - as a build tool
-   [Vercel](https://vercel.com/) - as a deployment tool

## How to run

1. Clone the repository using `git clone https://github.com/ftureo/approach-ecommerce.git`.
2. Install the dependencies using `npm install` on the root folder.
3. Run the project in dev mode using `npm run dev`.
4. Follow the instructions on the terminal to open the project on your browser.

## Components

1. Header
2. Footer
3. ProductListContainer
    - Spanish
      Va a tener que recibir la data que se resuelva de una petición HTTP a FakeStoreAPI y pasarla por props a un componente ProductList
    - English
      It will have to receive the data that is resolved from an HTTP request to FakeStoreAPI and pass it by props to a ProductList component
4. ProductList
    - Spanish
      Va a recibir la prop que contiene los productos, los va a mapear y va a renderizar un componente ProductCard por cada producto.
    - English
      It will receive the prop that contains the products, it will map them and it will render a ProductCard component for each product.
5. ProductCard

    - Spanish
      Va a ser un componente representacional que debe mostrar una card con la información de un producto que recibe a través de props. Por otra parte, ProductCard va a implementar un redirect a través del componente Link de react-router-dom para que al hacer click en la card, el usuario sea redirigido a la ruta /category/:category/product/:id, donde :id es el id del producto y :category es la categoría del producto.
    - English
      It will be a presentational component that must show a card with the information of a product that it receives through props. On the other hand, ProductCard will implement a redirect through the Link component of react-router-dom so that when the user clicks on the card, they are redirected to the route /category/:category/product/:id, where :id is the id of the product and :category is the category of the product.

6. ProductDetailContainer
    - Spanish
      Va a tener que recibir el id del producto a través de props y va a tener que hacer una petición HTTP a FakeStoreAPI para obtener la información del producto. Luego, va a pasar la información del producto a un componente ProductDetail.
    - English
      It will have to receive the id of the product through props and will have to make an HTTP request to FakeStoreAPI to get the information of the product. Then, it will pass the product
7. ProductDetail
    - Spanish
      Va a recibir la información del producto a través de props y va a renderizar la información del producto en un componente Card de react-bootstrap o un componente customizado.
    - English
      It will receive the information of the product through props and will render the information of the product in a Card component of react-bootstrap or a custom component.

## Future Layouts

1. Home
2. Product Detail
3. Product List
4. Cart
5. Checkout
6. Contact
7. About
8. Login / Register

## Services

1. API Axios instance
2. Product Service
   a. getProducts - Get all products
   b. getProduct - Get a product by id

## Routes

1. Home - /
2. Product Detail - /category/:category/product/:id
3. Product List - /products
4. Product List by Category - /products/category/:category
5. Cart - /cart
6. Checkout - /checkout
7. Contact - /contact
8. About - /about
9. Login - /login
10. Register - /register
