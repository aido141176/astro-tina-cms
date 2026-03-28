export const bookingForm = {
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true, grid: "half" },
    { name: "email", label: "Email", type: "email", required: true, grid: "half" },

    { name: "phone", label: "Phone", type: "text", required: true, grid: "half" },
    { name: "service", label: "Service", type: "select", required: true, grid: "half",
      options: ["High Tea", "Catering", "Private Event"] },

    { name: "date", label: "Date", type: "date", grid: "half" },
    { name: "guests", label: "Guests", type: "number", grid: "half" },

    { name: "message", label: "Notes", type: "textarea", grid: "full" },
  ],
};