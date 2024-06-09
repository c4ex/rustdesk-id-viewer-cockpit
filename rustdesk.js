document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('get-id-btn').addEventListener('click', function() {
        cockpit.spawn(['sudo', 'rustdesk', '--get-id'])
            .then(function(data) {
                document.getElementById('rustdesk-id').innerText = 'RustDesk ID: ' + data.trim();
            })
            .catch(function(error) {
                document.getElementById('rustdesk-id').innerText = 'Error: ' + error;
            });
    });
});

