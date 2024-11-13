import Select from "react-select";
import { products } from "../utils/products";

// Available category options for the filter
const options = [
  { value: "sofa", label: "Wrench" },
  { value: "chair", label: "Nuts" },
  { value: "watch", label: "Tape" },
  { value: "mobile", label: "Hammer" },
  { value: "wireless", label: "Switch" },
];

// Custom styles for the Select component
const customStyles = {
  control: (provided) => ({
    // Styles for the main control element (Select input)
    ...provided,
    backgroundColor: "#0f3460", // Background color
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px", // Width of the Select
    height: "40px", // Height of the Select
  }),
  option: (provided, state) => ({
    // Styles for the options in the dropdown menu
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white", // Background color for selected option
    color: state.isSelected ? "white" : "#0f3460", // Text color for selected option
    "&:hover": {
      backgroundColor: "#0f3460", // Background color on hover
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    // Style for the selected value displayed
    ...provided,
    color: "white",
  }),
};

// Component that renders the Select filter and updates the filtered list
const FilterSelect = ({ setFilterList }) => {
  // Function that handles the change of selection
  const handleChange = (selectedOption) => {
    // Filter products based on the selected category
    setFilterList(
      products.filter((item) => item.category === selectedOption.value)
    );
  };

  return (
    <Select
      options={options} // Filter options
      defaultValue={{ value: "", label: "Filter By Category" }} // Default value for Select
      styles={customStyles} // Apply custom styles
      onChange={handleChange} // Assign the handler for selection change
    />
  );
};

export default FilterSelect;
