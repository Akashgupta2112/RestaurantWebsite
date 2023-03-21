import React from "react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Layout from "../components/layout/Layout";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{my: 5, ml: 10, "& h4": {fontWeight: 'bold', mb: 2}}}>
        <Typography variant="h4">Contact My Resturant</Typography>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
      </Box>
      <Box sx={{m: 3, width: "600px", ml: 10, "@media (max-width: 600px)" : {
        width: "300px"
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                  bgcolor: 'black',
                  color:"wheat"
                }}
                align="center"
              >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><SupportAgentIcon sx={{color: "red", pt: 1}}/>1800-00-0000</TableCell>
              </TableRow>
              <TableRow>
              <TableCell><EmailIcon sx={{color: "skyblue", pt: 1}}/>help@myrest.com </TableCell>
              </TableRow>
              <TableRow>
              <TableCell><PhoneIcon sx={{color: "green", pt: 1}}/>521231213</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
