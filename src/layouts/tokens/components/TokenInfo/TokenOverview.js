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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

// @mui material components
import { Icon } from "@mui/material";

// Protocon Explorer React components
import PEOverviewAttribute from "components/PEOverviewAttribute";

// Protocon Explorer utils
import { parseAmount, parseFee } from "layouts/parse";

function TokenOverview({
  currency,
  amount,
  minBalance,
  type,
  receiver,
  fee,
  exchangeable,
  exchangeMinAmount,
  exchangecid,
  feefier,
  onClick,
}) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            Token Overview
          </MDTypography>
          <MDBox display="flex" alignItems="center" ml={{ xs: -1.5, sm: 0 }}>
            <MDButton variant="outlined" color={darkMode ? "white" : "dark"} onClick={onClick}>
              <Icon>data_object</Icon>&nbsp;raw
            </MDButton>
          </MDBox>
        </MDBox>
        <PEOverviewAttribute
          title="Currency ID"
          value={type === "feefi" ? `${currency} (exchangeable: ${exchangeable})` : currency}
        />
        <PEOverviewAttribute title="Total Amount" value={parseAmount(amount, currency)} />
        <PEOverviewAttribute
          title="Minimal Balance for New Account"
          value={parseAmount(minBalance, currency)}
        />
        <PEOverviewAttribute title="Feeer Type" value={type} />
        {exchangecid && (
          <PEOverviewAttribute
            title="Exchange Token ID"
            value={exchangecid}
            url={`/token/${exchangecid}`}
            link
          />
        )}
        {exchangeMinAmount && (
          <PEOverviewAttribute
            title="Exchange Min Amount"
            value={parseAmount(exchangeMinAmount, currency)}
          />
        )}
        <PEOverviewAttribute
          title={parseFee(fee, currency).indexOf("%") >= 0 ? "Fee Ratio" : "Fee Amount"}
          value={parseFee(fee, currency)}
        />
        <PEOverviewAttribute title="Receiver" value={receiver} url={`/account/${receiver}`} link />
        {feefier && (
          <PEOverviewAttribute title="Feefier" value={feefier} url={`/account/${feefier}`} link />
        )}
      </MDBox>
    </MDBox>
  );
}

TokenOverview.defaultProps = {
  exchangeable: false,
  exchangecid: null,
  feefier: null,
};

// Typechecking props for the Bill
TokenOverview.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  minBalance: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  receiver: PropTypes.string.isRequired,
  fee: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  exchangeMinAmount: PropTypes.string.isRequired,
  exchangeable: PropTypes.bool,
  exchangecid: PropTypes.string,
  feefier: PropTypes.string,
};

export default TokenOverview;
