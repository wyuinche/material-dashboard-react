/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Node({ node, address, alive, noGutter }) {
  let aliveText;
  let aliveColor;

  if (alive) {
    aliveText = "active";
    aliveColor = "success";
  } else if (address !== "https://0.0.0.0:0") {
    aliveText = "not found";
    aliveColor = "error";
  } else {
    aliveText = "-";
    aliveColor = "text";
  }

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <MDBox lineHeight={1.125}>
        <MDTypography
          display="block"
          variant="button"
          fontWeight={node === "empty" ? "regular" : "medium"}
        >
          {node}
        </MDTypography>
        <MDTypography variant="caption" fontWeight="regular" color="text">
          {address}
        </MDTypography>
      </MDBox>
      <MDBox display="flex" alignItems="center">
        <MDTypography variant="button" fontWeight="regular" color={aliveColor}>
          {aliveText}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Invoice
Node.defaultProps = {
  node: "empty",
  address: "https://0.0.0.0:0",
  alive: false,
  noGutter: false,
};

// Typechecking props for the Invoice
Node.propTypes = {
  node: PropTypes.string,
  address: PropTypes.string,
  alive: PropTypes.bool,
  noGutter: PropTypes.bool,
};

export default Node;
