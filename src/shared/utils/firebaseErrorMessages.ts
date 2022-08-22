interface Props {
  error: any;
  defaultMessage?: string;
  errorOrigin: "firebaseLib" | "firebaseAPI";
}

export function firebaseErrorMessages({
  error,
  errorOrigin,
  defaultMessage,
}: Props) {
  let message: string | undefined = defaultMessage;

  if (errorOrigin === "firebaseLib") {
    if (error?.code === "auth/too-many-requests") {
      message =
        "O limite de tentativas foi atingido, tente novamente mais tarde.";
    } //
    else if (
      [
        "auth/invalid-email",
        "auth/user-not-found",
        "auth/wrong-password",
      ].includes(error?.code)
    ) {
      message = "Email ou senha incorretos";
    } //
    else if (error?.code === "auth/invalid-verification-code") {
      message = "Código de verificação inválido";
    } //
    else if (error?.code === "auth/provider-already-linked") {
      message = "Conta já associada a um número de telefone";
    } //
    else if (error?.code === "auth/credential-already-in-use") {
      message = "Este número de telefone já está em uso";
    } //
    else if (error?.code === "auth/invalid-phone-number") {
      message = "Número de telefone inválido";
    }
  } //
  else if (errorOrigin === "firebaseAPI") {
    if (error.includes("TOO_MANY_ATTEMPTS_TRY_LATER")) {
      message =
        "O limite de tentativas foi atingido, tente novamente mais tarde.";
    } //
    else if (
      error.includes("EMAIL_NOT_FOUND") ||
      error.includes("INVALID_PASSWORD") ||
      error.includes("INVALID_EMAIL")
    ) {
      message = "Email ou senha incorretos";
    } //
  }

  return message;
}
