<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ $mode === 'create' ? 'Create Blog Post' : ($mode === 'edit' ? 'Edit Blog Post' : ($mode === 'view' ? $post->title : 'Share your thoughts about mythology!')) }}
        </h2>
    </x-slot>

    <div class="container mx-auto px-4 py-8">
        @if ($mode === 'index')
            <a href="{{ route('blog-posts.create') }}"
               class="mb-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">New Post</a>

            @foreach($posts as $post)
                <div class="mb-4 p-6 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md border border-gray-300 dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ $post->title }}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mt-2">{{ Str::limit($post->content, 150) }}</p>
                    <div class="mt-4 flex gap-3">
                        <a href="{{ route('blog-posts.show', $post) }}" class="text-blue-600 dark:text-blue-400 hover:underline">View</a>
                        <a href="{{ route('blog-posts.edit', $post) }}" class="text-yellow-600 dark:text-yellow-400 hover:underline">Edit</a>
                        <form method="POST" action="{{ route('blog-posts.destroy', $post) }}">
                            @csrf @method('DELETE')
                            <button class="text-red-600 dark:text-red-400 hover:underline" onclick="return confirm('Delete this post?')">Delete</button>
                        </form>
                    </div>
                </div>
            @endforeach

        @elseif ($mode === 'create' || $mode === 'edit')
            <form method="POST" action="{{ $mode === 'edit' ? route('blog-posts.update', $post) : route('blog-posts.store') }}">
                @csrf
                @if ($mode === 'edit') @method('PUT') @endif

                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-gray-300">Title</label>
                    <input type="text" name="title" value="{{ old('title', $post->title ?? '') }}"
                           class="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:text-white" required>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 dark:text-gray-300">Content</label>
                    <textarea name="content" rows="5"
                              class="w-full mt-1 p-2 rounded border dark:bg-gray-800 dark:text-white"
                              required>{{ old('content', $post->content ?? '') }}</textarea>
                </div>

                <button type="submit"
                        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    {{ $mode === 'edit' ? 'Update' : 'Create' }}
                </button>
            </form>

        @elseif ($mode === 'view')
            <div class="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow border border-gray-300 dark:border-gray-600">
                <p class="text-gray-800 dark:text-gray-200">{{ $post->content }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Posted on {{ $post->created_at->format('M d, Y') }}
                </p>
            </div>
        @endif
    </div>
</x-app-layout>
