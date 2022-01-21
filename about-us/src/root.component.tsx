import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  Button,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
import "./about-us-component.css";
import { aboutUsProps } from "../interfaces/aboutUsInterface";
import { aboutUsMock } from "../mock/aboutUsMock/aboutUsMock";

export default function Root(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [apiRes, setApiRes] = useState([]);
  const [cardId, setCardId] = useState("");

  return (
    <div className="Container">
      {aboutUsMock.map((item: aboutUsProps) => {
        return (
          <div key={item.id}>
            <Card
              sx={{ minWidth: 275 }}
              className="Card"
              style={{ background: "rgb(32, 38, 45)", color: "white" }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="rgba(255, 255, 255, 0.7)">
                  {item.description}
                </Typography>
                <Typography variant="body2">
                  Area:
                  <br />
                  {item.area}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    setIsCollapsed(!isCollapsed);
                    setCardId(item.id);
                  }}
                >
                  Details
                </Button>
              </CardActions>
            </Card>
            <Collapse
              in={isCollapsed && cardId === item.id}
              timeout="auto"
              unmountOnExit
              sx={{ minWidth: 275 }}
              className="CardCollapse"
            >
              <CardContent>
                <Typography variant="body2" component="div">
                  {item.details}
                </Typography>
              </CardContent>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
}
