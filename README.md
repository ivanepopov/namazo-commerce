# namazo-commerce

<p align="center">
  <img src="./ui/src/util/img/namazo_dark.png" width="350" alt="namazo logo">
</p>

<p align="center">
  Next.js · TypeScript · Tailwind · MongoDB · FastAPI · Jest · REST API · Docker
</p>

<br/>

Namazo is an ecommerce website built using Next.js. Initially designed to be similar to Amazon, but has since taken a different approach for improved clarity and ease of use.

## Features

* **Sale Ribbon**: A ribbon is displayed at the top of the page when a sale is active.
* **Product Search**: Users can search for specific products within a department using the top search bar.
* **Category Navigation**: A list of categories is provided, allowing users to browse through different sections
of the website.
* **Product Listings**: Each category has its own subsection displaying a list of products in well-formatted
cards. Cards include:
    - Product image
    - Price
    - Rating & Total reviews
    - Heart icon to add to cart
* **Individual Product Pages**: Clicking on a product redirects users to the product's details page, where they
can view additional information.
* **Theme Switcher**: A button that allows users to switch between light and dark modes.
* **Store Selector**: Users can change their preferred store through a press of a button.

## Current System Design

<p align="center">
  <img src="./sd_namazo.png" width="950" alt="system design">
</p>

Containerized with Docker

* **Frontend**:
    - Next.js: For building the ecommerce website
    - Tailwind CSS: For styling and design
    - TypeScript: For type checking and coding standards
* **Testing**:
    - Jest: For unit testing
* **Backend**:
    - FastAPI: Modern, fast (high-performance), web framework for building APIs
    - MongoDB: NoSQL, document-oriented database for data storage
    - Python: Implementation of backend services

## Todos
- Add more categories with products
- Add user authentication and personalization features
- Implement a shopping cart feature
- Add animations and transitions for better UX

