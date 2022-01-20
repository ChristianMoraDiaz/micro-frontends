import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  Button,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
import { Avatar, CardHeader, CardMedia, IconButton } from "material-ui";
export default function Root(): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [apiRes, setApiRes] = useState([]);
  const [cardId, setCardId] = useState("");

  return <div className="OrderList">Hola</div>;
}
