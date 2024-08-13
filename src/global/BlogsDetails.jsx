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
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import Pagetitle from "./Pagetitle";
import { Formik, Field, Form } from "formik";
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
          `https://editsh-back.onrender.com/api/blogs/${id}`
        );
        setBlog(response?.data?.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://editsh-back.onrender.com/api/comment/${id}`
        );

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
      await axios.post(
        `https://editsh-back.onrender.com/api/comment/add`,
        payload
      );
      resetForm();
      const response = await axios.get(
        `https://editsh-back.onrender.com/api/comment/${id}`
      );
      setComments(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Pagetitle
        title="Blogs"
        description="We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses."
      />
      <Container>
        <Grid container sx={{ py: { sm: 5, lg: 6 } }}>
          <Grid item xs={12}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  color: theme.palette.lightwhite,
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                {blog?.blogTitle}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: { sm: 2, lg: 4 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    backgroundColor: theme.palette.black,
                    color: theme.palette.white,
                    display: "inline-block",
                    lineHeight: "24px",
                    p: 1,
                    borderRadius: "5px",
                  }}
                >
                  {blog?.technology}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <img
                      src={blog?.authorImage}
                      alt="author"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: theme.palette.black,
                      }}
                    >
                      {blog?.authorName}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  borderRadius: 5,
                  boxShadow: 2,
                  p: 1,
                }}
              >
                <img
                  src={blog?.blogImage}
                  alt="blog"
                  style={{
                    width: "100%",
                    height: "450px",
                    borderRadius: 8,
                  }}
                />
              </Box>

              <Typography variant="body1" sx={{ mt: 2 }}>
                {blog?.blogDescription}
              </Typography>

              <div
                dangerouslySetInnerHTML={{ __html: blog?.otherDetails }}
                style={{ marginTop: 20 }}
              />

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Add Comment:
                </Typography>

                <Box sx={{ my: 2 }}>
                  <Formik
                    initialValues={{ name: "", comment: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleCommentSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Box sx={{ mb: 2 }}>
                          <Field
                            as={TextField}
                            name="name"
                            label="Name"
                            fullWidth
                            required
                            variant="filled"
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
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
                            error={touched.comment && Boolean(errors.comment)}
                            helperText={touched.comment && errors.comment}
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
                          variant="outlined"
                          sx={{
                            width: "130px",
                            borderRadius: 5,
                            borderColor: theme.palette.grey[500],
                            color: theme.palette.grey[500],
                            "&:hover": {
                              backgroundColor: theme.palette.grey[800],
                              color: theme.palette.common.white,
                            },
                          }}
                        >
                          Submit
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "18px",
                    my: 2,
                  }}
                >
                  Comments:
                </Typography>
                <Grid container row spacing={3} justifyContent="center">
                  {comments?.length ? (
                    comments.map((comment) => (
                      <Grid item xs={12} sm={6} md={6} lg={4} key={comment._id}>
                        <Box
                          sx={{
                            mb: 2,
                            p: 3,
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", fontSize: "18px", mb: 2 }}
                          >
                            {comment?.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            {comment?.comment}
                          </Typography>
                        </Box>
                      </Grid>
                    ))
                  ) : (
                    <Typography variant="body1">
                      No comments were found
                    </Typography>
                  )}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BlogsDetails;
