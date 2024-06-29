import { Button, Flex, Input } from "@mantine/core";
import { modals } from "@mantine/modals";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { InfoInput } from "../FormChange/FormChange";
import API_ADDRESS from "../../Api_Address";

function infoReducer(state: any, action: any) {
  let newState = { ...state };
  switch (action.type) {
    case "UPDATE":
      newState[action.payload.id] = action.payload.info;
      return newState;
    case "ADD":
      newState[Math.floor(Math.random() * 100000000)] = "";
      return newState;
    case "DELETE":
      delete newState[action.payload.id];
      return newState;
    case "LOAD":
      action.payload.infos.forEach(
        (info: { id: number; productWarrantyId: string }) => {
          newState[info.id] = info.productWarrantyId;
        }
      );
      return newState;
    case "SAVE":
      return state;
    default:
      return state;
  }
}

const FormProductWarranty = (props: {
  productLine: string;
  productId: number;
}) => {
  const initialArg: InfoInput = {};
  const [serial, serialDispatch] = useReducer(infoReducer, initialArg);
  const [newSerial, newSerialDispatch] = useReducer(infoReducer, initialArg);

  async function getProduct(productId: number): Promise<any> {
    try {
      const response = await axios.get(
        `http://${API_ADDRESS}:8080/product-warranty/all?productId=${productId}`
      );
      return response.data;
    } catch {}
  }

  useEffect(() => {
    const handleGetProduct = async () => {
      const response = await getProduct(props.productId);
      serialDispatch({
        type: "LOAD",
        payload: {
          infos: response,
        },
      });
    };
    handleGetProduct();
  }, [props.productId]);

  const handleAddProduct = async () => {
    try {
      const productSerials = Object.keys(newSerial).map((key) => {
        return newSerial[key];
      });
      await axios.post(`http://${API_ADDRESS}:8080/product-warranty/create`, {
        productWarranties: productSerials,
        productLine: props.productLine,
      });
    } catch (error) {}
  };

  return (
    <div>
      <div className="modal-body">
        <Input.Wrapper className="mb-20" label="Line">
          <Input disabled value={props.productLine} />
        </Input.Wrapper>
        <Input.Wrapper className="mb-20" label="Serial Number ">
          <span
            className="moreinfo-text"
            onClick={() => newSerialDispatch({ type: "ADD" })}
          >
            More S/N
          </span>
          <Flex rowGap={"sm"} direction={"column"}>
            {Object.keys(serial).map((key) => (
              <Flex key={key} columnGap={"sm"}>
                <Input
                  title="info"
                  name="productInfo"
                  type="text"
                  value={serial[key]}
                  disabled
                  style={{ flex: "1 1 90%" }}
                />
              </Flex>
            ))}
            {Object.keys(newSerial).map((key) => (
              <Flex key={key} columnGap={"sm"}>
                <Input
                  title="info"
                  name="productInfo"
                  type="text"
                  value={newSerial[key]}
                  style={{ flex: "1 1 90%" }}
                  onChange={(e) => {
                    return newSerialDispatch({
                      type: "UPDATE",
                      payload: {
                        id: key,
                        info: e.target.value,
                      },
                    });
                  }}
                />
                <Button
                  type="button"
                  onClick={() =>
                    newSerialDispatch({ type: "DELETE", payload: { id: key } })
                  }
                  color="#f03a17"
                >
                  Xóa
                </Button>
              </Flex>
            ))}
          </Flex>
        </Input.Wrapper>
      </div>
      <div className="modal-footer">
        <Button
          mt="md"
          onClick={async () => {
            await handleAddProduct();
          }}
        >
          Add Warranty
        </Button>
        <Button
          style={{ backgroundColor: "#eef2f7", color: "black" }}
          onClick={() => modals.closeAll()}
          mt="md"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default FormProductWarranty;
