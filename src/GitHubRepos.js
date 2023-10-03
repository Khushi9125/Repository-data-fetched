import React, { Fragment, useState } from "react";
import { Grid, AppBar, Box, Card, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { grey } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import LaunchSharpIcon from "@mui/icons-material/LaunchSharp";
import LinkIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DescriptionIcon from "@mui/icons-material/Description";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LanguageIcon from "@mui/icons-material/Language";
//import Typography from '@mui/material/Typography';
import "./App.css";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState([]);
  const [info, setInfo] = useState(false);

  // Function to fetch repo list from API
  const fetchRepos = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/orgs/AiyoLabsBlr/repos"
      );
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Repo click
  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
    setInfo(true);
  };

  const renderRepoList = () => {
    return (
      <div>
        <div
          style={{
            height: "120px",
            width: "200px",
            marginTop: "6%",
            backgroundColor: "#26001B",
            marginLeft: "32%",
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: "22px",
            color: "white",
          }}
        >
          <center>
            <br></br>Fetched Repositories
          </center>
          <div
            style={{
              height: "50px",
              width: "400px",
              marginLeft: "-115px",
              marginTop: "13px",
              backgroundColor: "black",
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: "17px",
              color: "white",
            }}
          >
            <center>
              <br></br>Please click on Repository to see more information
            </center>
          </div>
        </div>
        <div
          style={{
            height: "130px",
            width: "350px",
            marginTop: "25px",
            marginLeft: "72px",
            backgroundColor: "#DFF6FF",
            fontFamily: '"Times New Roman", Times, serif',
            color: "#0B2447",
          }}
        >
          <br></br>
          <center>
            {repos.map((repo) => {
              return (
                <div key={repo.id} onClick={() => handleRepoClick(repo)}>
                  <LaunchSharpIcon /> {repo.name}
                </div>
              );
            })}
          </center>
        </div>
      </div>
    );
  };

  //Repo Info
  const renderRepoInfo = () => {
    if (info) {
      if (selectedRepo) {
        return (
          <Grid container alignItems="center" spacing={1}>
            <Card sx={{ maxWidth: 500, marginTop: 2, marginLeft: 59 ,display: "flex"}}>
              <div
                style={{
                  backgroundColor: "#2D033B",
                  fontFamily: '"Times New Roman", Times, serif',
                  color: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "black",
                    padding: "6px",
                    color: "white",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: grey[500] }} aria-label="repo">
                       T 
                      </Avatar>
                    }
                    title={selectedRepo.name}
                  />
                </div>

                <CardContent>
                  <div
                    style={{
                      fontFamily: '"Lucida Console", "Courier New", monospace',
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F5E8E4",
                        padding: "6px",
                        color: "#040303",
                      }}
                    >
                      <LinkIcon fontSize="large" />
                      <a
                        href={selectedRepo.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Typography
                          variant="body6"
                          style={{ marginLeft: "12px" }}
                        >
                          {selectedRepo.name}
                        </Typography>
                      </a>
                    </div>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F5E8E4",
                        padding: "6px",
                        color: "#040303",
                      }}
                    >
                      <DescriptionIcon fontSize="large" />
                      <Typography
                        variant="body6"
                        style={{ marginLeft: "15px" }}
                      >
                        {selectedRepo.description}
                      </Typography>
                    </div>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F5E8E4",
                        padding: "6px",
                        color: "#040303",
                      }}
                    >
                      <LanguageIcon fontSize="large" />
                      <Typography
                        variant="body6"
                        style={{ marginLeft: "15px" }}
                      >
                        {selectedRepo.language}
                      </Typography>
                    </div>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F5E8E4",
                        padding: "6px",
                        color: "#040303",
                      }}
                    >
                      <VisibilityIcon fontSize="large" />
                      <Typography
                        variant="body6"
                        style={{ marginLeft: "15px" }}
                      >
                        {selectedRepo.watchers_count}
                      </Typography>
                    </div>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F5E8E4",
                        padding: "6px",
                        color: "#040303",
                      }}
                    >
                      <InfoIcon fontSize="large" />
                      <Typography
                        variant="body6"
                        style={{ marginLeft: "15px" }}
                      >
                        {selectedRepo.open_issues}
                      </Typography>
                    </div>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#F5E8E4",
                        padding: "6px",
                        color: "#040303",
                      }}
                    >
                      <RestaurantIcon fontSize="large" />
                      <Typography
                        variant="body6"
                        style={{ marginLeft: "12px" }}
                      >
                        {selectedRepo.forks}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
                {/* </div> */}
              </div>
            </Card>
          </Grid>
        );
      } else {
        return <p>We are sorry for this , please try again !!</p>;
      }
    }
  };
  return (
    <Fragment>
      <Grid container>
        <Grid item md={12} sx={{ marginLeft: "35%", marginBottom: 8 }}>
          <AppBar
            component={"nav"}
            sx={{ bgcolor: "black", marginLeft: "35%", marginBottom: 100 }}
          >
            <Toolbar>
              <Grid item>
                <IconButton
                  // size="large"
                  color="inherit"
                >
                  <GitHubIcon sx={{ width: 80, height: 80, my: 2 }} />
                </IconButton>
              </Grid>
              <Typography
                color={"white"}
                variant="h6"
                component={"div"}
                style={{ marginTop: "10px" }}
                sx={{ flexGrow: 1, my: 2 }}
              >
                <div
                  style={{
                    height: "40px",
                    width: "400px",
                    marginLeft: "32%",
                    marginBottom: 30,
                    marginTop: "2%",
                    fontFamily: "Georgia, serif",
                    fontSize: "50px",
                    color: "white",
                  }}
                >
                  <center>GITHUB</center>
                </div>
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: 1200,
          marginTop: -10,
          "&:hover": {
            backgroundColor: "526D82",
            opacity: [0.8, 0.9, 0.9],
          },
        }}
        className="backg"
      >
        <div className="btn" style={{ marginTop: "10%" }}>
          <button
            onClick={fetchRepos}
            sx={{ marginLeft: 20, marginTop: "50%"}}
          >
            <h1>Click here to fetch Repositories</h1>
          </button>
        </div>
        <div
          style={{
            height: "300px",
            width: "500px",
            backgroundColor: "#26001B",
            marginLeft: "32%",
            fontFamily: '"Times New Roman", Times, serif',
            color: "white",
          }}
        >
          <h2>{renderRepoList()}</h2>
        </div>
        <div>
          {info ? <h3>{renderRepoInfo()}</h3> : null}
        </div>
      </Box>
    </Fragment>
  );
};

export default GitHubRepos;
