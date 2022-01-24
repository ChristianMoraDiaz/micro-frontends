import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { cardProps } from "../../../../interfaces/cardInterface";

export default function Cards({ Title, Img, Url }: cardProps): JSX.Element {
  return (
    <>
      <Card
        sx={{
          minWidth: "345px",
          margin: "50px 3% 10px 3%",
          background: "rgba(127, 126, 128, 0.4) ",
          border: "0.3px solid rgba(127, 126, 128, 0.4)"
        }}
      >
        <CardActionArea>
          <CardMedia component="img" height="140" image={Img} alt={Title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Title}
            </Typography>
          </CardContent>
          <CardActions>
            <Router>
              <Link to={Url}>
                <Button size="small">Ir al proyecto</Button>
              </Link>
            </Router>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}
