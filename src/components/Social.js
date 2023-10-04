import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const socialItems = [
  { icon: GitHubIcon, url: "", name: "github" },
  { icon: TwitterIcon, url: "", name: "twitter" },
  { icon: LinkedInIcon, url: "", name: "linkedin" },
];

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon color="inherit" />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
