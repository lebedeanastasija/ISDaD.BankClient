export class FormValidationRegexp {
  public static NAME_REG_EXP = /^[А-Я]+[а-я]*(-[А-Я]+[а-я]+)*[^\s]+$/;
  public static PASSPORT_SERIES_REG_EXP = /^[A-Z]{2}$[^\s]+/g;
  public static PASSPORT_NUMBER_REG_EXP = /^[0-9]{7}$[^\s]+/g;
  public static PASSPORT_IDENTIFICATION_NUMBER_REG_EXP = /([0-9]|[A-Z]){14}[^\s]+/g;
  public static ADDRESS_REG_EXP = /([0-9]|[А-Я]|[а-я]|[,.]|-){1,255}[^\s]+/g;
  public static DATE_REG_EXP = /[0-9]{4,6}-[0-1][0-9]-[0-3][0-9]{10,12}[^\s]+/g;
  public static PHONE_NUMBER_REG_EXP = /\+\d{3,15}/g;
  public static EMAIL_REG_EXP = /[0-9a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+[^\s]+/g;
  public static FLOAT_NUMBER_REG_EXP = /[0-9]*\.?[0-9]*[^\s]+/g;
}
