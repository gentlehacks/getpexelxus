
const alertMessage = `BREVO KEY:", ${process.env.BREVO_API_KEY ? "✅ Loaded" : 'Error ❌'} `;

console.log(alertMessage);
alert(alertMessage);