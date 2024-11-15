// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from './mealsSlice';

// This code creates a global Redux store using the @reduxjs toolkit configureStore() function so all components in the application can access the state managed by the venueReducer()--all these reducer names are alias names and contain the objects inside them to be called in other places (hover over them to learn about their properties in the IDE).

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});
