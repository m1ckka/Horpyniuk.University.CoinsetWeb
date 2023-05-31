import React from "react";
import {Instagram} from "@mui/icons-material";
import {Telegram} from "@mui/icons-material";
import {GitHub} from "@mui/icons-material";


function Footer() {
    return (
        <div className="footer">
        <div className="socialMedia">
            <Instagram /> <Telegram /> <GitHub />
        </div>
        <p> &copy; 2023 coinset.com</p>
    </div>
    );
}

export default Footer;