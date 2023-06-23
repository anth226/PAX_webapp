import {
  Box,
  Button,
  CardMedia,
  FormControl,
  ImageList,
  ImageListItem,
  MenuItem,
  Select,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { QuestionAnswerInStyle, showEmailWithIcon, verificationCode } from "./questionAnswerStyle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function QuestionAnswer() {
  const [age, setAge] = useState("10");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ ...QuestionAnswerInStyle } as SxProps}>
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
            <Box className="headerWrapper" sx={{color: "#2e2e2e"}}>
              <h3 style={{marginBottom: '15px'}}>Account recovery</h3>
              <p>This helps show that this account really belongs to <br/> you</p>
            </Box>

            <Box sx={{ ...showEmailWithIcon, borderRadius: '16px', pt: '4px', mx: '22%' }} >
              <Box>
                <AccountCircleIcon />
              </Box>
              <Box sx={{ mt: '1px', mx: '5px'}}>
                mav2287@aol.com
              </Box>
              <Box>
                <ExpandMoreIcon />
              </Box>
            </Box>


            <img
              src={'/assets/AccountNotFound.jpg'}
              alt={'recover message'}
              loading="lazy"
            />

            <Box sx={verificationCode}>
              <Typography sx={{fontWeight: 'bold', fontSize: '16px'}}>Get a verification code</Typography>
            </Box>

            <Box sx={{ padding: "20px 30px", color: "#2e2e2e"}}>
              <Typography sx={{ fontSize: '14px'}}>
                Google will send a verification code to (...)..._..42.
                <br/>Standard rates apply
              </Typography>
            </Box>

            <Box className="bottomItem" sx={{p: "20px 30px"}}>
              <Box sx={{ width: '50%'}}>
                <Link href="#">I don't have my phone</Link>
              </Box>
              <Box sx={{ width: '50%', textAlign: 'right'}}>
              <Button  style={{textTransform: 'none'}}  variant="contained">Send</Button>
              </Box>
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
            <Box className="FormFooterRightSide" sx={{color: "#2e2e2e"}}>
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

export default QuestionAnswer;
