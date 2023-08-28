# FOAF Visualizer
## Frontend

This guide will walk you through the process of downloading **FOAF Visualizer** from GitHub and getting it up and running on your local machine.

## Prerequisites

- Git
- Node.js (v14 or later)
- npm (Node Package Manager) or yarn

## Step 1: Cloning the Repository

1. **Open Terminal:** Launch your terminal or command prompt.
2. **Choose Directory:** Navigate to the directory where you want to clone the project. Use the `cd` command to move to the desired directory.
3. **Clone the Repository:** Run the following command to clone the repository from GitHub:
    ```sh
    git clone https://github.com/bratuchedot/foaf-visualizer-frontend.git
    ```
4. **Navigate to Project Directory:** Move into the newly cloned project directory:
    ```sh
    cd foaf-visualizer-frontend
    ```

## Step 2: Project Configuration

1. **Install Dependencies:** Inside the project directory, install the project dependencies using the following command:
    ```sh
    npm install
    ```
2. **Start Development Server:** To start the development server, run the following command:
    ```sh
    npm run dev
    ```
    This command will compile the project and start the development server. Look for the URL (http://localhost:5173) where you can access your project in a web browser.
    **Note:** Before accessing the project in a web browser make sure you have up and running the backend.

### Valid FOAF file URL for testing
Enter the following URL into the search bar of the application.
```sh
    https://raw.githubusercontent.com/bratuchedot/foaf/master/foaf.ttl
```
    
## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Git Documentation](https://git-scm.com/doc)

**Crafted with ♥ by Emilijan Koteski, August 2023**
