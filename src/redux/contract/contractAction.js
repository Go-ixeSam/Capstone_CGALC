import ContractType from "./contractType.js";
/**
 * *Tạm thời test sẽ ko có side effect
 * *
 * *
 * *
 */
export const modifyContract = (contract, type) => {
  switch (type) {
    case ContractType.ADD_CONTRACT:
      return {
        type: ContractType.ADD_CONTRACT,
        payload: contract,
      };
    case ContractType.UPDATE_CONTRACT:
      return {
        type: ContractType.UPDATE_CONTRACT,
        payload: contract,
      };
  }
};

export const ModifyContractFomr = (contractForm) => {
  return {
    type: ContractType.UPDATE_CONTRACTFORM,
    payload: contractForm,
  };
};
