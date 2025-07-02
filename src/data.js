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

export const ConfirmEmailMessage = [
  {
    title: "Подтвердите ваш Email",
    message: "Игорь, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа."
  }
]

export const HeaderItems = [
  {
    pagetitle: "Вход в систему",
    leftItem: "LIVEDUNE",
    register: "уже есть аккаунт?",
    enter: "Регистрация",
    path: "/"
  },
  {
    pagetitle: "Регистрация",
    leftItem: "LIVEDUNE",
    register: "у вас нет аккаунта?",
    enter: "Вход",
    path: "/registration"
  },
  {
    pagetitle: "Восстановление пароля",
    leftItem: "LIVEDUNE",
    register: "",
    enter: "",
    path: "/forgotPassword"
  },
  {
    pagetitle: "Подтверждение почты",
    leftItem: "LIVEDUNE",
    register: "",
    enter: "Выйти",
    path: "/confirmEmail"
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
    buttonText: 'Восстановить пароль',
    successMessage: 'Письмо с восстановлением отправлено!',
  },
  confirmEmail: {
    buttonText: "Перейти к почте",
    successMessage: "Письмо отправлено!"
  }
};