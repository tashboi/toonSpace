
<?php

if(isset($_POST['submit'])) {
    $mailto = "w18011022@northumbria.ac.uk";  //My email address
    //getting customer data
    $fname = $_POST['fname']; //getting customer name
    $lname = $_POST['lname']; //getting customer name
    $EnquirySubject = $_POST['subject']; //getting customer name
    $EnquiryEmail = $_POST['email']; //getting customer email
    $Enquiry = $_POST['enquiry']; //getting subject line from client

    //Email body I will receive
    $message = "Enquiry From: " . $fname . $lname . "\n"
        . "Their email address: " . $EnquiryEmail . "\n\n"
        . "Enquiry: " . "\n" .$Enquiry;

    //Email headers
    $headers = "From: " . $EnquiryEmail; // Client email, I will receive


    //PHP mailer function

    $Sent = mail($mailto, $EnquirySubject, $message, $headers); // This email sent to My address

    //Checking if Mails sent successfully

    if ($Sent) {
        $success = "Your Message was sent Successfully!";
    } else {
        $failed = "Sorry! Message was not sent, Try again Later.";
    }

}

?>
