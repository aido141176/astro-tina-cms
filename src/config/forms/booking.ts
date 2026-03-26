// src/config/forms/booking.ts
export const bookingForm = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "text", required: true },
    {
      name: "service",
      label: "Service",
      type: "select",
      options: ["High Tea", "Catering", "Private Event"],
    },
    { name: "date", label: "Date", type: "date" },
    { name: "guests", label: "Guests", type: "number" },
    { name: "message", label: "Notes", type: "textarea" },
  ],
};