import * as React from "react";
import {
  addTag,
  updateToggleState,
  fetchInitial,
  reducer,
  searchName,
  searchTag,
} from "./Reducer.js";
import faker from "faker";
import * as robohashAvatars from "robohash-avatars";

export const Context = React.createContext();

const MAX_TAG_LENGTH = 20;
const ENTER_KEY = "Enter";

const initialState = {
  roboFriends: [],
  searchName: "",
  searchTag: "",
};

const fetchData = () => {
  return new Promise((resolve) => {
    resolve(
      Array.from(Array(25)).map(() => ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        company: faker.company.companyName(),
        position: faker.name.jobTitle(),
        id: faker.datatype.uuid(),
        dailyIncome: [
          faker.finance.amount(),
          faker.finance.amount(),
          faker.finance.amount(),
          faker.finance.amount(),
          faker.finance.amount(),
          faker.finance.amount(),
          faker.finance.amount(),
        ],
        pic: robohashAvatars.generateAvatar({
          username: faker.internet.userName(),
          background: robohashAvatars.BackgroundSets.RandomBackground1,
          characters: robohashAvatars.CharacterSets.Robots,
          height: 400,
          width: 400,
        }),
      }))
    );
  });
};

const Provider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    fetchData().then((roboFriends) => {
      dispatch(fetchInitial(roboFriends));
    });
  }, []);

  const onNameSearch = ({ target: { value } }) => dispatch(searchName(value));
  const onTagSearch = ({ target: { value } }) => dispatch(searchTag(value));
  const onTagAdd = ({ target, key }, id) => {
    const { value: tag } = target;

    if (key === ENTER_KEY && tag !== "" && tag.length <= MAX_TAG_LENGTH) {
      dispatch(
        addTag({
          id,
          tag,
        })
      );
      target.value = "";
    }
  };
  const onUpdateToggleState = (id) => {
    dispatch(updateToggleState(id));
  };

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        onNameSearch,
        onTagSearch,
        onTagAdd,
        onUpdateToggleState,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
