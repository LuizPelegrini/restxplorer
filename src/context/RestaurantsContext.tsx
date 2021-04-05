// This is a React Context to encapsulate the logic and data regarding the restaurants added to the application
import React, { createContext, useContext, useState, useCallback } from 'react';
import firebaseDB from '../config/firebase';

// basic data for every restaurant item
interface RestaurantInfo {
  name: string;
  address: string;
  business: string;
}

// the context data & logic that will be accessible by the components of the application
interface RestaurantContextData {
  restaurants: RestaurantInfo[]; // all the restaurants saved in the application
  add: (data: RestaurantInfo) => void; // add a new restaurant
  remove: (id: string) => void; // remove a restaurant with the given id
}

// initialize the context
const RestaurantContext = createContext<RestaurantContextData>(
  {} as RestaurantContextData,
);

const RestaurantProvider: React.FC = ({ children }) => {
  // TODO: Create logic to add/remove restaurants using Firebase
  const [restaurants, setRestaurants] = useState([]);

  const add = useCallback(({ name, address, business }: RestaurantInfo) => {
    console.log('name', name);
    console.log('address', address);
    console.log('business', business);
  }, []);

  const remove = useCallback((id: string) => {
    console.log('');
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, add, remove }}>
      {children}
    </RestaurantContext.Provider>
  );
};

// Creating a hook to expose this context data
function useRestaurant(): RestaurantContextData {
  const context = useContext(RestaurantContext);

  if (!context) {
    throw new Error(
      'useRestaurant can only be used within a RestaurantProvider',
    );
  }

  return context;
}

export { RestaurantProvider, useRestaurant };
