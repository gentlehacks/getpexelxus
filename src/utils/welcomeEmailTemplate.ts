// utils/welcomeEmailTemplate.ts
export function welcomeEmailTemplate(name: string) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Welcome to Pexelxus 🎉</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 0;
          margin: 0;
        }
        .container {
          max-width: 600px;
          background-color: #ffffff;
          margin: 20px auto;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #0f172a;
          color: #ffffff;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          padding: 20px;
          color: #333333;
          font-size: 16px;
          line-height: 1.6;
        }
        .btn {
          display: inline-block;
          background-color: #2563eb;
          color: #ffffff;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          margin-top: 20px;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #777777;
          padding-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Pexelxus 🚀</h1>
        </div>
        <div class="content">
          <p>Hi ${name},</p>
          <p>We’re excited to have you on board! 🎉 You’re now officially part of the <strong>Pexelxus Waitlist</strong>.</p>
          <p>We’re building something amazing, and you’ll be among the first to know when we launch.</p>
          <p>Stay tuned — your journey with us has just begun!</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3BwIYAnob79C4dnYzTJTOEtypjq6hJIz7yyr12abgMaxDlQ/viewform?usp=dialog" class="btn">Fill survey now 🙏</a>
          <p style="color:rgb(100, 100, 100); margin-top: 30px;">Salihu Adamu - CEO at PexelXus</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Pexelxus. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
  `;
}
