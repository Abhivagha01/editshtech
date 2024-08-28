import React from "react";
import Pagetitle from "../global/Pagetitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useBlogs } from "../Context/BlogContext";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

function Blog() {
  const { blogs } = useBlogs();
  const theme = useTheme();
  const [openBlogId, setOpenBlogId] = React.useState(null);

  const handleReadMoreClick = (id) => {
    setOpenBlogId(openBlogId === id ? null : id);
  };

  return (
    <>
      <Pagetitle
        title={`Blogs`}
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Container>
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
                  boxShadow: 3,
                  p: 2,
                  borderBottom: `5px solid ${theme.palette.secondary.main}`,
                  borderRadius: "5px",
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  marginBottom: 2,
                }}
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <Link to={`/blogs/${blog._id}`}>
                  <Box
                    onClick={() => handleReadMoreClick(blog._id)}
                    sx={{
                      color: theme.palette.black,
                      "&:hover": {
                        backgroundColor: theme.palette.white,
                      },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <img
                        src={blog.blogImage}
                        alt="blog-image"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "5px",
                        }}
                      />
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
                        <Box
                          sx={{
                            backgroundColor: theme.palette.secondary.main,
                            color: theme.palette.white,
                            p: "4px",
                            borderRadius: "5px",
                            fontSize: "14px",
                          }}
                        >
                          {blog.technology}
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: theme.palette.secondary.main,
                            fontSize: "14px",
                          }}
                        >
                          {new Date(blog.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                          })}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: theme.palette.lightwhite,
                          fontSize: "14px",
                          py: 1,
                          fontWeight: "600",
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
                  </Box>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Blog;
