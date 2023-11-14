import { NativeSelect, Input } from "@mantine/core";
function InputGrid2() {
  return (
    <>
      <div className="productcheckout-grid">
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Họ và tên đệm:</span>
          <Input.Wrapper style={{ marginRight: "8px" }}>
            <Input placeholder="Nguyễn" />
          </Input.Wrapper>
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Tên:</span>
          <Input.Wrapper style={{ marginLeft: "8px" }}>
            <Input placeholder="Lương" />
          </Input.Wrapper>
        </div>
      </div>
    </>
  );
}

export default InputGrid2;
