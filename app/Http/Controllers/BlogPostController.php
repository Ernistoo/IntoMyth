<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogPost;

class BlogPostController extends Controller
{
    public function index()
    {
        $posts = BlogPost::latest()->get();
        return view('blog', [
            'mode' => 'index',
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        return view('blog', [
            'mode' => 'create',
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        BlogPost::create($request->only('title', 'content'));

        return redirect()->route('blog-posts.index')->with('success', 'Post created successfully.');
    }

    public function show(BlogPost $blogPost)
    {
        return view('blog', [
            'mode' => 'view',
            'post' => $blogPost,
        ]);
    }

    public function edit(BlogPost $blogPost)
    {
        return view('blog', [
            'mode' => 'edit',
            'post' => $blogPost,
        ]);
    }

    public function update(Request $request, BlogPost $blogPost)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $blogPost->update($request->only('title', 'content'));

        return redirect()->route('blog-posts.index')->with('success', 'Post updated.');
    }

    public function destroy(BlogPost $blogPost)
    {
        $blogPost->delete();

        return redirect()->route('blog-posts.index')->with('success', 'Post deleted.');
    }
}
