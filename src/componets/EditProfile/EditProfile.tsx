import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./EditProfile.css";
import { useState } from "react";
import { editProfile } from "@/api/editProfile.api";
import { Gender } from "@/types/common_types";
import SkillChips from "../SelectChips/SelectChips";
const EditProfile = () => {
  const [gender, setGender] = useState<Gender | undefined>(undefined);
  const [photUrl, setPhotUrl] = useState<string | undefined>(undefined);
  const [about, setAbout] = useState<string | undefined>(undefined);
  const [skills, setSkills] = useState<Array<string> | undefined>(undefined);

  const handleEdit = async () => {
    try {
      const editData = {gender,photUrl,about,skills}
      await editProfile(editData);
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <>
      <Box className="edit-profile-container-outer">
        <Box className="edit-profile-container-inner">
          <Typography variant="h3" className="edit-profile">
            Edit Profile
          </Typography>
          <Box className="edit-profile-container">
            <FormControl variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select
                className="edit-gender"
                label="Gender"
                value={gender}
                onChange={
                  (e) => {
                    return setGender(e.target.value as Gender);
                  }
                  /*setGender accepts onlu undefined and Gender*/
                  /*e.target.value is a string */
                  /*using "as" we are saying e.target.value is always of type "Gender" */
                }
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"others"}>Others</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="edit-photourl"
              label="Photo Url"
              variant="outlined"
              value={photUrl}
              onChange={(e) => setPhotUrl(e.target.value)}
            />
            <TextField
              className="edit-about"
              label="About"
              variant="outlined"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            {/* <TextField
              className="edit-skills"
              label="Skills"
              variant="outlined"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            /> */}
            <SkillChips/>
            <Button variant="contained" onClick={handleEdit}>
              Save Edit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditProfile;
