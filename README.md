Room Listing Application
Overview
This is a React-based application that displays room listings with information like room name, price, images, videos, and description. The application uses a static JSON dataset to simulate large amounts of data and implements various performance optimization strategies including lazy loading, video optimization, and infinite scrolling.

Table of Contents
Project Setup
Architecture
Components
State Management
Performance Optimizations
Video Optimization
Image Optimization
Infinite Scrolling
Placeholder and Loading Indicator
Error Handling
How to Run
Future Improvements
Project Setup
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (>= 14.x)
npm (comes with Node.js)
Installation
Clone the repository:
git clone https://github.com/your-username/room-listing-app.git
Navigate to the project directory:

cd room-listing-app
Install dependencies:
npm install
Start the development server
npm start
By default, the application will be available at http://localhost:3000.

Architecture
This project is designed as a modular and reusable React application with the following architecture:

Components
RoomContainer:

Acts as the parent container for managing data fetching, loading.
Handles infinite scrolling, fetching room data from a JSON file.
Displays a loading indicator or error message when necessary.
Room:

Displays individual room details, including name, price, bed type, images, and videos.
Implements performance features like lazy loading.
Static Data:

data.json: Simulated data representing hotel rooms, videos, and images.
State Management
useState: For managing local component states (e.g., loading state).
useEffect: For data fetching and setting up infinite scroll listeners.
Performance Optimizations
This project employs several strategies to ensure efficient performance, especially given the large volume of room data (100+ items) and media files (images and videos).


1. Image Optimization
Lazy Loading: Images are loaded lazily using the loading="lazy" attribute to reduce initial load time.
Responsive Loading: Images use responsive techniques (e.g., different image resolutions like twoX) to ensure the best quality and performance based on device size.
Fallbacks: Proper fallbacks are in place if a video is not available for a room, defaulting to an image.
2. Infinite Scrolling
Dynamic Data Loading: Instead of loading all room data at once, the application uses a "load more" strategy. Only 10 rooms are loaded initially, and more data is fetched as the user scrolls down.
3. Placeholder and Loading Indicator
Skeleton Loading: While media (images or videos) is loading, a skeleton placeholder is displayed to maintain a smooth user experience.
Loading Spinner: A spinner (using react-loader-spinner) is shown while room data is being fetched.
4. Error Handling
Graceful Error Messages: If there is a failure in data fetching (simulated or real), a user-friendly error message is displayed to the user.
How to Run
Start the Development Server:

npm start
The application will run on http://localhost:3000.

Simulate Infinite Scroll: Scroll down to load additional room listings. 


Future Improvements


Backend Integration: Replace static JSON with dynamic data fetching from an API server.

Unit Tests: Add unit tests to ensure component functionality and state management integrity.

This project serves as a foundational example of how to build a performant room listing UI in React with optimizations for large datasets and media.
