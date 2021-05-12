import React from "react";
import ReactPlayer from "react-player/lazy";
import classes from "./VideoPlayer.module.css";



export default function VideoPlayerView({ component }) {
    return (
        <div className={classes.playerWrapper}>

            <ReactPlayer
                className={classes.reactPlayer}
                url={component.src}
                controls={true}
                width='90%'
                style={{ borderRadius: "10px", overflow: "hidden" }}
            />
        </div>
    )
}