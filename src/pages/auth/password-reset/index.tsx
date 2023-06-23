import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { passwordResetStyle } from "./passwordResetStyle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function passwordReset() {
  const [age, setAge] = useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ ...passwordResetStyle } as SxProps}>
      <div className="boxWrapper">
        <Box className="innerBoxWrapper">
          <Box className="formWrapper">
            <Box className="logoWrapper">
              <Image
                src="/assets/logo.svg"
                width={100}
                height={50}
                alt="logo"
              />
            </Box>
            <Box className="headerWrapper">
              <h3>Account Recovery</h3>
              <p>This helps show that this account really belongs to you</p>
            </Box>
            <Box className="selectEmail">
              <Box className="innerSelectEmail">
                <select className="selectEmailArea">
                  <option>alamin@gmail.com</option>
                  <option>alamin@gmail.com</option>
                </select>
                <span><AccountCircleIcon/></span>
              </Box>              
            </Box>
            
            <Box className="textWrapper">
              <h5>Create a strong password</h5>
              <p>Create a new strong password that you don't use for other websites</p>
            </Box>
            <TextField
              className="textField"
              id="outlined-basic"
              variant="outlined"
              placeholder="Create Password"
            />
            <Box className="confirmedPassword">
            <TextField
              className="textField"
              id="outlined-basic"
              variant="outlined"
              placeholder="Confirm Password"
            />
            <span>At least 8 character</span>
            </Box>
            <Box className="bottomItem">
              <Button variant="contained">Next</Button>
            </Box>
          </Box>
          <Box className="FormFooter">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
              <Select
                id="demo-simple-select"
                disableUnderline
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>English (United States)</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Box className="FormFooterRightSide">
              <Link className="helpLink" href="#">
                Help
              </Link>
              <Link className="privacyLink" href="#">
                Privacy
              </Link>
              <Link href="#">Terms</Link>
            </Box>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default passwordReset;
