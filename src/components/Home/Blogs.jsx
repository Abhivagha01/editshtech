import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import blog1 from "../../assets/blogs/blog1.png";
import { useTheme } from "@emotion/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Titleanimation } from "../../global/Titleanimation";

const blogData = [
  {
    id: 1,
    imgSrc: blog1,
    category: "React js",
    date: "05/07/2027",
    title: "JavaScript Debugging Made Easy: Tools and Techniques",
    description:
      "JavaScript tools supercharge development! From code editors to frameworks, they streamline tasks, improve quality, and boost efficiency.",
  },
  {
    id: 2,
    imgSrc: blog1,
    category: "Node js",
    date: "06/07/2027",
    title: "Understanding Asynchronous Programming in Node.js",
    description:
      "Learn the intricacies of asynchronous programming in Node.js and how it can help you build scalable and high-performance applications.",
  },
  {
    id: 3,
    imgSrc: blog1,
    category: "Vue js",
    date: "07/07/2027",
    title: "Vue.js Best Practices for Large-Scale Applications",
    description:
      "Explore best practices for building and maintaining large-scale applications using Vue.js to ensure maintainability and performance.",
  },
];

function Blogs() {
  const theme = useTheme();

  return (
    <>
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
            {blogData.map((blog) => (
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
                    <img src={blog.imgSrc} alt="blog-image" />
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
                        {blog.category}
                      </Button>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: theme.palette.secondary.main,
                        }}
                      >
                        {blog.date}
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
                      {blog.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: "14px",
                        fontWeight: "400",
                        py: 1,
                      }}
                    >
                      {blog.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      endIcon={
                        <ArrowForwardIcon
                          sx={{
                            color: theme.palette.secondary.main,
                          }}
                        />
                      }
                      sx={{
                        color: theme.palette.black,
                        "&:hover": {
                          backgroundColor: theme.palette.white,
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Blogs;
