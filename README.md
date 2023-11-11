# Wine Shop Application
## Description
The project is a comprehensive wine shop application built using React. It provides a user-friendly interface for customers to browse, select, and purchase wines. Here’s a detailed description of the components and their functionalities:

1. **App**: This is the main component that uses React Router to navigate between different pages such as Home, Cart, Recommendation, and Category.

2. **NavigationBar**: This component provides a responsive navigation bar with links to the Home, Category, Recommendation, and Cart pages.

3. **Home**: Although the specific content of this component wasn’t provided, it’s likely to be the landing page of the application.

4. **WineCart**: This component allows users to add wines to their cart, remove items from the cart, and update the quantity of items in the cart. It also provides a checkout function.

5. **BodyRecommend**: This component fetches a list of wines from a local server and displays the first one as a recommendation. It also includes a function to fetch a new random wine.

6. **CategoryList**: This component fetches the list of wines from a local server and displays them using the WineCategory component.

7. **WineCategory**: This component represents a single wine category. It displays information about the wine and provides buttons for viewing more information, liking the wine, and adding the wine to the cart.

8. **Comment**: This component allows users to leave comments. Users can type their comments in the input field and click the “Buzz Here!” button to post their comments. The most recent three comments are displayed in the comment section.

9. **WineRecommendation**: This component displays a recommended wine. It shows the wine’s image, name, type, and prices for 750ml and 1 litre. There are three buttons: “Order”, “Delete”, and “Random Wine”.

10. **BodyContent**: This component displays a welcome message to the users, describing the experience of fine wining. It’s a great way to engage users and set the tone for your application.

Overall, the application provides a complete shopping experience for wine lovers, from browsing different categories of wines, getting recommendations, adding wines to the cart, to leaving comments and feedback. It’s a great example of a modern, user-friendly e-commerce application.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Team Members](#team-members)
4. [Acknowledgments](#acknowledgments)

## Installation
1. **Clone the Repository**: First, you’ll need to clone the repository to your local machine. You can do this using Git with the command `git clone <repository-url>`.

2. **Install Node.js, npm and json-server**: This project is built using React, which requires Node.js and npm (Node Package Manager). If you don’t have these installed, you can download and install them from the official Node.js website.

3. **Install Dependencies**: Navigate to the project directory in your terminal and run `npm install`. This will install all the dependencies listed in the `package.json` file.

4. **Start the Development Server**: Run ```npm run dev``` to start the development server. If the setup is correct, this will start the application and it will be accessible at `http://http://localhost:5173` (or another port if you’ve specified a different one).

5. **Set Up the Backend**: The project appears to fetch data from a local server (`http://localhost:3000/wines`). Run `json-server --watch data.json` to start the backend server.

## Usage

1. **Navigate the Application**: Use the navigation bar at the top of the page to navigate between different pages. You can go to the Home, Category, Recommendation, and Cart pages.

2. **Browse Wines**: On the Category page, you can browse different categories of wines. Each wine has a description and buttons for viewing more information, liking the wine, and adding the wine to the cart.

3. **Add Wines to Cart**: Click the "Add to Cart" button to add a wine to your cart. You can specify the quantity and size (750ml or 1 litre) before adding the wine.

4. **View Cart**: Go to the Cart page to view the wines in your cart. You can update the quantity of each item or remove items from the cart.

5. **Checkout**: On the Cart page, click the "Checkout" button to proceed with your purchase. You'll see a confirmation message and then be redirected to the Home page.

6. **Get Recommendations**: On the Recommendation page, you can see a recommended wine. You can order the wine, delete it from the recommendations, or get a new random recommendation.

7. **Leave Comments**: On the Recommendation page, you can also leave comments. Type your comment in the input field and click the "Buzz Here!" button to post it.

Here's an example of how you might use the application:

- Start on the Home page and read the welcome message.
- Navigate to the Category page and browse the available wines.
- Find a wine you like and add it to your cart.
- Go to the Cart page to view your items. Decide you want two bottles of the wine, so update the quantity.
- Click the "Checkout" button to make your purchase.
- Navigate to the Recommendation page to see the wine of the day. Decide to order it and leave a comment about your experience.

## Team Members

1. Maryanne Wambui
2. Leon Gitonga
3. Brian Mulindi
4. Emmanuel Langat
5. Matthew Bomett

## Acknowledgments

We would like to express our deepest appreciation to the following people who have made this project a success:

1. **Maryanne Wambui**: For her leadership and guidance throughout the project.
2. **Leon Gitonga**: For his dedication and hard work in ensuring the project's success.
3. **Brian Mulindi**: For his exceptional problem-solving skills and contributions to the project.
4. **Emmanuel Langat**: For his invaluable insights and technical expertise.
5. **Matthew Bomett**: For his perspective and thoughtful ideas.

Their collective efforts, expertise, and dedication were instrumental in the successful completion of this project. We are grateful for their contributions and proud to have worked with such an outstanding team. Thank you! 🙏

