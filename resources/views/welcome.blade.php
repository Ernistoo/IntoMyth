<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IntoMyth</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Styles -->
    <style>
        body {
            font-family: 'Figtree', sans-serif;
            background: linear-gradient(135deg, #fcff33, #8a0101);
            color: #ffffff;
            margin: 0;
        }

        .min-h-screen {
            min-height: 100vh;
        }

        .text-center {
            text-align: center;
        }

        .max-w-2xl {
            max-width: 42rem;
            margin: auto;
            margin-bottom: 350px;
        }

        .rounded-md {
            border-radius: 0.375rem;
        }

        .shadow {
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .hover\:bg-green-600:hover {
            background-color: #059669;
        }

        .hover\:bg-purple-600:hover {
            background-color: #7c3aed;
        }

        .transition {
            transition: background-color 0.3s ease;
        }

        .gap-4 {
            gap: 1rem;
        }

        .flex {
            display: flex;
        }

        .justify-center {
            justify-content: center;
        }

        .text-4xl {
            font-size: 2.25rem;
            line-height: 2.5rem;
        }

        .font-semibold {
            font-weight: 600;
        }

        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .py-2 {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        .text-color {
            color: #073324;
        }

        .linez {
            text-decoration-line: underline;
            text-decoration-color: #04583c;
        }

        .bg-green-500 {
            background-color: #89fcd5;
        }

        .bg-purple-500 {
            background-color: #a680ff;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }
    </style>
</head>

<body class="font-sans antialiased">

    <div class="min-h-screen flex items-center justify-center">
        <div class="text-center max-w-2xl px-6">
            <x-application-logo class="block h-12 w-auto fill-current text-gray-800 dark:text-gray-200 mb-12" />

            <h1 class="text-4xl text-color linez font-semibold mb-4">Welcome to IntoMyth</h1>

            <div class="flex justify-center gap-4">
                <a href="{{ url('/login') }}" class="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
                    Login
                </a>
                <a href="{{ url('/register') }}" class="bg-purple-500 text-white px-4 py-2 rounded-md shadow hover:bg-purple-600 transition">
                    Register
                </a>
            </div>
        </div>
    </div>
</body>

</html>