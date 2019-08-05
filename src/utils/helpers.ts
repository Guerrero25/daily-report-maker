import { AsyncStorage } from "react-native";
import { NavigationState } from "react-navigation";
import { Filters } from "../types";

export function removeDuplicated(array: object[], key: string = "id") {
  const itemsObject: { [key: string]: any } = {};

  array.forEach((item: { [key: string]: any }) => {
    itemsObject[item[key]] = item;
  });

  return Object.keys(itemsObject).map(itemKey => itemsObject[itemKey]);
}

export function getPersistenceFunctions(
  persistenceKey: string = "navigator-state"
) {
  const persistNavigationState = async (navState: NavigationState) => {
    try {
      await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
    } catch (err) {
      // handle the error according to your needs
    }
  };
  const loadNavigationState = async () => {
    const jsonString = await AsyncStorage.getItem(persistenceKey);
    return JSON.parse(jsonString || "");
  };

  return __DEV__
    ? {
        persistNavigationState: persistNavigationState,
        loadNavigationState: loadNavigationState
      }
    : undefined;
}

export function getFiltersString(filters: Filters): string {
  let filtersString = "";

  for (const key in filters) {
    const filter = filters[key];

    if (filter.hasOwnProperty("key")) {
      if (filter.value) {
        filtersString += `&${filter.prefix ? filter.prefix : ""}${filter.key}${
          filter.suffix ? filter.suffix : ""
        }=${filter.value}`;
      }
    } else {
      if (filter.value) {
        filtersString += `&${filter.prefix ? filter.prefix : ""}${key}=${
          filter.value
        }`;
      }
    }
  }

  console.log({ filtersString });

  return filtersString;
}
