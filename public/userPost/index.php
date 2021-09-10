<?php
    require_once __DIR__ . '/vendor/autoload.php';

// configuration object
    $config = new EmsApi\Config([
        'apiUrl'    => 'https://mw.ultgg.io/api/index.php/',
        'apiKey'    => '3b1be39c33761bc77ee4fdedcad737bb4c425e8c',

        // components
        'components' => [
            'cache' => [
                'class'     => \EmsApi\Cache\File::class,
                'filesPath' => __DIR__ . '/data/cache', // make sure it is writable by webserver
            ]
        ],
    ]);

// now inject the configuration and we are ready to make api calls
    \EmsApi\Base::setConfig($config);

// start UTC
    date_default_timezone_set('UTC');

    $endpoint = new EmsApi\Endpoint\ListSubscribers();
// CREATE / UPDATE EXISTING SUBSCRIBER
    $response = $endpoint->createUpdate('ov9123zvrc048', [
        'EMAIL' => $_POST['EMAIL'],
        'FNAME' => $_POST['FNAME'],
        'LNAME' => $_POST['LNAME'],
        'PHONE_NUMBER' => $_POST['PHONE_NUMBER'],
        'COUNTRY' => $_POST['COUNTRY'],
    ]);
