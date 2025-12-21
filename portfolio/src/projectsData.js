import shoply from "./assets/shoply.png";
import auctioneer from "./assets/auctioneer.png";
import bliss from "./assets/bliss.png";

export const projects = [
  {
    id: 1,
    title: "Shoply",
    image: shoply,
    description: "E-commerce website built with React.",
    content: [
      "Shoply is an e-commerce website built with React and styled with styled-components. Navigation is handled with React Router, and styling with styled-components. React Context is used for the Cart, and React Hook Form for the contact page. React testing library is used for tests.",
      "The online shop features a home page where a customer can browse products, search for products, and click to view a products page. The product page is dynamically rendered based on the product’s ID. There, the customer can see more details and add the product to their cart. The cart displays an order summary with quantity controls, the order total, and a checkout button. The checkout success page shows a confirmation message and and a link to go back to the home page. The website also has a contact page with a contact form.",
    ],
    date: "September 2025",
    live: "https://js-frameworks-stineknutsen.netlify.app/",
    github:
      "https://github.com/stineknutsen/js-frameworks-course-assignment/tree/main/ecom-store-app",
  },

  {
    id: 2,
    title: "Auctioneer",
    image: auctioneer,
    description: "Auction website built with Tailwind and vanilla JS.",
    content: [
      "Auctioneer is a website made for a fictional client, where users can post auctions and bid on items to purchase them. It uses the Noroff API for authentication and CRUD functionality. The styling is done with Tailwind CSS, and the functionality is vanilla JavaScript.",
      "The website has a register page, and a login page for authenticating users. It has a home page with a feed of auctions where a user can search, sort or filter listings. They can also create a listing here, which they can later edit or delete. Each listings page is dynamically rendered based on the listings id, and a user can view the bid history for that listing and place their own bid. The profile page can be edited by the logged in user, and they can view their own listings, bids and purchases.",
    ],
    date: "May 2025",
    live: "https://semester-project-2-auctioneer.netlify.app/",
    github: "https://github.com/stineknutsen/semester-project-2",
  },
  {
    id: 3,
    title: "Bliss",
    image: bliss,
    description: "Social media platform styled with Tailwind.",
    content: [
      "Bliss is a social media platform made for a fictional client, to showcase styling with Tailwind CSS and placeholder content. The styling is focused on responsiveness, making use of flexbox and grids. The header has a hamburger menu for small screens.",
      "The website has a home page where a user can log in and see a feed of posts, and a form for making a post. The user can also visit the profile page, which has a profile display with a picture, and the users amount of posts, following and followers, and a follow button. There is also a grid of posts from that user.",
    ],
    date: "April 2025",
    live: "https://css-fameworks-stineknutsen.netlify.app/",
    github: "https://github.com/stineknutsen/css-frameworks-course-assignment",
  },
];
