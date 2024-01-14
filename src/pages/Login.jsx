import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string, number, date, InferType } from "yup";
import { login } from "../service/authanticationApiCall";

const Login = () => {
  const loginSchema = object({
    email: string()
      .email("Geçerli bir email girilmelidir")
      .required("Email Girişi Zorunludur!"),
    password: string()
      .required("Şifre girmek zorunludur")
      .min(8, "Şifre en az 8 karakter içermelidir")
      .max(16, "Şifre en fazla 16 karakter içerebilir")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir")
      .matches(/[a-z]/, "Şifre en az bir küçük karakter içermelidir")
      .matches(/[A-Z]/, "Şifre en az bir büyük karakter içermelidir")
      .matches(/[@$!%*?&]+/, "Şifre en az bir özel karakter içermelidir"),
  });
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "black",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={2} color="black">
            LOGIN
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              actions.setSubmitting(false);
              //+ Login(Post) request
              login(values);
            }}
          >
            {({ handleChange, values, touched, errors, handleBlur }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                    onBlur={handleBlur}
                  />
                  <TextField
                    label="password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    helperText={errors.password}
                    error={touched.password && Boolean(errors.password)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button type="submit" variant="contained" size="large">
                    LOGIN
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Don't you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
