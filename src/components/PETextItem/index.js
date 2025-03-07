/**
 * Copyright (c) 2022 Protocon Network. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

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
import MDTypography from "components/MDTypography";

function PETextItem({ content, href }) {
  return href ? (
    <MDTypography
      variant="caption"
      color="link"
      fontWeight="regular"
      letterSpacing={1}
      component="a"
      href={href}
      target="_self"
      rel="noreferrer"
    >
      {content}
    </MDTypography>
  ) : (
    <MDTypography variant="caption" color="text" fontWeight="regular" letterSpacing={1}>
      {content}
    </MDTypography>
  );
}

PETextItem.defaultProps = {
  href: "",
};

PETextItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  href: PropTypes.string,
};

export default PETextItem;
