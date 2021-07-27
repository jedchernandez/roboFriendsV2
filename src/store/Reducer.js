export const ROBO_FRIEND_ACTIONS = {
  INITIAL: "INITIAL",
  SEARCH_NAME: "ROBO_FRIEND_SEARCH_NAME",
  SEARCH_TAG: "ROBO_FRIEND_SEARCH_TAG",
  ADD_TAG: "ROBO_FRIEND_ADD_TAG",
  UPDATE_TOGGLE_STATE: "ROBO_FRIEND_UPDATE_TOGGLE_STATE",
};

export const fetchInitial = (data) => ({
  type: ROBO_FRIEND_ACTIONS.INITIAL,
  data,
});

export const searchName = (data) => ({
  type: ROBO_FRIEND_ACTIONS.SEARCH_NAME,
  data,
});

export const searchTag = (data) => ({
  type: ROBO_FRIEND_ACTIONS.SEARCH_TAG,
  data,
});

export const addTag = (data) => {
  if (!data) return;

  return {
    type: ROBO_FRIEND_ACTIONS.ADD_TAG,
    data,
  };
};

export const updateToggleState = (data) => {
  if (!data) return;

  return {
    type: ROBO_FRIEND_ACTIONS.UPDATE_TOGGLE_STATE,
    data,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ROBO_FRIEND_ACTIONS.INITIAL:
      return onInitialLoad(action);
    case ROBO_FRIEND_ACTIONS.SEARCH_NAME:
      return onSearchName(state, action);
    case ROBO_FRIEND_ACTIONS.SEARCH_TAG:
      return onSearchTag(state, action);
    case ROBO_FRIEND_ACTIONS.ADD_TAG:
      return onAddTag(state, action);
    case ROBO_FRIEND_ACTIONS.UPDATE_TOGGLE_STATE:
      return onUpdateToggleState(state, action);
    default:
      return state;
  }
};

export const onAddTag = (state, action) => {
  const roboFriendsToUpdate = [...state.roboFriends];
  const { id: roboFriendId, tag } = action.data;
  const index = roboFriendsToUpdate.findIndex(({ id }) => roboFriendId === id);
  const currentRoboFriend = roboFriendsToUpdate[index];
  roboFriendsToUpdate[index] = {
    ...currentRoboFriend,
    tags: currentRoboFriend.tags.concat(tag),
  };

  return {
    ...state,
    roboFriends: roboFriendsToUpdate,
  };
};

export const onUpdateToggleState = (state, action) => {
  const roboFriends = [...state.roboFriends];
  const index = roboFriends.findIndex(({ id }) => id === action.data);
  const currentToggledRoboFriend = roboFriends[index];
  roboFriends[index] = {
    ...currentToggledRoboFriend,
    toggleState: !currentToggledRoboFriend.toggleState,
  };
  return {
    ...state,
    roboFriends: roboFriends,
  };
};

const onInitialLoad = (action) => {
  return {
    roboFriends: action.data.map((roboFriend) => {
      return {
        ...roboFriend,
        fullName: `${roboFriend.firstName} ${roboFriend.lastName}`,
        tags: [],
        toggleState: false,
      };
    }),
    searchName: "",
    searchTag: "",
  };
};

const onSearchTag = (state, action) => {
  return {
    ...state,
    searchTag: action.data,
  };
};

const onSearchName = (state, action) => {
  return {
    ...state,
    searchName: action.data,
  };
};
