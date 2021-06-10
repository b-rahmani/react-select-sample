//import
import Select, { components } from "react-select";


//how handle add icon in options of react select
  const IconOption = (props) => (
    <Option {...props}>
      {console.log("fhgf", props)}
      <img
        src={imgAPI.edit}
        onClick={() =>
          editAddress(props.data.address, props.data.province, props.data.city)
        }
        style={{ width: 20, float: "left", cursor: "pointer" }}
      />
      <img
        src={imgAPI.delete}
        key={props.data.id}
        onClick={() => deleteAddressFunc(props.data.address.uuid)}
        style={{
          width: 20,
          float: "left",
          position: "relative",
          left: 10,
          cursor: "pointer",
        }}
      />
      {props.data.label}
    </Option>
    
    
    
    //how use select in jsx
      <Select
                                    placeholder="انتخاب کنید ..."
                                    value={selectedAddress}
                                    options={address}
                                    onChange={handleChangeAddress}
                                    components={{ Option: IconOption }}
                                  />
