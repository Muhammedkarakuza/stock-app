import { Form } from "formik";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { object, string } from "yup";

export const registerSchema = object({
  username: string()
    .max(20, "Kullanıcı adı 20 karakterden az olmalıdır")
    .required("Kullanıcı adı zorunludur"),
  firstName: string()
    .max(20, "İsim 20 karekterden az olmalıdır")
    .required("İsim Girmek Zorunludur!"),
  lastName: string()
    .max(30, "Soyisim 30 karakterden az olmalıdır")
    .required("Soyisim girmek zorunludur"),
  email: string()
    .email("Lütfen geçerli bir mail adresi giriniz")
    .required("Email girmek zorunludur"),
  password: string()
    .required("Şifre girmek zorunludur")
    .min(8, "Şifre en az 8 karakterden oluşmalıdır")
    .max(16, "Şifre en fazla 16 karakter içermelidir")
    .matches(/\d+/, "Şifre en az bir sayı içermelidir")
    .matches(/[a-z]/, "Şifre en az bir adet küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre en az bir adet büyük harf içermelidir")
    .matches(/[!/[@$%*?&]/, "Şifre en az bir adet özel karakter içermelidir"),
});

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="User name"
          name="username"
          id="userName"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={errors.username}
        />

        <TextField
          label="First Name"
          name="firstName"
          id="firstName"
          type="text"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={errors.lastName}
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={errors.password}
        />
        <Button type="submit" size="large" variant="contained">
          REGISTER
        </Button>
      </Box>
    </Form>
  );
};
export default RegisterForm;
