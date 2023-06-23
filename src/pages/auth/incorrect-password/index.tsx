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
import { incorrectPasswordStyle } from "./incorrect-passwordStyle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function incorrectPassword() {
  const [age, setAge] = useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ ...incorrectPasswordStyle } as SxProps}>
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
              <h3>Hi James</h3>
            </Box>
            <Box className="selectEmail">
              <Box className="innerSelectEmail">
                <select className="selectEmailArea">
                  <option>admin@gmail.com</option>
                  <option>admin@gmail.com</option>
                </select>
                <span><AccountCircleIcon/></span>
              </Box>              
            </Box>
            
            <Box className="textWrapper">
              <p>To continue, firswt verify it's you</p>
            </Box>
            <TextField
              className="textField"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Your Password"
            />
            <span className="errorMessage">Wrong password.Try again or click Forgot password to reset it.</span>
            <Box className="bottomItem">
              <Link href="#">Forgot pasword?</Link>
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

export default incorrectPassword;
