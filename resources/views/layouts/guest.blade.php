<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>IntoMyth</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        
        <style>
    .bg-texture {
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 30%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 25%);
        background-color: #f5f5f5;
    }
    .dark .bg-texture {
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 30%),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 25%);
        background-color: #374151; /* gray-700 */
    }
</style>
    </head>
    <body class="font-sans text-gray-800 antialiased bg-gray-50 dark:bg-gray-700 bg-texture">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <!-- Animated background elements -->
            <div class="fixed inset-0 overflow-hidden pointer-events-none">
                <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200 dark:bg-gray-600 rounded-full mix-blend-multiply opacity-10 blur-xl"></div>
                <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-300 dark:bg-gray-500 rounded-full mix-blend-multiply opacity-10 blur-xl"></div>
            </div>

            <!-- Logo with subtle animation -->
            <div class="relative z-10 transform transition-all duration-300 hover:scale-105">
                <a href="/" class="flex items-center justify-center">
                    <x-application-logo class="w-24 h-24 fill-current text-gray-700 dark:text-gray-300 drop-shadow-sm" />
                </a>
            </div>

            <!-- Main card with glass morphism effect -->
            <div class="relative z-10 w-full sm:max-w-md mt-8 px-8 py-8 bg-white/90 dark:bg-gray-600/90 backdrop-blur-sm border border-gray-200 dark:border-gray-500/30 card-glow rounded-xl transition-all duration-300 hover:shadow-lg overflow-hidden sm:rounded-2xl">
                <!-- Decorative accent line -->
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-500 dark:via-gray-400 dark:to-gray-500"></div>
                
                {{ $slot }}
            </div>

            <!-- Footer -->
            <div class="relative z-10 mt-8 text-sm text-gray-500 dark:text-gray-400">
                &copy; {{ date('Y') }}  IntoMyth - All rights reserved.
            </div>
        </div>
    </body>
</html>