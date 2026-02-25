// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_29z4nxn",
//         "template_412vpsl",
//         form.current,
//         "yHwi•••••••••••••••••"
//       )
//       .then(
//         () => {
//           alert("Message sent successfully ✅");
//         },
//         () => {
//           alert("Failed to send message ❌");
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <div>
//       <h2>Contact Me</h2>
//       <form ref={form} onSubmit={sendEmail}>
//         <input type="text" name="name" placeholder="Your Name" required />
//         <input type="email" name="email" placeholder="Your Email" required />
//         <textarea name="message" placeholder="Your Message" required />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// export default Contact;