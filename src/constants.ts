import { Modals } from "./types";

export const NAVIGATION_LINKS = [
  {
    text: "Авторизация",
    href: "/authorization",
    id: "navAuthorizationLink",
  },
  {
    text: "Регистрация",
    href: "/registration",
    id: "navRegistrationLink",
  },
  {
    text: "Профиль",
    href: "/profile",
    id: "navProfileLink",
  },
  {
    text: "Редактор профиля",
    href: "/profile-editor",
    id: "navProfileEditorLink",
  },
  {
    text: "Чат",
    href: "/chat",
    id: "navChatLink",
  },
  {
    text: "Ошибка 404",
    href: "/404",
    id: "nav404Link",
  },
  {
    text: "Ошибка 500",
    href: "/500",
    id: "nav500Link",
  },
];

export const DEFAULT_PATH = "/authorization";

export const ROUTE_LINKS = [
  "registrationLink",
  "authorizationLink",
  "profileEditorLink",
  "profileExitLink",
  "profileEditorExitLink",
  "navAuthorizationLink",
  "navRegistrationLink",
  "navProfileLink",
  "navProfileEditorLink",
  "navChatLink",
  "nav404Link",
  "nav500Link",
  "errorLink",
];

export const MODALS: { [key: string]: Modals } = {
  profileOpenPasswordModal: "password",
};

export const CLOSE_MODAL_IDS = ["profileModalCloseButton"];
