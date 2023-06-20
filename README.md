# User Card Grid

This is a simple web application that fetches user data from an API and displays it in a grid format. Each user is represented by a card containing their name, profile picture, and email address.

## Technologies Used

- HTML
- CSS (Bulma framework)
- JavaScript

## How it Works

1. When the user clicks the "Get Users" button, the application fetches user data from the [ReqRes](https://reqres.in/) API.
2. While the data is being fetched, a loader animation is displayed.
3. Once the data is retrieved, the loader disappears, and the user cards are displayed in a grid.
4. Each user card contains the user's name, profile picture, and email address.

## Customization

- Styling: The application uses the Bulma CSS framework for styling. If you want to customize the appearance, you can modify the `user.css` file or add your own styles.
- API Endpoint: If you want to fetch data from a different API or modify the existing API endpoint, you can change the URL in the `getUsers` function in the `user.js` file.

## API Used

The application fetches user data from the [ReqRes](https://reqres.in/) API. Specifically, it retrieves user data from the following endpoint: `https://reqres.in/api/users?page=1`.

## Acknowledgments

- The [Bulma](https://bulma.io/) CSS framework for providing the styling foundation.
- The [ReqRes](https://reqres.in/) API for providing the user data.

That's it! You now have a user card grid application that fetches user data from an API and displays it in an organized grid format.
