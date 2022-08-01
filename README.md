# Trteeb Challenge Solution by Mohammed Al-Madhoun

## Description

This is a solution for Trteeb Challenge that is shared through Toptal, in order to get hired by Trteeb.

## Logic used

I used the transient to store the retrived data from miusage API, and I set the expiration time to be 1 hour.

## Functionalities

### WP CLI
You can use the following command:
```
wp trteeb force_refresh
```
to force the refresh (override the 1 hour expiration time) of the transient, the next time the AJAX endpoint is called.

### Shortcode
You can add teh following shortcode in order to display the API data:
```
[trteeb_data]
```

### AJAX endpoint
You can test the AJAX endpoint using the following link:
```
https://localhost/trteeb/wp-admin/admin-ajax.php
```

And you have to add the `action` variable to the request body. The value of the `action` variable should be `trteeb_data`.
