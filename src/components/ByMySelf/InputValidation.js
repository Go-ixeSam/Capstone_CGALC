import {
  error,
  success,
  required,
  positiveNumber,
  none,
} from "../../variables/Variables.jsx";
class Validation {
  getValidationState(value, validationType) {
    console.log("loại biến= ", typeof value);
    // const length = value.length;
    let isValid = true;
    let result = { type: "", errorMessage: "" };

    //Nếu độ dài của mảng validation bằng ko thì kết quả luôn là success
    validationType.map((obj) => {
      switch (obj) {
        case required:
          if (value.trim() == "") {
            isValid = false;
            result.errorMessage = "Please fill the box";
          }
          break;
        case positiveNumber:
          if (value < "0") {
            isValid = false;
            result.errorMessage = "Cargo volume must be a possitive number";
          }
          break;
        case none:
          isValid=true;
          break
      }
    });
    if (isValid) {
      result.type = success;
    } else {
      result.type = error;
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
