export const validateNigerianPhone = (phone: string) => {
  const re = /^(?:\+234|0) [789]\d{9}$/; 
  
  return re.test(phone.replace(/\s+/g,''));
};