// TASK 3 - reducers: reducers/notificationReducer.js

import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// Default state
const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};

// Notifications reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map(notification => ({
          ...notification,
          isRead: false
        }))
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        )
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};

export default notificationReducer;
