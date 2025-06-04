<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>Travelverse</title>

        <link rel="icon" href="{{ asset('images/logo/logo.png') }}" type="image/png" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />


        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead

        <link id="theme-css" href={{asset('/themes/tailwind-light/theme.css')}} rel="stylesheet"></link>
        <link href="{{ asset('themes/ionicons/css/ionicons.min.css') }}" rel="stylesheet" />
        <link href="{{ asset('themes/fontawesome/css/font-awesome.min.css') }}" rel="stylesheet" />
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
