<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $book_name = htmlspecialchars($_POST['book_name']);
    $books = htmlspecialchars($_POST['books']);
    $action = htmlspecialchars($_POST['action']);

    // Recipient email address
    $to = "sauryakapoor1@gmail.com";

    // Subject
    $subject = "New Book Donation/Sale Request";

    // Message
    $message = "
    A new submission has been received:

    Name: $name
    Email: $email
    Phone: $phone
    Address: $address
    Book Name: $book_name
    Books Details: $books
    Action: $action
    ";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your submission. We will get in touch soon.";
    } else {
        echo "There was an error sending your request. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
