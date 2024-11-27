<?php 
  // Establish connection
  $con = mysqli_connect('localhost', 'root', '', 'service_form');

  if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }

  if (isset($_POST['sb'])) {
    $Username = mysqli_real_escape_string($con, $_POST['name']);
    $Email = mysqli_real_escape_string($con, $_POST['email']);
    $Message = mysqli_real_escape_string($con, $_POST['message']);
    
    // Corrected SQL query
    $query = "INSERT INTO contacts (name,email, message) VALUES ('$Username', '$Email', '$Message')";
    
    // Execute the query
    if (mysqli_query($con, $query)) {
      echo "Record inserted successfully.";
    } else {
      echo "Error: " . $query . "<br>" . mysqli_error($con);
    }
  }
  // Close the connection
  mysqli_close($con);
?>
