<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased">
    <div class="min-h-screen bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700">
        @include('layouts.navigation')

        <!-- Page Heading -->
        @isset($header)
    <header class="bg-white bg-transparent shadow-lg">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="relative">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 rounded-lg blur opacity-10 dark:opacity-15"></div>
                <div class="relative px-6 py-4 bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg shadow-sm">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                        {{ $header }}
                    </h1>
                    <div class="absolute bottom-0 left-6 h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full"></div>
                </div>
            </div>
        </div>
    </header>
@endisset

        <!-- Page Content -->
        <main>
            {{ $slot }}
        </main>
    </div>
</body>

</html>