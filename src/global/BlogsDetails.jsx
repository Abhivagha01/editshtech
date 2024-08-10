import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import axios from "axios";
import Pagetitle from "./Pagetitle";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  comment: Yup.string().required("Comment is required"),
});

function BlogsDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/blogs/${id}`
        );
        setBlog(response?.data?.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/comment/${id}`
        );
        console.log(response);
        setComments(response?.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlog();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (values, { resetForm }) => {
    const payload = {
      ...values,
      blog: id,
    };
    try {
      await axios.post(`http://localhost:8000/api/comment/add`, payload);
      resetForm();
      const response = await axios.get(
        `http://localhost:8000/api/comment/${id}`
      );
      console.log(response);
      resetForm();
      setComments(response?.data?.data); // Update comments list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Pagetitle
        title={`Blogs`}
        description={`We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Container>
        <Grid container row sx={{ py: { sm: 5, lg: 6 } }}>
          <Grid item xs={12} md={12} lg={12}>
            <Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: theme.palette.lightwhite,
                    fontWeight: "600",
                  }}
                >
                  {blog?.blogTitle}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: {
                    sm: 2,
                    lg: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    backgroundColor: theme.palette.lightwhite,
                    color: theme.palette.white,
                    display: "inline-block",
                    lineHeight: "24px",
                    p: 1,
                    borderRadius: "5px",
                  }}
                >
                  {blog?.technology}
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <img
                        src={blog?.authorImage}
                        alt="author"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          mt: 2,
                          fontSize: "20px",
                          ml: 2,
                          fontWeight: "bold",
                          color: theme.palette.black,
                        }}
                      >
                        {blog?.authorName}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    boxShadow: 3,
                    borderRadius: 5,
                  }}
                >
                  <img
                    src={blog?.blogImage}
                    alt="blog-image"
                    style={{
                      width: "100%",
                      height: "500px",
                    }}
                  />
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {blog?.blogDescription}
                </Typography>
              </Box>
              <Box>
                <div
                  dangerouslySetInnerHTML={{ __html: blog?.otherDetails }}
                  style={{ marginTop: 20 }}
                />
              </Box>

              {/* Comment Form */}
              <Box sx={{ mt: 4 }}>
                <Typography
                 variant="h6"
                 sx={{
                  fontWeight: "bold",
                 }}>Add Comment :
                </Typography>
                <Formik
                  initialValues={{ name: "", comment: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleCommentSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Box sx={{ mb: 2 }}>
                        <Field
                          as={TextField}
                          name="name"
                          label="Name"
                          fullWidth
                          required
                          variant="filled"
                          error={Boolean(<ErrorMessage name="name" />)}
                          InputLabelProps={{
                            style: { color: theme.palette.secondary.main },
                            shrink: true,
                          }}
                          InputProps={{
                            style: { color: theme.palette.secondary.main },
                            placeholder: "Name",
                          }}
                        />
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Field
                          as={TextField}
                          name="comment"
                          label="Comment"
                          required
                          fullWidth
                          variant="filled"
                          multiline
                          rows={4}
                          error={Boolean(<ErrorMessage name="comment" />)}
                          InputLabelProps={{
                            style: { color: theme.palette.secondary.main },
                            shrink: true,
                          }}
                          InputProps={{
                            style: { color: theme.palette.secondary.main },
                            placeholder: "Your Comment",
                          }}
                        />
                      </Box>
                      <Button
                        type="submit"
                        variant="filled"
                        color="primary"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>

              {/* Comments List */}
              <Box sx={{ mt: 4 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize:'18px',
                    my: 2,
                  }}
                >
                  Comments:-
                </Typography>
                {comments?.length ? (
                  comments.map((comment) => (
                    <Box
                      key={comment._id}
                      sx={{
                        mb: 2,
                        p: 3,
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="body1"
                       sx={{ fontWeight: "bold",fontSize:'18px',mb:2 }}>
                        {comment?.name}
                      </Typography>
                      <Typography variant="body2"
                      sx={{
                        fontSize:'14px',
                        fontWeight:'500'
                      }}>
                        {comment?.comment}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body1">
                    No comments were found
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BlogsDetails;
