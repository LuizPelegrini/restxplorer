// This is a React Context to encapsulate the logic and data regarding the restaurants added to the application
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import firebaseDB from '../config/firebase';

// basic data for every restaurant item
export interface RestaurantInfo {
  id: string;
  name: string;
  address: string;
  business: string;
}

interface RestaurantDTO {
  name: string;
  address: string;
  business: string;
}

// the context data & logic that will be accessible by the components of the application
interface RestaurantContextData {
  restaurants: RestaurantInfo[]; // all the restaurants saved in the application
  add: (data: RestaurantDTO) => void; // add a new restaurant
  remove: (id: string) => void; // remove a restaurant with the given id
}

// initialize the context
const RestaurantContext = createContext<RestaurantContextData>(
  {} as RestaurantContextData,
);

const RestaurantProvider: React.FC = ({ children }) => {
  const [restaurantsInfo, setRestaurantsInfo] = useState<RestaurantInfo[]>([]);

  // Upon component is mounted, fetch data from database
  useEffect(() => {
    async function getRestaurantInfo() {
      const restaurantData = await firebaseDB
        .child('restaurants')
        .once('value');

      const data = restaurantData.val();
      // convert snapshot into an array of RestaurantInfo
      const restaurants = Object.keys(data).map<RestaurantInfo>(key => ({
        id: key,
        ...data[key],
      }));

      setRestaurantsInfo(restaurants);
    }

    getRestaurantInfo();
  }, []);

  // Add a new restaurant to database
  const add = useCallback(
    ({ name, business, address }: RestaurantDTO) => {
      firebaseDB
        .child('restaurants')
        .push({ name, business, address })
        .then(
          // if the operation has completed successfully, then update the state
          success => {
            // if Firebase returns a valid key (not null), then update component
            if (success.key) {
              const newRestaurant: RestaurantInfo = {
                id: success.key, // assign the id generated by Firebase to the restaurant object
                name,
                business,
                address,
              };

              // update context component state
              setRestaurantsInfo([...restaurantsInfo, newRestaurant]);
            }
          },
          error => {
            console.error('Error on saving restaurant', error);
          },
        );
    },
    [restaurantsInfo],
  );

  // remove the restaurant info from the list
  const remove = useCallback(
    (id: string) => {
      firebaseDB
        .child(`restaurants/${id}`)
        .remove()
        .then(() => {
          // filter out the element that its id is equal to the given id
          const newRestaurantsInfo = restaurantsInfo.filter(
            rest => rest.id !== id,
          );
          setRestaurantsInfo(newRestaurantsInfo);
        });
    },
    [restaurantsInfo],
  );

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurantsInfo, add, remove }}
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
