import React from "react";
import {
  Row,
  Col,
  DropdownButton,
  MenuItem,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from "react-bootstrap";

import { getValidationState } from "../ByMySelf/InputValidation.js";
import {
  lengthError,
  positiveNumber,
  select,
} from "../../variables/Variables.jsx";

export const FormInput = (argument) => {
  let inputElement = <FormGroup></FormGroup>;
  let feedBack = <HelpBlock></HelpBlock>;
  switch (argument.elementType) {
    case "input":
      feedBack = <HelpBlock>{argument.valid.errorMessage}</HelpBlock>;
      inputElement = (
        <FormGroup
          // controlId={argument.id}
          validationState={argument.valid.type}
        >
          <label>{argument.elementConfig.labeltext}</label>
          <FormControl {...argument.elementConfig}  onChange={argument.change} />
          {feedBack}
        </FormGroup>
      );
      break;
    case "textarea":
      break;
    case "select":
      var itemOption = argument.elementConfig.options;
      inputElement = (
        <FormGroup>
          <label>{argument.elementConfig.labeltext}</label>
          <FormControl
            componentClass="select"
            onChange={argument.change}
            value={argument.elementConfig.value}
          >
            {itemOption.map((opt) => {
              return (
                <option key={opt.id} value={opt.value}>
                  {opt.displayValue}
                </option>
              );
            })}
          </FormControl>
        </FormGroup>
      );
      break;
  }
  return inputElement;
};

// case "input":
//   return (
//     <Col xs={argument.xsNumber}>
//       <div>

//       </div>
//     </Col>
//   );

//           }
//         }

//       break;
//     case "inputnovalidation":
//       return (
//         <Col xs={argument.xsNumber}>
//           <div>
//             <FormGroup>
//               <label>{argument.labelText}</label>
//               <FormControl
//                 required
//                 placeholder={argument.placeholderText}
//                 defaultValue={argument.defaultValue}
//                 onChange={argument.change}
//               />
//               <HelpBlock>{argument.helpblock}</HelpBlock>
//             </FormGroup>
//           </div>
//         </Col>
//       );
//       break;
//     case "select":
//       // Đây là 1 điều kiện đặt ra để phân biệt loại truck select
//       var itemOption = argument.options;
//       if (argument.info == "truck") {
//         itemOption = argument.truckOptions;
//       }
//       return (
{
  /* <Col xs={argument.xsNumber}>
  <FormGroup validationState={getValidationState(argument.realValue, select)}>
    <label>{argument.labelText}</label>
    <FormControl
      componentClass="select"
      placeholder="select"
      as="select"
      onChange={argument.change}
      value={argument.currentValue}
    >
      {itemOption.map((opt) => {
        return (
          <option value={opt.id ? opt.id : opt}>
            {opt.value ? opt.value : opt}
          </option>
        );
        //Dòng value có nghĩa là những loại select có id thì value sẽ để id,
        // còn ko thì để giá trị mặc định
        //opt.value cũng vậy
      })}
    </FormControl>
  </FormGroup>
</Col>; */
}
//       );
//       break;
//     case "password":
//       return (
//         <Col xs={argument.xsNumber}>
//           <FormGroup>
//             <label>{argument.labelText}</label>
//             <FormControl
//               type={"password"}
//               required
//               placeholder={argument.placeholderText}
//               defaultValue={argument.defaultValue}
//               onChange={argument.change}
//               as="password"
//             ></FormControl>
//           </FormGroup>
//         </Col>
//       );
//       break;
//     case "number":
//       return (
//         <Col xs={argument.xsNumber}>
//           <FormGroup
//             validationState={getValidationState(
//               argument.realValue,
//               positiveNumber
//             )}
//           >
//             <label>{argument.labelText}</label>
//             <FormControl
//               type={"number"}
//               required
//               placeholder={argument.placeholderText}
//               defaultValue={argument.defaultValue}
//               onChange={argument.change}
//               as="number"
//             ></FormControl>
//           </FormGroup>
//         </Col>
//       );
//       break;
//   }
// };
