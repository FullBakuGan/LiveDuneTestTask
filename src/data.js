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
    title: 'Восстановить пароль',
    message: 'Введите e-mail, на который регестрировались ранее',
    image: 'Vector.png',
  }
]

export const ConfirmEmailMessage = [
  {
    title: "Подтвердите ваш Email",
    message: "Игорь, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа."
  }
]

export const NoEmailMessage = [
  {
    title: "Мне не пришло письмо",
    message: 'Письмо может прийти с задержкой в 5-10 минут. Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку support@livedune.ru и мы активируем ваш аккаунт.'
  }
]

export const SendMessageText = [
  {
    image: 'Emoji.png',
    title: "Письмо отправлено",
    message: "На указанный вами e-mail было отправлено письмо для смены пароля"
  }
]

export const SocialItemsImages = [
  {
    facebook: 'facebook-logo.svg',
    google: 'google-logo.png'
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
  },
  {
    pagetitle: "Не пришло письмо",
    leftItem: "LIVEDUNE",
    register: "",
    enter: "Выйти",
    path: "/noEmail"
  },
  {
    pagetitle: "Письмо отправлено",
    leftItem: "LIVEDUNE",
    register: "",
    enter: "",
    path: "/sendMessage"
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
    correctEmail: 'example@example.com',
    
  },
  confirmEmail: {
    buttonText: "Перейти к почте",
    successMessage: "Письмо отправлено!",
    
  },
  isNoEmail: {
    fields: ["email"],
    buttonText: 'Отправить заново',
    successMessage: "Письмо отправлено повторно, проверьте ещё раз почту!",
    correctEmail: 'example@example.com'
  },
  sendMessage: {
    buttonText: 'Вернуться на главную',
  }
};