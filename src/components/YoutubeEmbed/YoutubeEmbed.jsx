import React from "react";
import { useMediaQuery } from "@mui/material";
import theme from "../../styles/theme";

const YoutubeEmbed = ({ embedId }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height={isMobile ? "204px" : "665"}
        src="https://www.youtube.com/embed/0Eucpoysz8M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
