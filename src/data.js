export const LoginMessage = [
  {
    title: "Войти",
    message: "Добро пожаловать, рады видеть вас снова 👋"
  }
];

export const RegisterMessage = [
  {
    title: "Регистрация",
    message: "Зарегистрируйся и получи доступ к аналитике аккаунтов."
  }
];


export const HeaderItems = [
  {
    leftItem: "LIVEDUNE",
    register: "уже есть аккаунт?",
    enter: "Войти",
    path: "/"
  },
  {
    leftItem: "LIVEDUNE",
    register: "у вас нет аккаунта?",
    enter: "Регистрация",
    path: "/registration"
  }
];

export const FormConfigs = {
  login: {
    fields: ['email', 'password'],
    buttonText: 'Войти в аккаунт',
    successMessage: 'Авторизация успешна!',
    correctEmail: 'example@example.com',
    correctPassword: 'password2021',
  },
  registration: {
    fields: ['name', 'email', 'password', 'login'],
    buttonText: 'Создать аккаунт',
    successMessage: 'Регистрация успешна!',
  }
};