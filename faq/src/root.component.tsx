import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Banner from "./components/UI/Banner/Banner";
import "./faq-component.css";

export default function Root(): JSX.Element {
  
  return (
    <>
      <Banner />
      <div className="Container">
        <TableContainer>
          <Table sx={{ maxWidth: 950 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">FAQ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Where are you located?
                </TableCell>
                <TableCell align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  How to make a quote?
                </TableCell>
                <TableCell align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  When was founded?
                </TableCell>
                <TableCell align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Where are the headquarters?
                </TableCell>
                <TableCell align="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
