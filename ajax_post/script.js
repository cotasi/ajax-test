function submitForm() {
    var formData = $('#myForm').serialize();

    $.ajax({
        type: 'POST',
        url: 'process.php',
        data: formData,
        success: function (response) {
            $('#result').html(response);
        }
    });
}
