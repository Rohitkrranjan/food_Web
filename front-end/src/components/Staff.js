import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import {MenuData} from "./MenuData";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const Staff = () => {
  
   return(
    <div>
        <h1>Menu List</h1>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuData.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="body2">{menu.price}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Menu/>
    </div>
   )
};

export default Staff;
