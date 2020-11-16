export {login,logout,saveFirebaseToken} from "./user/userAction"
export {getRoute,addTrip,addTripTableHeader} from "./trip/tripAction"
export {modifyContract,ModifyContractFomr} from "./contract/contractAction"
// export * as contracType from "./contract/contractType"
// Làm như thế này thì mọi action creator sẽ nằm chung 1 chỗ, và ta chỉ cần gọi đến redux để
// import action creator mình cần

