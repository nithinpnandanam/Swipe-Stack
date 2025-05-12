import { FeedUser } from "@/types/common_types";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./UserCard.css";
import { Box, Button } from "@mui/material";
const UserCard: FC<FeedUser> = ({ firstName, emailId, photUrl, about }) => {
  return (
    <Card className="user-card-container"  >
      
      <Box className='user-card'> {/*CardActionArea was used first instead of Box*/}
        <CardMedia
          component="img"
          image={photUrl}
          alt={`${firstName}'s Image`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {firstName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {about}
          </Typography>
          
          <Box className="status-btn-container">
            <Button variant="contained" className="ignore-btn">
              Ignore
            </Button>
            <Button variant="contained" className="interest-btn">
              Interested
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default UserCard;


// Breakdown

// <CardActionArea>
// This makes the entire card clickable (e.g., for navigation, opening a detail view).
// It wraps content that should respond to a click/touch as a whole.
// If you don’t need the card to act like a button, you can replace this with a Box or div.

// CardMedia
// component="img"
    // Tells CardMedia to render as an <img> HTML tag.
    // Without this, it defaults to a div with background image styling.
// image={photUrl}:
    // It gets applied to the src of the underlying <img>.

// gutterBottom
    // Adds margin-bottom below the text for spacing.
    // Commonly used to separate headings from body text.

// variant="body2" :  Smaller body text style.
// sx={{ color: "text.secondary" }}: Uses the theme's secondary text color, applied inline using MUI's sx prop