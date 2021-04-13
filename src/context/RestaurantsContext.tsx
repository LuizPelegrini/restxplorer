// This is a React Context to encapsulate the logic and data regarding the restaurants added to the application
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { v4 as uuid } from 'uuid';
import firebaseDB from '../config/firebase';

interface RestaurantPickedState {
  lastTimePicked: number;
  timesPicked: number;
}

// basic data for every restaurant item
export interface RestaurantInfo {
  id: string;
  name: string;
  address: string;
  business: string;
  price: number;
  pickedState: RestaurantPickedState;
}

export interface RestaurantDTO {
  name: string;
  address: string;
  business: string;
  price: number;
}

// the context data & logic that will be accessible by the components of the application
interface RestaurantContextData {
  restaurants: RestaurantInfo[]; // all the restaurants saved in the application
  add: (data: RestaurantDTO) => void; // add a new restaurant
  remove: (id: string) => void; // remove a restaurant with the given id
  draw: (filter: number) => RestaurantDTO; // randomly pick a restaurant
}

// initialize the context
const RestaurantContext = createContext<RestaurantContextData>(
  {} as RestaurantContextData,
);

const RestaurantProvider: React.FC = ({ children }) => {
  const [restaurantsInfo, setRestaurantsInfo] = useState<RestaurantInfo[]>([]);
  const firebaseRestaurantsRef = firebaseDB.child('restaurants');
  // Upon component is mounted, fetch data from database
  useEffect(() => {
    async function getRestaurantInfo() {
      const restaurantData = await firebaseRestaurantsRef.once('value');

      const data = restaurantData.val();

      // if there is no restaurant information in the database, dont update component
      if (data) {
        // convert snapshot into an array of RestaurantInfo
        const restaurants = Object.keys(data).map<RestaurantInfo>(key => ({
          id: key,
          ...data[key],
        }));

        setRestaurantsInfo(restaurants);
      }
    }

    getRestaurantInfo();
  }, [firebaseRestaurantsRef]);

  // Add a new restaurant to database
  const add = useCallback(
    ({ name, business, address, price }: RestaurantDTO) => {
      // generating a unique identifier
      const id = uuid();
      const pickedState = {
        lastTimePicked: -1,
        timesPicked: 0,
      };

      firebaseRestaurantsRef
        .child(id) // adding custom id
        .set({ name, business, address, price, pickedState }) // saving restaurant info
        .then(
          // if the operation has completed successfully, then update the state
          success => {
            const newRestaurant: RestaurantInfo = {
              id,
              name,
              business,
              address,
              price,
              pickedState,
            };

            // update context component state
            setRestaurantsInfo([...restaurantsInfo, newRestaurant]);
          },
          error => {
            console.error('Error on saving restaurant', error);
          },
        );
    },
    [restaurantsInfo, firebaseRestaurantsRef],
  );

  // remove the restaurant info from the list
  const remove = useCallback(
    (id: string) => {
      firebaseRestaurantsRef
        .child(id)
        .remove()
        .then(() => {
          // filter out the element that its id is equal to the given id
          const newRestaurantsInfo = restaurantsInfo.filter(
            rest => rest.id !== id,
          );
          setRestaurantsInfo(newRestaurantsInfo);
        });
    },
    [restaurantsInfo, firebaseRestaurantsRef],
  );

  // randomly pick a restaurant from a set
  const draw = useCallback(
    (filterValue: number): RestaurantDTO => {
      console.log(filterValue);
      // filter out the restaurants that has a price greater than the filter specified
      const restaurantsToPickFrom = restaurantsInfo.filter(
        res => filterValue < 0 || res.price <= filterValue,
      );
      const randomIndex = Math.floor(
        Math.random() * restaurantsToPickFrom.length,
      );

      const {
        id,
        name,
        address,
        business,
        price,
        pickedState: { timesPicked },
      } = restaurantsToPickFrom[randomIndex];

      // create the last picked information
      const pickedState: RestaurantPickedState = {
        lastTimePicked: Date.now(),
        timesPicked: timesPicked + 1,
      };

      firebaseRestaurantsRef
        .child(id)
        .update({ pickedState })
        .then(
          success => {
            const updatedRestaurantInfo = restaurantsInfo.map(res => {
              return res.id === id ? { ...res, pickedState } : res;
            });

            setRestaurantsInfo(updatedRestaurantInfo);
          },
          error => {
            console.error('Error on updating restaurant', error);
          },
        );

      return {
        name,
        address,
        business,
        price,
      };
    },
    [restaurantsInfo, firebaseRestaurantsRef],
  );

  return (
    <RestaurantContext.Provider
      value={{ restaurants: restaurantsInfo, add, remove, draw }}
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
