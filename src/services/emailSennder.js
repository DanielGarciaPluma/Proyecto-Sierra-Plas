import nodemailer from 'nodemailer';


export async function enviarCorreoRecuperacion(email, token) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pemexmetro580@gmail.com',
      pass: 'ircg oshw szrm iybj'
    }
  });

  // Limpiar el token de posibles fragmentos extraños
  let cleanToken = token;
  if (typeof cleanToken === 'string') {
    cleanToken = cleanToken.split('#')[0].split('&')[0];
  }


  // Enlace para la app Electron
  const electronLink = `scitm://reset-password?token=${cleanToken}`;
  // Enlace para la web (ajusta el dominio si es necesario)
  const webLink = `http://localhost:3000/#/reset-password?token=${cleanToken}`;

  // Instrucción para el usuario
  const instrucciones = `
    <p><b>Si tienes la app instalada, haz clic en el botón rojo para abrirla directamente.<br>
    Si prefieres usar la versión web, usa el enlace azul.</b></p>
  `;

  const resetLinkHtml = `
    <div style="font-family: Arial, sans-serif; color: #222; background: #f7f7f7; padding: 24px; border-radius: 8px; max-width: 480px; margin: auto;">
      <h2 style="color: #006341;">Recuperación de contraseña</h2>
      <p>Recibimos una solicitud para restablecer tu contraseña. Elige una opción:</p>
      <a href="${electronLink}" style="display: inline-block; padding: 12px 24px; background: #d0021b; color: #fff; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 16px 0;">Abrir en la app</a>
      <br><br>
      <a href="${webLink}" style="display: inline-block; padding: 12px 24px; background: #006341; color: #fff; border-radius: 6px; text-decoration: none; font-weight: bold; margin: 16px 0;">Abrir en la web</a>
      ${instrucciones}
      <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
      <p style="font-size: 13px; color: #888;">Este enlace caduca en 15 minutos.</p>
    </div>
  `;

  const mailOptions = {
    from: 'pemexmetro580@gmail.com',
    to: email,
    subject: 'Recuperación de contraseña',
    html: resetLinkHtml
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);
    return true;
  } catch (error) {
    console.error('Error enviando correo:', error);
    throw new Error('No se pudo enviar el correo');
  }
}
