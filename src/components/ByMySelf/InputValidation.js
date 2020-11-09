import { error, success,required,positiveNumber } from "../../variables/Variables.jsx";
class Validation {
  getValidationState(value, validationType) {
    console.log("loại biến= ",typeof value)
    const length = value.length;
    let isValid = true;
    let result = { type: "", errorMessage: "" };
    validationType.map((obj) => {
      switch (obj) {
        case required:
          isValid = value.trim() !== "" && isValid;
          break;
          case positiveNumber:
          
          break
      }
    });
    if (isValid) {
      result.type = success;
    } else {
      result.type = error;
      result.errorMessage = "Please fill the box";
    }
    return result;
  }
}
export default Validation;

// switch (validationType) {
//   case lengthError:
//     if (length > 0) return "success";
//     if (length <= 0) return "error";
//     break;
//   case positiveNumber:
//     if (value > 0 && length > 0) {
//       return "success";
//     }
//     if (value <= 0 && length <= 0) {
//       return "error";
//     }
//     break;
//   case isCheck:
//     if (value > 0) {
//       return "success";
//     }
//     if (value < 0) return null;
//     break;
// }
