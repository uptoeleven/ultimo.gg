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

// Takes raw data from the request
    $json = file_get_contents('php://input');

// Converts it into a PHP object
    $data = json_decode($json, true);
    error_log("string: " . $json);
    error_log(print_r($data, true));

    $endpoint = new EmsApi\Endpoint\ListSubscribers();
// CREATE / UPDATE EXISTING SUBSCRIBER
    $response = $endpoint->createUpdate('ov9123zvrc048', [
        'EMAIL' => $data['EMAIL'],
        'FNAME' => $data['FNAME'] ?? '',
        'LNAME' => $data['LNAME'] ?? '',
        'PHONE_NUMBER' => $data['PHONE_NUMBER'] ?? '',
        'COUNTRY' => $data['COUNTRY'] ?? '',
    ]);

    /*
     * [Fri Sep 10 21:50:57.901745 2021] [php7:notice] [pid 141084] [client 188.114.111.229:48158] Array\n(\n    [HTTPS] => on\n    [SSL_TLS_SNI] => ultimo.gg\n    [HTTP_HOST] => ultimo.gg\n    [HTTP_CONNECTION] => Keep-Alive\n    [HTTP_ACCEPT_ENCODING] => gzip\n    [HTTP_CF_IPCOUNTRY] => ES\n    [HTTP_X_FORWARDED_FOR] => 212.230.231.121\n    [HTTP_CF_RAY] => 68cbdffb4b131515-MAD\n    [CONTENT_LENGTH] => 101\n    [HTTP_X_FORWARDED_PROTO] => https\n    [HTTP_CF_VISITOR] => {"scheme":"https"}\n    [HTTP_PRAGMA] => no-cache\n    [HTTP_CACHE_CONTROL] => no-cache\n    [HTTP_SEC_CH_UA] => "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"\n    [HTTP_ACCEPT] => application/json\n    [CONTENT_TYPE] => application/json\n    [HTTP_SEC_CH_UA_MOBILE] => ?0\n    [HTTP_USER_AGENT] => Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36\n    [HTTP_SEC_CH_UA_PLATFORM] => "macOS"\n    [HTTP_ORIGIN] => https://ultimo.gg\n    [HTTP_SEC_FETCH_SITE] => same-origin\n    [HTTP_SEC_FETCH_MODE] => cors\n    [HTTP_SEC_FETCH_DEST] => empty\n    [HTTP_REFERER] => https://ultimo.gg/signupdev\n    [HTTP_ACCEPT_LANGUAGE] => en,es;q=0.9,en-GB;q=0.8,en-US;q=0.7\n    [HTTP_COOKIE] => _fbp=fb.1.1624798879973.557047169; _ga_RCNNCMBSRV=GS1.1.1627513658.2.0.1627513658.0; _ga=GA1.1.188661754.1624798880; cf_chl_prog=a10; cf_clearance=TIidJuogI.4vpWOplldcbNqkfmmV93CMtRZoTrwbOmU-1631310510-0-150; _ga_S3KVEFTGKW=GS1.1.1631308571.22.1.1631310634.0\n    [HTTP_CF_CONNECTING_IP] => 212.230.231.121\n    [HTTP_CDN_LOOP] => cloudflare\n    [PATH] => /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin\n    [SERVER_SIGNATURE] => <address>Apache/2.4.41 (Ubuntu) Server at ultimo.gg Port 443</address>\n\n    [SERVER_SOFTWARE] => Apache/2.4.41 (Ubuntu)\n    [SERVER_NAME] => ultimo.gg\n    [SERVER_ADDR] => 167.172.161.31\n    [SERVER_PORT] => 443\n    [REMOTE_ADDR] => 188.114.111.229\n    [DOCUMENT_ROOT] => /var/www/ultimo.gg/public_html\n    [REQUEST_SCHEME] => https\n    [CONTEXT_PREFIX] => \n    [CONTEXT_DOCUMENT_ROOT] => /var/www/ultimo.gg/public_html\n    [SERVER_ADMIN] => simon@ultgg.io\n    [SCRIPT_FILENAME] => /var/www/ultimo.gg/public_html/userPost/index.php\n    [REMOTE_PORT] => 48158\n    [GATEWAY_INTERFACE] => CGI/1.1\n    [SERVER_PROTOCOL] => HTTP/1.1\n    [REQUEST_METHOD] => POST\n    [QUERY_STRING] => \n    [REQUEST_URI] => /userPost/index.php\n    [SCRIPT_NAME] => /userPost/index.php\n    [PHP_SELF] => /userPost/index.php\n    [REQUEST_TIME_FLOAT] => 1631310657.9008\n    [REQUEST_TIME] => 1631310657\n)\n, referer: https://ultimo.gg/signupdev
     */