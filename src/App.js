import "./App.css";

//MATERIAL UI
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  CircularProgress,
  Fab,
  Paper,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";
import { Add, Mail, TextFields } from "@material-ui/icons";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//COMPONENTS
import PaperComponent from "./components/PaperComponent";
import Row from "./components/Row";

//THEMES
import themes from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(themes.dark)}>
      <Paper>
        <Row>
          <PaperComponent>
            <Button variant="outlined" color="inherit">
              Button
            </Button>
          </PaperComponent>
          <PaperComponent>
            <Button variant="outlined" color="primary">
              Button
            </Button>
          </PaperComponent>
          <PaperComponent>
            <Button variant="contained" color="secondary">
              Button
            </Button>
          </PaperComponent>
        </Row>
        <Row>
          <PaperComponent>
            <Checkbox checked />
          </PaperComponent>
          <PaperComponent>
            <Fab color="primary">
              <Add />
            </Fab>
          </PaperComponent>
          <PaperComponent>
            <Fab color="secondary" variant="extended">
              <TextFields />
            </Fab>
          </PaperComponent>
        </Row>
        <Row>
          <PaperComponent>
            <Switch checked />
          </PaperComponent>
          <PaperComponent>
            <TextField variant="outlined" />
          </PaperComponent>
          <PaperComponent>
            <CircularProgress />
          </PaperComponent>
        </Row>
        <Row>
          <PaperComponent>
            <CircularProgress color="secondary" />
          </PaperComponent>
          <PaperComponent>
            <Avatar>A</Avatar>
          </PaperComponent>
          <PaperComponent>
            <Badge badgeContent="4" color="primary">
              <Mail />
            </Badge>
          </PaperComponent>
        </Row>
        <Row>
          <PaperComponent>
            <Badge badgeContent="2" color="secondary">
              <Mail />
            </Badge>
          </PaperComponent>
          <PaperComponent>
            <Typography variant="h6">Content</Typography>
          </PaperComponent>
        </Row>
      </Paper>
    </MuiThemeProvider>
  );
}

export default App;
