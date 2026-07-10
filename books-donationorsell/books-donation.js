// // script.js

// document.getElementById('donation-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const phone = document.getElementById('phone').value.trim();
//     const address = document.getElementById('address').value.trim();
//     const books = document.getElementById('books').value.trim();

//     // Validate form fields
//     if (!name) {
//         alert('Name is required.');
//         return;
//     }

//     if (!email || !validateEmail(email)) {
//         alert('Please provide a valid email address.');
//         return;
//     }

//     if (!phone || !validatePhone(phone)) {
//         alert('Please provide a valid phone number.');
//         return;
//     }

//     if (!address) {
//         alert('Address is required.');
//         return;
//     }

//     if (!books) {
//         alert('Please specify the books you are donating.');
//         return;
//     }

//     const donationDetails = {
//         name,
//         email,
//         phone,
//         address,
//         books
//     };

//     // Simulate sending data to a backend server
//     sendDonationData(donationDetails).then(response => {
//         if (response.success) {
//             alert('Thank you for your donation! We will get in touch soon.');
//             // Clear the form
//             document.getElementById('donation-form').reset();
//         } else {
//             alert('There was an error processing your donation. Please try again later.');
//         }
//     }).catch(error => {
//         console.error('Error submitting donation:', error);
//         alert('An unexpected error occurred. Please try again later.');
//     });
// });

// // Helper function to validate email
// function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Helper function to validate phone number
// function validatePhone(phone) {
//     const phoneRegex = /^[0-9]{10}$/;
//     return phoneRegex.test(phone);
// }

// // Simulate sending data to a server
// function sendDonationData(data) {
//     return new Promise((resolve) => {
//         console.log('Sending donation data to server:', data);
//         setTimeout(() => {
//             resolve({ success: true });
//         }, 1000); // Simulate server response delay
//     });
// }

// script.js





document.getElementById('donate-sell-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const books = document.getElementById('books').value.trim();
    const action = document.getElementById('action').value;

    // Validate form fields
    if (!name || !email || !phone || !address || !books || !action) {
        alert('Please fill out all fields correctly.');
        return;
    }

    const submissionData = {
        name,
        email,
        phone,
        address,
        booksname,
        books,
        action
    };

    // Simulate sending data to a backend server
    console.log('Form submitted with:', submissionData);
    alert(`Thank you for choosing to ${action} your books! We will contact you shortly.`);

    // Clear the form after submission
    this.reset();
});



//   function sendEmail(){
//     Email.send({
//         Host:"smtp.gmail.com",
//         Username:"bhumimusic2@gmail.com",
//         Password: "saurya11253v",
//         To : 'sauryakapoor1@gmail.com',
//         From: document.getElementById("email").value,
//         Subject: "New Contact Form Enquiry",
//         Body: "Name:" + document.getElementById("name").value 
//         + "<br> Email: "+ document.getElementById("email").value
//         + "<br> Phone no:" + document.getElementById("phone").value
//         + "<br> Message:" + document.getElementById("address").value
//     }).then(
//       message => alert("message sent!")
//     );
//   }

