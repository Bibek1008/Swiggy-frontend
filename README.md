# Swiggy Clone 🍕

A modern, responsive food delivery application clone built with React, Redux Toolkit, and Tailwind CSS. This project replicates the core functionality of Swiggy, including restaurant browsing, food search, cart management, and user authentication.

## 🚀 Features

- **Restaurant Discovery**: Browse restaurants by location with real-time data
- **Food Categories**: Explore different food categories and cuisines
- **Search Functionality**: Search for restaurants, dishes, and cuisines
- **Restaurant Menus**: View detailed restaurant menus with dish information
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Firebase-based authentication system
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Live data fetching from Swiggy API
- **Location-based Services**: Get restaurants based on your location

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **State Management**: Redux Toolkit, React Redux
- **Styling**: Tailwind CSS, PostCSS
- **Authentication**: Firebase
- **Icons**: Flaticon UI Icons
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AddToCartBtn.jsx    # Add to cart functionality
│   ├── Body.jsx            # Main body component
│   ├── Cart.jsx            # Shopping cart
│   ├── Dish.jsx            # Individual dish component
│   ├── Head.jsx            # Header component
│   ├── OnlineFoodDelivey.jsx # Food delivery section
│   ├── RestaurantCard.jsx  # Restaurant card component
│   ├── RestaurantMenu.jsx  # Restaurant menu page
│   ├── Search.jsx          # Search functionality
│   ├── SearchRestaurant.jsx # Restaurant search
│   ├── Shimmer.jsx         # Loading skeleton
│   ├── SigninBtn.jsx       # Authentication button
│   ├── TopRestaurant.jsx   # Top restaurants section
│   └── onYourMind.jsx      # Food categories section
├── config/              # Configuration files
│   └── firebaseAuth.js     # Firebase configuration
├── context/             # React context
│   └── contextApi.js       # Global context provider
├── hooks/               # Custom hooks
│   └── useRestaurantsData.js # Restaurant data fetching hook
├── utils/               # Redux store and utilities
│   ├── authSlice.js        # Authentication state
│   ├── cartSlice.js        # Cart state management
│   ├── filterSlice.js      # Filter state
│   ├── links.js            # API links and constants
│   ├── store.js            # Redux store configuration
│   └── toogleSlice.js      # UI toggle states
├── App.jsx              # Main app component
├── main.jsx             # App entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swiggy-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_APIKEY=your_firebase_api_key
   VITE_AUTHDOMAIN=your_firebase_auth_domain
   VITE_PROJECTID=your_firebase_project_id
   VITE_STORAGEBUCKET=your_firebase_storage_bucket
   VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
   VITE_APPID=your_firebase_app_id
   VITE_BASE_URL=https://www.swiggy.com/dapi
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with your preferred sign-in methods
3. Copy your Firebase configuration to the `.env` file
4. Update `src/config/firebaseAuth.js` if needed

### API Configuration

The application uses Swiggy's public API through a CORS proxy. The API endpoints are configured to work with:
- Restaurant data fetching
- Menu information
- Search functionality
- Location-based services

## 🌟 Key Features Explained

### State Management
- **Redux Toolkit** for efficient state management
- Separate slices for authentication, cart, filters, and UI toggles
- Persistent cart state across sessions

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

### Performance Optimization
- Lazy loading with React Suspense
- Shimmer loading states for better UX
- Optimized API calls with custom hooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes only. Swiggy is a trademark of Bundl Technologies Pvt. Ltd.

## 🙏 Acknowledgments

- [Swiggy](https://www.swiggy.com/) for the inspiration and API
- [React](https://reactjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Firebase](https://firebase.google.com/) for authentication services

## 📞 Support

If you have any questions or run into issues, please open an issue in the repository.

---

**Happy Coding! 🚀**