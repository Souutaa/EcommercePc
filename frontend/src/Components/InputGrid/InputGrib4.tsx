import { NativeSelect, Input } from "@mantine/core";

function InputGrib4() {
  return (
    <>
      <div className="productcheckout-grid">
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Số điện thoại:</span>
          <Input.Wrapper style={{ marginRight: "8px" }}>
            <Input placeholder="0xx xxx xxxx" />
          </Input.Wrapper>
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Email:</span>
          <Input.Wrapper style={{ marginLeft: "8px" }}>
            <Input placeholder="abc@gmail.com" />
          </Input.Wrapper>
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Tỉnh, thành phố::</span>
          <NativeSelect
            style={{ marginRight: "8px" }}
            placeholder="Chọn tỉnh, thành phố"
            data={["Hồ chí Minh", "Hà Nội", "Vũng Tàu", "Đà Lạt"]}
          />
        </div>
        <div className="productcheckout-grid-input">
          <span className="productcheckput-text">Quận, huyện:</span>
          <NativeSelect
            style={{ marginLeft: "8px" }}
            placeholder="Native select"
            data={["Huyện Cần Giờ", "Quận 7", "Quận 8", "Quận 5"]}
          />
        </div>
      </div>
    </>
  );
}

export default InputGrib4;
