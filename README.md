# The EYE CTF

## Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/<yourusername>/the-eye-ctf.git
    cd the-eye-ctf
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key
    ```

## Running the Server

1. **Start MongoDB:**
    Ensure MongoDB is running on your machine or use a cloud-based MongoDB service.

2. **Start the application:**
    ```sh
    npm run dev
    ```

3. **Access the application:**
    Open your web browser and navigate to `http://localhost:3000`.

## Contributing
Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.