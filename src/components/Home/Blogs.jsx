// Blogs.js
import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Titleanimation } from "../../global/Titleanimation";
import { Link } from "react-router-dom";
import { useBlogs } from "../../Context/BlogContext";

function Blogs() {
  const theme = useTheme();
  const { blogs } = useBlogs();
  const [openBlogId, setOpenBlogId] = React.useState(null);

  const handleReadMoreClick = (id) => {
    setOpenBlogId(openBlogId === id ? null : id);
  };

  return (
    <Box sx={{ my: { sm: 2, lg: 8 } }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            mb: 4,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          <Titleanimation title={`Our Blogs`} />
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            py: {
              sm: 4,
              md: 8,
              lg: 10,
            },
          }}
        >
          {blogs.map((blog) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={blog.id}>
              <Box
                sx={{
                  boxShadow: 1,
                  p: 2,
                  borderBottom: `5px solid ${theme.palette.secondary.main}`,
                  borderRadius: "5px",
                }}
              >
                <Box>
                  <img src={blog.blogImage} alt="blog-image" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                  }}
                >
                  <Box>
                    <Button
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.main,
                      }}
                    >
                      {blog.technology}
                    </Button>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {new Date(blog.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: theme.palette.lightwhite,
                      fontSize: "18px",
                      fontWeight: "500",
                      py: 1,
                    }}
                  >
                    {blog.blogTitle}
                  </Typography>
                  {openBlogId === blog.id && (
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: "14px",
                        fontWeight: "400",
                        py: 1,
                      }}
                    >
                      {blog.blogDescription}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <Link to={`/blogs/${blog._id}`}>
                    <Button
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            color: theme.palette.secondary.main,
                          }}
                        />
                      }
                      onClick={() => handleReadMoreClick(blog._id)}
                      sx={{
                        color: theme.palette.black,
                        "&:hover": {
                          backgroundColor: theme.palette.white,
                        },
                      }}
                    >
                      {openBlogId === blog._id ? "Show Less" : "Read More"}
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Blogs;
