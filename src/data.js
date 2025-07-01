



export const LoginMessage = [
  {
    title: "Войти",
    message: "Добро пожаловать, рады видеть вас снова 👋"
  }
];

export const RegisterMessage = [
  {
    title: "Регистрация",
    message: "Зарегистрируйся и получи доступ к аналитике аккаунтов.",
  }
];

export const ForgotMessage = [
  {
    image: '/Vector.png',
    title: 'Восстановить пароль',
    message: 'Введите e-mail, на который регестрировались ранее',
  }
]

export const HeaderItems = [
  {
    pagetitle: "Вход в систему",
    leftItem: "LIVEDUNE",
    register: "уже есть аккаунт?",
    enter: "Войти",
    path: "/"
  },
  {
    pagetitle: "Регистрация",
    leftItem: "LIVEDUNE",
    register: "у вас нет аккаунта?",
    enter: "Регистрация",
    path: "/registration"
  },
  {
    pagetitle: "Восстановление пароля",
    leftItem: "LIVEDUNE",
    register: "",
    enter: "",
    path: "/forgotPassword"
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
  },
  forgotPassword: {
    fields: ['email'],
    buttonText: 'Отправить',
    successMessage: 'Письмо с восстановлением отправлено!',
  },
};