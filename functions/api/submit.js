export async function onRequestPost(context) {
  const { request, env } = context;

  // Add CORS headers for flexibility during development/testing
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = await request.json();
    const {
      type,
      name,
      email,
      phone,
      message,
      postcode,
      service,
      details,
      town,
      schedule
    } = data;

    // Basic validation
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: Name and Phone Number are required." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    // Configure recipient and sender emails
    const toEmail = env.CONTACT_EMAIL || "info@raymondcleaning.co.uk";
    const fromEmail = env.FROM_EMAIL || "onboarding@resend.dev";
    const resendApiKey = env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not defined in Cloudflare variables.");
      return new Response(
        JSON.stringify({ error: "Server Configuration Error: Email service not configured." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    // Determine subject and construct readable HTML template based on submission type
    let subject = "";
    let htmlContent = "";

    if (type === "contact") {
      subject = `📞 Call Back Request: ${name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 10px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Call Back Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #475569;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;">${email ? `<a href="mailto:${email}">${email}</a>` : "Not provided"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f8fafc; border-left: 4px solid #3b82f6; background: #f8fafc; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 5px; color: #475569;">Notes / Message:</strong>
            <p style="margin: 0; color: #0f172a; white-space: pre-wrap;">${message || "No message provided."}</p>
          </div>
        </div>
      `;
    } else if (type === "booking") {
      subject = `📅 Booking Request: ${name} (${postcode})`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 10px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #10b981; padding-bottom: 8px;">New Booking Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #475569;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Postcode:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: bold; text-transform: uppercase;">${postcode}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${service}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f8fafc; border-left: 4px solid #10b981; background: #f8fafc; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 5px; color: #475569;">Job Details:</strong>
            <p style="margin: 0; color: #0f172a; white-space: pre-wrap;">${details || "No details provided."}</p>
          </div>
        </div>
      `;
    } else if (type === "service-quote") {
      const displayService = typeof service === "object" ? service.title : service;
      subject = `💬 Service Quote: ${displayService} - ${name} (${town})`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 10px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #475569;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Location:</td>
              <td style="padding: 8px 0; color: #0f172a;">${town}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Service:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${displayService}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Interval:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${schedule}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; bg-color: #f8fafc; border-left: 4px solid #f59e0b; background: #f8fafc; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 5px; color: #475569;">Job Notes / Details:</strong>
            <p style="margin: 0; color: #0f172a; white-space: pre-wrap;">${message || "No notes provided."}</p>
          </div>
        </div>
      `;
    } else {
      subject = `📝 Generic Inquiry from ${name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; rounded: 10px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #6b7280; padding-bottom: 8px;">New Web Form Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Message:</strong> ${message || "None"}</p>
        </div>
      `;
    }

    // Call Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: `Raymond Cleaning Forms <${fromEmail}>`,
        to: toEmail,
        subject: subject,
        html: htmlContent,
        reply_to: email || undefined
      })
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error("Resend API failed response:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to dispatch email notification." }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );

  } catch (err) {
    console.error("Submission controller crash:", err);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
}

// OPTIONS pre-flight handler to resolve CORS during cross-origin test calls
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    }
  });
}
