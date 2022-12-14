const reggexutil = {
  password: '^(?=.*[A-Z])(?=.*[!@#$&*.])(?=.*[0-9])(?=.*[a-z]).{8,}$',
  email: '[A-Za-z0-9-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  phone: '^(+d{1,2}s)?(?d{3})?[s.-]?d{3}[s.-]?d{4}$',
  name: '^[a-zA-Zs]+$',
  number: '^[0-9]+$',
  postalCode: '[1-9][0-9]{3}-[0-9]{3}$'
}

export default reggexutil
