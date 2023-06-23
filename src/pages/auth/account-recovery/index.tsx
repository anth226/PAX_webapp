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
import { accountRecoveryStyle } from "./accountRecoveryStyle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AccountRecovery() {
  const [age, setAge] = useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ ...accountRecoveryStyle } as SxProps}>
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
                  <option>zxrajib@gmail.com</option>
                  <option>zxrajib1@gmail.com</option>
                </select>
                <span><AccountCircleIcon/></span>
              </Box>              
            </Box>
            
            <Box className="textWrapper">
              <h5>Answer your security question</h5>
              <p>Highschool name?</p>
            </Box>
            <TextField
              className="textField"
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter your answer"
            />
            <Box className="bottomItem">
              <Link href="#">Try another way</Link>
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

export default AccountRecovery;
