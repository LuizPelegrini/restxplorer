// This is a React Context to encapsulate the logic and data regarding the restaurants added to the application
import React, { createContext, useContext, useState, useCallback } from 'react';
import firebaseDB from '../config/firebase';

interface RestaurantState {
  restaurants: RestaurantInfo[];
}

// basic data for every restaurant item
interface RestaurantInfo {
  id: string | null;
  name: string;
  address: string;
  business: string;
}

// the context data & logic that will be accessible by the components of the application
interface RestaurantContextData {
  restaurants: RestaurantInfo[]; // all the restaurants saved in the application
  add: (data: Omit<RestaurantInfo, 'id'>) => void; // add a new restaurant
  remove: (id: string) => void; // remove a restaurant with the given id
}

// initialize the context
const RestaurantContext = createContext<RestaurantContextData>(
  {} as RestaurantContextData,
);

const RestaurantProvider: React.FC = ({ children }) => {
  // TODO: Create logic to add/remove restaurants using Firebase
  const [data, setData] = useState<RestaurantState>({} as RestaurantState);

  // Add a new restaurant to database
  const add = useCallback(
    ({ name, business, address }: Omit<RestaurantInfo, 'id'>) => {
      firebaseDB
        .child('restaurants')
        .push({ name, business, address })
        .then(
          // if the operation has completed successfully, then update the state
          success => {
            const newRestaurant: RestaurantInfo = {
              id: success.key, // assign the id generated by Firebase to the restaurant object
              name,
              business,
              address,
            };

            // update context component state
            setData(prevState => {
              return {
                restaurants: [...(prevState.restaurants || []), newRestaurant],
              } as RestaurantState;
            });
          },
          error => {
            console.error('Error on saving restaurant', error);
          },
        );
    },
    [],
  );

  const remove = useCallback((id: string) => {
    // console.log('');
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ restaurants: data.restaurants, add, remove }}
    >
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
