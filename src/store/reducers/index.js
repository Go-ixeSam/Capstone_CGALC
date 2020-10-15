import { combineReducers } from 'redux'
import userprofile from './userprofile.js'
import createtrip from './createtrip.js'

export default combineReducers(
    {
        userprofile,
        createtrip
    }
)
