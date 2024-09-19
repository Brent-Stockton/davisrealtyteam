import emailjs from "emailjs-com";

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const serviceID = "service_z2yllxr";
  const templateID = "template_ys1w805";
  const userID = "4noXVBrUk5ALs0qDI";

  const templateParams = {
    to_name: "Davis Realty Team",
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };

  return emailjs.send(serviceID, templateID, templateParams, userID);
};
