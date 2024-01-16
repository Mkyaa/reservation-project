import axios from "axios";

//sigunp
export const signUp = async (name, surname, email, password, kvkk) => {
  const { data } = await axios.post(process.env.NEXT_PUBLIC_API_AUTH_URL, {
    name,
    surname,
    email,
    password,
    kvkk
  });
  return data;
};

//login
export const signIn = async (values) => {
  const allUser = await axios.get(process.env.NEXT_PUBLIC_API_AUTH_URL);
    const user = allUser.data.find((user) =>  user.name.email === values.email && user.name.password === values.password);
    if (user) {
        const response = {
            status: 200,
            message: "Giriş Başarılı",
            data: {
                name: user.name.name,
                surname: user.name.surname,
                email: user.name.email,
                actions: user.name.actions,
            }
        };
      return response;
    }
    const response = {
        status: 404,
        message: "Kullanıcı Bulunamadı, Lütfen E-Posta Adresinizi ve Şifrenizi Kontrol Ediniz",
        data: null,
    };
    return response;
};
