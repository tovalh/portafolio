import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Todos los campos son requeridos.' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
        from: 'Portafolio <contacto@toval.dev>',
        to: 'crisvalladares98@gmail.com',
        replyTo: email,
        subject: `Nuevo mensaje de ${name} — toval.dev`,
        html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 12px;">
                <h2 style="color: #111; margin-bottom: 4px;">Nuevo mensaje desde tu portafolio</h2>
                <p style="color: #666; font-size: 14px; margin-top: 0;">toval.dev · Formulario de contacto</p>
                <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Mensaje:</strong></p>
                <div style="background: #fff; border-left: 4px solid #6366f1; padding: 16px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
                <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;" />
                <p style="font-size: 12px; color: #999;">Respondé directamente a este correo para contestarle a ${name}.</p>
            </div>
        `,
    });

    if (error) {
        return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}