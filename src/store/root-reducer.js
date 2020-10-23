import { combineReducers } from 'redux'
import createtrip from './trip/trip.js'
import userprofile from './user/user.js'

export default combineReducers(
    {
        userprofile,
        createtrip
    }
)
