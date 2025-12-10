export const USER_ERRORS = {
  EMAIL_INVALID: 'Please enter a valid email address',
  EMAIL_TOO_LONG: 'Email must be less than 255 characters',

  NAME_TOO_LONG: 'Name must be less than 64 characters',

  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  PASSWORD_TOO_LONG: 'Password must be less than 129 characters',
} as const;
