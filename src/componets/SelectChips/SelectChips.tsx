import React, { useState } from "react";
import { Box, Chip, TextField } from "@mui/material";
import './SelectChips.css'

const SkillChips = () => {
  const [skills, setSkills] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault(); // prevent form submit if inside a form
      if (!skills.includes(inputValue.trim())) {
        setSkills([...skills, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleDelete = (skillToDelete: string) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };

  return (
    <Box >
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Provide Your Skills"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Box className='chip-container'>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            onDelete={() => handleDelete(skill)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillChips;
